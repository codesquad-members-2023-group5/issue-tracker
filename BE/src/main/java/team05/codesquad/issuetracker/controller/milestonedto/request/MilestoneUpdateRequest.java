package team05.codesquad.issuetracker.controller.milestonedto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;

@Slf4j
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MilestoneUpdateRequest {

    private String title;
    private String description;
    private LocalDate deadLine;

}
