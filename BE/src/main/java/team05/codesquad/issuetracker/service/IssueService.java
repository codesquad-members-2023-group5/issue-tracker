package team05.codesquad.issuetracker.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team05.codesquad.issuetracker.controller.issuedto.request.IssueRequest;
import team05.codesquad.issuetracker.controller.issuedto.response.IssueResponse;
import team05.codesquad.issuetracker.controller.issuedto.response.IssuesResponse;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.domain.issue.IssueRefLabel;
import team05.codesquad.issuetracker.repository.IssueRepository;
import team05.codesquad.issuetracker.repository.LabelRepository;
import team05.codesquad.issuetracker.repository.MilestoneRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;

    public IssueResponse createIssue(IssueRequest request) {
        // 마일스톤이 123밖에없는데 4오면? 그냥 null
        Issue issue = request.toEntity(null);
        if (request.getMilestoneId() != null) {
            issue = request.toEntity(milestoneRepository.findById(request.getMilestoneId()).orElseThrow());
        }
        return IssueResponse.from(issueRepository.save(issue));
    }

    // issueRepo에서 table에 대한 내용만 가져옴 -> table에 있는 param id로 label, issueWithLabel join
    public IssueResponse findById(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IllegalArgumentException::new);
        issue.getIssueLabels()
                .stream()
                .map(IssueRefLabel::getLabelId)
                .collect(Collectors.toList())
                .forEach(labelId -> issue.addLabel(labelRepository.findById(labelId)
                        .orElseThrow()));
        return IssueResponse.from(issue);
    }

    // 열린 이슈만 가져와서 리스트로 만들어주고 -> 그럼 이슈 아이디 여러개가 있으니까 거기에 label들 가져와야함
    public IssuesResponse findAll() {
        List<IssueResponse> openList = getIssueResponses(true);
        List<IssueResponse> closeList = getIssueResponses(false);

        return new IssuesResponse(openList, closeList);
    }

    private List<IssueResponse> getIssueResponses(boolean isOpened) {
        List<Issue> findIssues = issueRepository.findByIsOpened(isOpened);
        List<IssueResponse> responseList = new ArrayList<>();   // 모든 열린 이슈들, 각각의 라벨
        for (Issue issue : findIssues) {
            issue.setLabels(labelRepository.findAllByIssueId(issue.getId()));
            responseList.add(IssueResponse.from(issue));
        }
        return responseList;
    }


    // 마일스톤 추가하기


    /**
     * 1. 한번에 모든 걸 뿌려서 필터가 바뀌지 않은 한 요청을 안보낸다 -> 슬랙에 보낸 값
     * 2. Controller에서 open 따로, close 따로 -> close issue, close count
     */


}
