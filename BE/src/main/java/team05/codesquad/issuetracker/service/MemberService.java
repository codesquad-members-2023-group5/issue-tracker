package team05.codesquad.issuetracker.service;

import lombok.Getter;
import lombok.Setter;
import org.springframework.transaction.annotation.Transactional;
import team05.codesquad.issuetracker.domain.member.Member;

import java.util.List;

@Getter
@Setter
@Transactional
public class MemberService {
    private String name;
    private List<Member> memberList;

    public MemberService(String name, List<Member> memberList) {
        this.name = name;
        this.memberList = memberList;
    }
}
