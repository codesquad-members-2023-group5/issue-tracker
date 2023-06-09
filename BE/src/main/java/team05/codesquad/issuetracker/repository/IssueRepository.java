package team05.codesquad.issuetracker.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.domain.issue.IssueRowMapper;

import java.util.List;

public interface IssueRepository extends CrudRepository<Issue, Long> {

    @Query(value = "SELECT i.issue_id as id, i.title, i.contents, i.is_opened, i.created_at, m.milestone_id " +
            "as milestone_id, m.title as milestone_title, m.description as milestone_description, m.deadline as milestone_deadline, m.is_opened as milestone_is_opened FROM issue i " +
            "LEFT OUTER JOIN milestone m ON m.milestone_id = i.milestone_id WHERE i.is_opened = :isOpened",
            rowMapperClass = IssueRowMapper.class)
    List<Issue> findByIsOpened(@Param("isOpened") boolean isOpened);

    @Query("SELECT issue_id, title, contents, writer_id, is_opened, milestone_id, created_at from issue where milestone_id=:milestoneId and is_opened = :isOpened")
    List<Issue> findByMilestoneIdAndIsOpened(@Param("milestoneId") Long milestoneId, @Param("isOpened") boolean isOpened);
}
