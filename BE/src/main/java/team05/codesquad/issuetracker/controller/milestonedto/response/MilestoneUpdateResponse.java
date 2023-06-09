package team05.codesquad.issuetracker.controller.milestonedto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;

@Slf4j
@Getter
@Builder
public class MilestoneUpdateResponse {

    private String title;
    private String description;
    private LocalDate deadLine;

}
