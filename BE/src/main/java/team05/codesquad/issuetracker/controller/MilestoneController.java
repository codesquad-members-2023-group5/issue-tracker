package team05.codesquad.issuetracker.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneCreateRequest;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneUpdateRequest;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneCreateResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneListResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneUpdateResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneWithIssuesResponse;
import team05.codesquad.issuetracker.service.MilestoneService;

@Slf4j
@RestController
@RequestMapping("/milestones")
public class MilestoneController {

    private final MilestoneService milestoneService;

    @Autowired
    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @GetMapping
    public MilestoneListResponse allMilestones() {
        log.info(">>> MilestoneController allMilestones");
        return milestoneService.allMilestoneDto();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public MilestoneCreateResponse createMilestone(@RequestBody MilestoneCreateRequest request) {
        log.info(">>> MilestoneController createMilestone");
        return milestoneService.createMilestone(request);
    }

    @GetMapping("/{milestoneId}")
    public MilestoneWithIssuesResponse milestoneWithIssues(@PathVariable Long milestoneId) {
        log.info(">>> MilestoneController milestoneWithIssues");
        return milestoneService.getMilestoneWithIssues(milestoneId);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteMilestone(@PathVariable Long id) {
        log.info(">>> MilestoneController deleteMilestone");
        milestoneService.deleteMilestone(id);
    }

    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public MilestoneUpdateResponse updateMilestone(@PathVariable Long id, @RequestBody MilestoneUpdateRequest request) {
        log.info(">>> MilestoneController updateMilestone");
        return milestoneService.updateMilestone(id, request);
    }
}
