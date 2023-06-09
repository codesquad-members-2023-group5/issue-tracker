package team05.codesquad.issuetracker.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import team05.codesquad.issuetracker.controller.issuedto.response.IssueResponse;
import team05.codesquad.issuetracker.controller.issuedto.response.IssuesResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneWithIssuesResponse;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.domain.issue.IssueRefLabel;
import team05.codesquad.issuetracker.repository.LabelRepository;
import team05.codesquad.issuetracker.domain.milestone.Milestone;
import team05.codesquad.issuetracker.controller.milestonedto.MilestoneDto;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneCreateRequest;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneUpdateRequest;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneCreateResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneListResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneUpdateResponse;
import team05.codesquad.issuetracker.repository.IssueRepository;
import team05.codesquad.issuetracker.repository.MilestoneRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;
    private final IssueRepository issueRepository;
    private final LabelRepository labelRepository;

    public MilestoneCreateResponse createMilestone(@RequestBody MilestoneCreateRequest request) { // Milestone 생성
        Milestone milestone = Milestone.toEntity(request);
        Milestone savedMilestone = milestoneRepository.save(milestone);
        return new MilestoneCreateResponse(savedMilestone.getId());
    }

    public MilestoneListResponse allMilestoneDto() { // 모든 Milestone 조회

        log.info(">>> MilestoneService allMilestoneDto");
        Iterable<Milestone> milestones = milestoneRepository.findAll();
        List<MilestoneDto> milestoneDtoList = new ArrayList<>();
        for (Milestone milestone : milestones) {
            milestoneDtoList.add(MilestoneDto.of(milestone, findIssuesWithMilestoneId(milestone.getId())));
        }

        return new MilestoneListResponse(milestoneDtoList);
    }

    public MilestoneWithIssuesResponse getMilestoneWithIssues(Long milestoneId) {
        log.info(">>> MilestoneService getMilestoneWithIssues");
        Milestone milestone = milestoneRepository.findById(milestoneId).orElseThrow();
        return new MilestoneWithIssuesResponse(MilestoneDto.of(milestone, findIssuesWithMilestoneId(milestoneId)));
    }

    public void deleteMilestone(Long milestoneId) {
        log.info(">>> MilestoneService deleteMilestone");
        Milestone foundMilestone = milestoneRepository.findById(milestoneId).orElseThrow();
        milestoneRepository.delete(foundMilestone);
    }

    public MilestoneUpdateResponse updateMilestone(long milestoneId, MilestoneUpdateRequest request) {
        log.info(">>> MilestoneService updateMilestone");
        Milestone targetMilestone = milestoneRepository.findById(milestoneId).orElseThrow();
        targetMilestone.updateProperties(request.getTitle(), request.getDescription(), request.getDeadLine());
        log.info(">>> targetMilestone title = {}", targetMilestone.getTitle());
        log.info(">>> targetMilestone description = {}", targetMilestone.getDescription());
        milestoneRepository.save(targetMilestone);
        return MilestoneUpdateResponse.builder()
                .title(targetMilestone.getTitle())
                .description(targetMilestone.getDescription())
                .deadLine(targetMilestone.getDeadLine())
                .build();
    }

    private IssuesResponse findIssuesWithMilestoneId(Long milestoneId) {
        List<IssueResponse> openList = getIssueResponsesByMilestoneIdAndIsOpened(milestoneId, true);
        List<IssueResponse> closedList = getIssueResponsesByMilestoneIdAndIsOpened(milestoneId, false);

        return new IssuesResponse(openList, closedList);
    }

    private List<IssueResponse> getIssueResponsesByMilestoneIdAndIsOpened(Long milestoneId, boolean isOpened) {
        List<Issue> findIssues = issueRepository.findByMilestoneIdAndIsOpened(milestoneId, isOpened);
        List<IssueResponse> responseList = new ArrayList<>();   // 모든 열린 이슈들, 각각의 라벨
        for (Issue openIssue : findIssues) {
            responseList.add(findById(openIssue.getId()));
        }
        return responseList;
    }

    public IssueResponse findById(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IllegalArgumentException::new);
        issue.getIssueLabels()
                .stream()
                .map(IssueRefLabel::getLabelId)
                .collect(Collectors.toList())
                .forEach(labelId -> issue.addLabel(labelRepository.findById(labelId)
                        .orElseThrow()));
        log.info(">>> MilestoneService findById");
        return IssueResponse.from(issue);
    }

}
