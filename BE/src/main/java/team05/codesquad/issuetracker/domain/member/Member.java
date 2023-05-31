package team05.codesquad.issuetracker.domain.member;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

@Setter
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
public class Member {

    @Id
    @Column("member_id")
    private Long id;

    private String name;

    private String password;
    @Column("profile_url")

    private String imgUrl;


}
