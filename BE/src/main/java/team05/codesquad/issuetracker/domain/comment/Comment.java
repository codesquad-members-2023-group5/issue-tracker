package team05.codesquad.issuetracker.domain.comment;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;

@Slf4j
@Table("comment")
@Getter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
public class Comment {

    @Id
    @Column("comment_id")
    private Long id;

    @Column("writer_id")
    private Long writerId;

    @Column("issue_id")
    private Long issueId;

    @Column("contents")
    private String contents;

    @CreatedDate
    @Column("created_at")
    private LocalDate createdAt;

    @Builder
    public Comment(Long writerId, Long issueId, String contents, LocalDate createdAt) {
        this.writerId = writerId;
        this.issueId = issueId;
        this.contents = contents;
        this.createdAt = createdAt;
    }

    // TODO: updateProperties 구현하기
}
