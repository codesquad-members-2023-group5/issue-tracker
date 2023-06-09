import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useCheckBoxContext } from '../../../../context/checkBoxContext';

import { getTimeDifference } from '../../../../utils/time';

import Icon from '../../../common/Icon';
import Label from '../../../common/Label';
import {
  $IssueListItem,
  $IssueListItemWrapper,
  $IssueTitleWrapper,
  $IssueTitle,
  $IssueInfo,
  $MileStone,
  $Assignee,
  $CheckBox,
} from './style';

const IssueListItem = ({ issueId, issueTitle, label, writer, milestone, assignee, isOpened, createdAt }) => {
  const { checkList, checkBoxHandler } = useCheckBoxContext();

  const isSelected = checkList.includes(issueId);

  const checkBoxClickHandler = () => {
    checkBoxHandler(issueId);
  };

  const Labels = label.map(({ labelId, fontColor, backgroundColor, labelName }) => {
    return (
      <Label
        key={labelId}
        height={24}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        name={labelName}
      />
    );
  });

  return (
    <$IssueListItem>
      <$IssueListItemWrapper>
        <$IssueTitleWrapper>
          <$CheckBox type="button" onClick={checkBoxClickHandler}>
            <Icon
              name={isSelected ? 'checkBoxActive' : 'checkBoxInitial'}
              fill={isSelected ? '#007AFF' : '#D9DBE9'}
            />
          </$CheckBox>
          <Link to={`${issueId}`}>
            <$IssueTitle>
              <Icon name={isOpened ? 'alertCircle' : 'archive'} fill={isOpened ? '#007AFF' : '#FF3B30'} />
              <span>{issueTitle}</span>
              {Labels}
            </$IssueTitle>
          </Link>
        </$IssueTitleWrapper>

        <$IssueInfo>
          <span>{`#${issueId}`}</span>
          <span>{`이 이슈가 ${getTimeDifference(createdAt)}, ${writer.name}님에 의해 작성되었습니다.`}</span>
          {milestone && (
            <$MileStone>
              {milestone && <Icon name="milestone" fill="#6E7191" />}
              <span>{milestone.milestoneName}</span>
            </$MileStone>
          )}
        </$IssueInfo>
      </$IssueListItemWrapper>
      <$Assignee src={writer.url} />
    </$IssueListItem>
  );
};

IssueListItem.propTypes = {
  issueId: PropTypes.number.isRequired,
  issueTitle: PropTypes.string.isRequired,
  label: PropTypes.arrayOf(PropTypes.object),
  writer: PropTypes.object,
  milestone: PropTypes.object,
  assignee: PropTypes.array,
  isOpened: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default IssueListItem;
