package team05.codesquad.issuetracker.domain.issue;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

import java.sql.ResultSet;
import java.sql.SQLException;

public class IssueRowMapper implements RowMapper<Issue> {

    @Override
    public Issue mapRow(ResultSet rs, int rowNum) throws SQLException {
        Issue issue = new BeanPropertyRowMapper<>(Issue.class).mapRow(rs, rowNum);
        Long milestoneId = rs.getLong("milestone_id");
        Milestone milestone = Milestone.builder()
                .id(milestoneId == 0 ? null : milestoneId)
                .title(rs.getString("milestone_title"))
                .deadLine(null)
                .description(rs.getString("milestone_description"))
                .isOpened(rs.getBoolean("milestone_is_opened"))
                .build();

        issue.setMilestone(milestone);

        return issue;
    }
}
