import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import IssueListMainHeader from './IssueListMainHeader';
import { $Lists, $IssueListMain } from './style';

const IssueListMain = ({ issues, user, label, milestone }) => {
  return (
    <$IssueListMain>
      <IssueListMainHeader user={user} label={label} milestone={milestone} />
      <$Lists>
        {issues.map((issue) => (
          <List key={issue.issueId} {...issue} />
        ))}
      </$Lists>
    </$IssueListMain>
  );
};

IssueListMain.propTypes = {
  issues: PropTypes.array.isRequired,
  user: PropTypes.array.isRequired,
  label: PropTypes.array.isRequired,
  milestone: PropTypes.array.isRequired,
};

export default IssueListMain;
