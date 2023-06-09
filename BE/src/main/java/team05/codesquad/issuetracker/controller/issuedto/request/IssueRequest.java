package team05.codesquad.issuetracker.controller.issuedto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class IssueRequest {
    private String title;
    private String contents;
    private Long milestoneId;
    private List<Long> assingeeIds;
    private List<Long> labels;

    public Issue toEntity(Milestone milestone) {
        return Issue.builder()
                .title(title)
                .contents(contents)
                .milestone(milestone)
                .writerId(1L) // 멤버 어카노...
                //.assingeeIds(assingeeIds)
                .isOpened(true)
                .labels(Collections.emptyList())
                .createdAt(LocalDateTime.now())
                .build();
    }
}
