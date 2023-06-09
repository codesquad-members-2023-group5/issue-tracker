package team05.codesquad.issuetracker.repository;

import org.springframework.data.repository.CrudRepository;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

public interface MilestoneRepository extends CrudRepository<Milestone, Long> {

}
