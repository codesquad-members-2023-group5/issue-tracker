package team05.codesquad.issuetracker.controller.milestonedto.response;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class MilestoneCreateResponse {

    private final Long milestoneId;

    public MilestoneCreateResponse(Long milestoneId) {
        this.milestoneId = milestoneId;
    }
}
