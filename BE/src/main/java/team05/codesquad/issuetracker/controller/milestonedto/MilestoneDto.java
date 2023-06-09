package team05.codesquad.issuetracker.controller.milestonedto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.controller.issuedto.response.IssuesResponse;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

import java.time.LocalDate;
import java.util.List;

@Getter
@NoArgsConstructor
public class MilestoneDto {

    private Long id;
    private String title;
    private String description;
    private LocalDate deadLine;
    private Boolean isOpened;
    private IssuesResponse issuesResponse;

    private MilestoneDto(Milestone milestone, IssuesResponse issuesResponse) {
        this.id = milestone.getId();
        this.title = milestone.getTitle();
        this.description = milestone.getDescription();
        this.deadLine = milestone.getDeadLine();
        this.isOpened = true;
        this.issuesResponse = issuesResponse;
    }

    public static MilestoneDto of(Milestone milestone, IssuesResponse issuesResponse) {
        return new MilestoneDto(milestone, issuesResponse);
    }

}
