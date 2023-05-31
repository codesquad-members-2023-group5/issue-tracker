package team05.codesquad.issuetracker.domain.issue;


import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.domain.label.Label;
import team05.codesquad.issuetracker.domain.member.Assignee;
import team05.codesquad.issuetracker.domain.member.Member;
import team05.codesquad.issuetracker.domain.milestone.Milestone;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Table("issue")
@Setter
@Getter
@ToString
@AllArgsConstructor
@Builder
public class Issue {

    @Id
    @Column("issue_id")
    private Long id;
    private String title;
    @Column("is_opened")
    private Boolean isOpened;

    @CreatedDate
    @Column("created_at")
    private LocalDateTime createdAt;

    @Column("writer_id")
    private Long writerId;

    @Column("milestone_id")
    private Milestone milestone;

    @Transient
    private List<Label> labels = new ArrayList<>();

    @Transient
    private List<Member> assignees = new ArrayList<>();

    public Issue() {
    }

    @MappedCollection(idColumn = "issue_id", keyColumn = "label_id")
    @Builder.Default
    private Set<IssueRefLabel> issueLabels = new HashSet<>();

    @MappedCollection(idColumn = "issue_id", keyColumn = "member_id")
    @Builder.Default
    private Set<Assignee> issueAssignees = new HashSet<>();

    public void addLabel(Label label) {
        labels.add(label);
        issueLabels.add(new IssueRefLabel(label.getId(), id));
    }

    public void addAssignee(Member member) {
        assignees.add(member);
        issueAssignees.add(new Assignee(member.getId(), id));
    }

    public void editIssue(String title) {
        this.title = title;
    }

    public boolean isOpened() {
        return this.isOpened;
    }

}
