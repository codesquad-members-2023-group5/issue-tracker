package team05.codesquad.issuetracker.controller.milestonedto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.controller.milestonedto.MilestoneDto;

import java.util.List;

@Getter
@NoArgsConstructor
public class MilestoneListResponse {

    private List<MilestoneDto> data;

    public MilestoneListResponse(List<MilestoneDto> allMilestones) {
        this.data = allMilestones;
    }
}
