import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import { $Comments } from './style';

const Comments = ({ issue, getNewIssueData }) => {
  const commentData = issue.comment;

  return (
    <$Comments>
      {commentData.map((comment) => (
        <Comment
          key={comment.commentId}
          issueId={issue.issueId}
          commentData={comment}
          writerId={issue.writer.userId}
          getNewIssueData={getNewIssueData}
        />
      ))}
    </$Comments>
  );
};

Comments.propTypes = {
  issue: PropTypes.object.isRequired,
  getNewIssueData: PropTypes.func.isRequired,
};

export default Comments;
