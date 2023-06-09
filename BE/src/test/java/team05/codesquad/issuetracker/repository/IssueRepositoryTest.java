package team05.codesquad.issuetracker.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team05.codesquad.issuetracker.domain.issue.Issue;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
class IssueRepositoryTest {

    @Autowired
    private IssueRepository issueRepository;

//    @DisplayName("이슈 저장 테스트")
//    @Test
//    void saveIssue() {
//        Issue issue = Issue.builder().issueWriter(1).issueTitle("이슈 있슈").issueContents("이슈 이슈 핫 이슈").build();
//
//        Issue savedIssue = issueRepository.save(issue);
//
//        assertThat(savedIssue.getIssueTitle()).isEqualTo(issue.getIssueTitle());
//        assertThat(savedIssue.getIssueWriter()).isEqualTo(issue.getIssueWriter());
//        assertThat(savedIssue.getIssueContents()).isEqualTo(issue.getIssueContents());
//    }
}
