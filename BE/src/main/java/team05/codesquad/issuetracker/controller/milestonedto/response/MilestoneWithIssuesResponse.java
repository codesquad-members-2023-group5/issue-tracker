package team05.codesquad.issuetracker.controller.milestonedto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.controller.milestonedto.MilestoneDto;
import team05.codesquad.issuetracker.domain.issue.Issue;

import java.util.List;

@Getter
@NoArgsConstructor
public class MilestoneWithIssuesResponse {

    private MilestoneDto milestoneDto;

    public MilestoneWithIssuesResponse(MilestoneDto milestoneDto) {
        this.milestoneDto = milestoneDto;
    }
}
