import React from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPE } from '../../../constants/dropdownMenu';
import SideBarMenu from './SideBarMenu';
import { $SideBar } from './style';

const SideBar = ({
  issueId,
  assignees,
  labels,
  milestones,
  selectedItems = {},
  changeAssigneeHandler,
  changeLabelHandler,
  changeMilestoneHandler,
}) => {
  const dropdownData = [
    // TODO: 선택된 데이터도 가지고 있어야함.
    {
      menuId: 1,
      menuType: 'ASSIGNEE',
      menus: assignees, // 여기까지는 드롭다운때문에 넣은 데이터
    },
    {
      menuId: 2,
      menuType: 'LABEL',
      menus: labels,
    },
    {
      menuId: 3,
      menuType: 'MILESTONE',
      menus: milestones,
    },
  ];

  const changeHandlers = {
    [FILTER_TYPE.ASSIGNEE]: changeAssigneeHandler,
    [FILTER_TYPE.LABEL]: changeLabelHandler,
    [FILTER_TYPE.MILESTONE]: changeMilestoneHandler,
  };

  return (
    <$SideBar>
      {dropdownData.map(({ menuId, menuType, menus }) => (
        <SideBarMenu
          key={menuId}
          type={menuType}
          menus={menus}
          selectedItemId={
            Object.keys(selectedItems).length > 0 ? selectedItems[FILTER_TYPE[menuType]] : undefined
          }
          changeHandler={changeHandlers[FILTER_TYPE[menuType]]}
        />
      ))}
    </$SideBar>
  );
};

SideBar.propTypes = {
  issueId: PropTypes.number,
  assignees: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  milestones: PropTypes.array.isRequired,
  selectedItems: PropTypes.object,
  changeAssigneeHandler: PropTypes.func,
  changeLabelHandler: PropTypes.func,
  changeMilestoneHandler: PropTypes.func,
};

export default SideBar;
