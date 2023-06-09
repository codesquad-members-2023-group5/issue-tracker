import React from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPE } from '../../../../../constants/dropdownMenu';
import { $Assignee, $Milestone, $LabelWrapper, $ProfileImg, $AssigneeName, $ProgressBar } from './style';
import Label from '../../../Label';

const SelectedItem = ({ className = '', type, info }) => {
  const calculatePercentage = (() => {
    if (!info.openCount) return 0;
    const totalIssues = info.openCount + info.closeCount;

    if (totalIssues === 0) return 0;
    return Math.ceil((info.closeCount / totalIssues) * 100);
  })();

  if (FILTER_TYPE[type] === 'label') {
    return (
      <$LabelWrapper className={className}>
        <Label
          height={24}
          name={info.labelName}
          fontColor={info.fontColor}
          backgroundColor={info.backgroundColor}
        />
      </$LabelWrapper>
    );
  }
  if (FILTER_TYPE[type] === 'assignee') {
    return (
      <$Assignee className={className}>
        <$ProfileImg src={info.url} />
        <$AssigneeName>{info.name}</$AssigneeName>
      </$Assignee>
    );
  }
  if (FILTER_TYPE[type] === 'milestone') {
    return (
      <$Milestone className={className}>
        <$ProgressBar percent={calculatePercentage} />
        {info.milestoneName}
      </$Milestone>
    );
  }
  return <div>일치하는 정보가 없습니다.</div>;
};

SelectedItem.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
};

export default SelectedItem;
