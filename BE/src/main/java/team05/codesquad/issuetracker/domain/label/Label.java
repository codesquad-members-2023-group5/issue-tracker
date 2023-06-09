package team05.codesquad.issuetracker.domain.label;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.domain.issue.IssueRefLabel;

import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

@Table("label")
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
@Builder
public class Label {
    @Id
    @Column("label_id")
    private Long id;
    @NotBlank
    private String title;
    private String description;
    @Column("background_color")
    private String backgroundColor;
    @Column("font_color")
    private String fontColor;

    // issue List, add issue, LabelService에서 찾기
    @MappedCollection(idColumn = "label_id", keyColumn = "id")
    @Builder.Default
    private Set<IssueRefLabel> issueLabels = new HashSet<>();

    public void editLabel(String title, String description, String backgroundColor, String fontColor) {
        this.title = title;
        this.description = description;
        this.backgroundColor = backgroundColor;
        this.fontColor = fontColor;
    }
}
