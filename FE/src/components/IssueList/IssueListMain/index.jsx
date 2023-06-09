import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  useFilterStateContext,
  useFilterDispatchContext,
  FILTER_ACTION_TYPES,
} from '../../../context/filterContext';
import { useCheckBoxContext } from '../../../context/checkBoxContext';

import { FILTER_TYPE } from '../../../constants/dropdownMenu';

import { isEqualObj } from '../../../utils/validator';

import Icon from '../../common/Icon';
import IssueListItem from './IssueListItem';
import IssueListMainHeader from './IssueListMainHeader';
import { $IssueList, $NoResultMessage, $IssueListMain, $InitFilterButton } from './style';

const isFilterMatched = ({ currentFilterOption, issueValue }) => {
  if (issueValue instanceof Array) {
    if (currentFilterOption === 'none' && issueValue.length === 0) return true;
    return currentFilterOption === null || issueValue.includes(currentFilterOption);
  }

  if (currentFilterOption === 'none' && issueValue === null) return true;
  return currentFilterOption === null || currentFilterOption === issueValue;
};

const myId = 6;

const filterIssues = ({ type, issues, filterOptions }) => {
  return issues.filter(({ isopened, milestone, writer, label, assignee, comment }) => {
    const { userId: writerId } = writer;
    const labelIdArr = label.map(({ labelId }) => labelId);
    const assigneeIdArr = assignee.map(({ userId }) => userId);

    const { issue } = filterOptions;

    const isMilestoneMatched = isFilterMatched({
      currentFilterOption: filterOptions[FILTER_TYPE.MILESTONE],
      issueValue: milestone?.milestoneId ?? null,
    });
    const isLabelMatched = isFilterMatched({
      currentFilterOption: filterOptions[FILTER_TYPE.LABEL],
      issueValue: labelIdArr,
    });
    const isAssigneeMatched = isFilterMatched({
      currentFilterOption: issue === 'assignedToMe' ? myId : filterOptions[FILTER_TYPE.ASSIGNEE],
      issueValue: assigneeIdArr,
    });
    const isWriterMatched = isFilterMatched({
      currentFilterOption: issue === 'writtenByMe' ? myId : filterOptions[FILTER_TYPE.WRITER],
      issueValue: writerId,
    });

    const isCommentMatched =
      issue === 'commentedByMe' ? comment.some(({ commentUser }) => commentUser.userId === myId) : true;

    const isOpenButtonActive = type === 'open';

    return (
      isopened === isOpenButtonActive &&
      isMilestoneMatched &&
      isLabelMatched &&
      isAssigneeMatched &&
      isWriterMatched &&
      isCommentMatched
    );
  });
};

const IssueListMain = ({ issues, user, label, milestone, getNewAllIssueData }) => {
  const { filterState, isFilterChanged } = useFilterStateContext();
  const filterDispatch = useFilterDispatchContext();
  const { resetCheckList } = useCheckBoxContext();

  const [isOpened, setIsOpened] = useState(true);
  const prevFilterState = useRef(filterState);

  const filteredOpenIssues = filterIssues({ type: 'open', issues, filterOptions: filterState });
  const filteredCloseIssues = filterIssues({ type: 'close', issues, filterOptions: filterState });
  const filteredIssues = isOpened ? filteredOpenIssues : filteredCloseIssues;

  useEffect(() => {
    if (!isEqualObj(prevFilterState, filterState)) resetCheckList();
  }, [isOpened, isFilterChanged, filterState]);

  const resetFilterOptions = () => {
    filterDispatch({ type: FILTER_ACTION_TYPES.RESET_FILTER });
  };

  const noResultMessage = <$NoResultMessage>검색과 일치하는 결과가 없습니다.</$NoResultMessage>;

  return (
    <React.Fragment>
      {isFilterChanged && (
        <$InitFilterButton type="ghost" size="S" onClick={resetFilterOptions}>
          <Icon name="xSquare" />
          현재의 검색 필터 및 정렬 지우기
        </$InitFilterButton>
      )}
      <$IssueListMain>
        <IssueListMainHeader
          openCount={filteredOpenIssues.length}
          closeCount={filteredCloseIssues.length}
          user={user}
          label={label}
          milestone={milestone}
          openBtnHandler={() => setIsOpened(true)}
          closeBtnHandler={() => setIsOpened(false)}
          isOpened={isOpened}
          filteredIssuesIds={filteredIssues.map((issue) => issue.issueId)}
          getNewAllIssueData={getNewAllIssueData}
        />
        <$IssueList>
          {filteredIssues.length === 0 && noResultMessage}
          {filteredIssues.map((issue) => (
            <IssueListItem isOpened={isOpened} key={issue.issueId} {...issue} />
          ))}
        </$IssueList>
      </$IssueListMain>
    </React.Fragment>
  );
};

IssueListMain.propTypes = {
  issues: PropTypes.array.isRequired,
  user: PropTypes.array.isRequired,
  label: PropTypes.array.isRequired,
  milestone: PropTypes.array.isRequired,
  getNewAllIssueData: PropTypes.func.isRequired,
};

export default IssueListMain;
