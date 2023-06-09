package team05.codesquad.issuetracker.controller;

import org.assertj.core.util.Lists;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.service.IssueService;

import java.time.LocalDate;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(IssueController.class)
@AutoConfigureRestDocs
class IssueControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IssueService issueService;

    @Test
    @DisplayName("모든 이슈 가져오기")
    void findAll() throws Exception {
        List<Issue> issues = Lists.newArrayList(
                new Issue(1L, 1, "1번 이슈 제목", "1번 이슈 내용", true, LocalDate.now(), null, null),
                new Issue(2L, 2, "2번 이슈 제목", "2번 이슈 내용", true, LocalDate.now(), null, null),
                new Issue(3L, 3, "3번 이슈 제목", "3번 이슈 내용", true, LocalDate.now(), null, null),
                new Issue(4L, 4, "4번 이슈 제목", "4번 이슈 내용", true, LocalDate.now(), null, null)
        );

        when(issueService.getAllIssues()).thenReturn(issues);

        mockMvc.perform(get("/issues"))
                .andExpect(status().isOk())
                .andDo(document("IssueController-test/getIssues",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint())
                ));
    }

    @Test
    @DisplayName("특정 이슈 가져오기")
    void findById() throws Exception {
        Issue foundIssue = new Issue(1L, 1, "1번 이슈 제목", "1번 이슈 내용", true, LocalDate.now(), null, null);

        when(issueService.findByIssueId(anyLong())).thenReturn(foundIssue);

        mockMvc.perform(get(("/issues/{issueId}"), foundIssue.getId()))
                .andExpect(status().isOk())
                .andDo(document("IssueController-test/findIssueById",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("issueId").description("이슈 ID")
                        ),
                        responseFields(
                                fieldWithPath("id").description("이슈 ID"),
                                fieldWithPath("writerId").description("이슈 작성자 ID"),
                                fieldWithPath("title").description("이슈 제목"),
                                fieldWithPath("contents").description("이슈 내용"),
                                fieldWithPath("openStatus").description("이슈 열림 닫힘 여부"),
                                fieldWithPath("createdAt").description("이슈 작성 시간"),
                                fieldWithPath("milestoneId").description("이슈 소속 마일스톤 ID"),
                                fieldWithPath("comments").description("이슈에 달린 댓글 리스트")
                        )
                ));
    }

    @Test
    @DisplayName("이슈 작성하기")
    void write() throws Exception {

        Issue createdIssue = new Issue(1L, 1, "1번 이슈 제목", "1번 이슈 내용", true, LocalDate.now(), null, null);

        when(issueService.createIssue(any())).thenReturn(createdIssue);

        this.mockMvc.perform(post("/issues")
                        .content("{\"title\": \"1번 이슈 제목\", \n\"contents\": \"1번 이슈 내용\"}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andDo(document("IssueController-test/writeIssue",
                        requestFields(
                                fieldWithPath("title").description("이슈 제목"),
                                fieldWithPath("contents").description("이슈 내용")
                        )));
    }
}