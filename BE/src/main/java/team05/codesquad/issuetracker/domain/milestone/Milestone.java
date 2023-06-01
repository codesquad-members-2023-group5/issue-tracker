package team05.codesquad.issuetracker.domain.milestone;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneCreateRequest;

import java.time.LocalDate;


@Builder
@Getter
@AllArgsConstructor
@Table("milestone")
public class Milestone {

    @Id
    @Column("milestone_id")
    private Long id;

    private String title;

    private String description;

    @Column("deadline")
    private LocalDate deadLine;

    @Column("is_opened")
    private Boolean isOpened;

    public Milestone() {
    }

    @Builder
    public Milestone(String title, String description, LocalDate deadLine, boolean isOpened) {
        this.title = title;
        this.description = description;
        this.deadLine = deadLine;
        this.isOpened = isOpened;
    }

    public static Milestone toEntity(MilestoneCreateRequest request) { // DTO를 Entity로 변환해주는 메서드
        return Milestone.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .deadLine(request.getDeadLine())
                .isOpened(true)
                .build();
    }

    public void updateProperties(String title, String description, LocalDate deadLine, Boolean isOpened) {
        if (title != null) {
            this.title = title;
        }
        if(description!=null) {
            this.description = description;
        }
        if (deadLine != null) {
            this.deadLine = deadLine;
        }
        if (isOpened != null) {
            this.isOpened = isOpened;
        }
    }

}
