import React from 'react';
import PropTypes from 'prop-types';

import { ISSUES, USERS, LABELS, MILESTONES } from '../../constants/api';

import useFetch from '../../hooks/useFetch';
import { FilterProvider } from '../../context/filterContext';

import IssueListHeader from '../../components/IssueList/IssueListHeader';
import IssueListMain from '../../components/IssueList/IssueListMain';
import { $IssueList } from './style';

const IssueList = () => {
  const { data: issueData } = useFetch(ISSUES.GET_ALL_ISSUES);
  const { data: userData } = useFetch(USERS.GET_ALL_USERS);
  const { data: labelData } = useFetch(LABELS.GET_ALL_LABELS);
  const { data: milestoneData } = useFetch(MILESTONES.GET_ALL_MILESTONES);

  const allDataLoaded = issueData && userData && labelData && milestoneData;

  if (allDataLoaded) {
    return (
      <FilterProvider data={{ users: userData, labels: labelData, milestones: milestoneData }}>
        <$IssueList>
          <IssueListHeader />
          {allDataLoaded && (
            <IssueListMain
              issues={issueData.issues}
              user={userData}
              label={labelData}
              milestone={milestoneData}
            />
          )}
        </$IssueList>
      </FilterProvider>
    );
  }
  // TODO : loading, error 시 다른 뷰 띄우게끔.
  return <div>로딩중.</div>;
};

export default IssueList;
