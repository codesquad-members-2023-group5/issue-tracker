package team05.codesquad.issuetracker.domain.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("label_attached_issues")
@AllArgsConstructor
@Getter
@Setter
@ToString
public class IssueRefLabel {
    @Column("label_id")
    private Long labelId;
    @Column("issue_id")
    private Long issueId;
}
