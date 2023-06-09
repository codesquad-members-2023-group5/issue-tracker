package team05.codesquad.issuetracker.repository;

import org.springframework.data.repository.CrudRepository;
import team05.codesquad.issuetracker.domain.comment.Comment;

public interface CommentRepository extends CrudRepository<Comment,Long> {
}
