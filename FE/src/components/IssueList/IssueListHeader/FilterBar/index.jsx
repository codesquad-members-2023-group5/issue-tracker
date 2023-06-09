import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../common/Icon';
import DropDown from '../../../common/DropDown';
import { $FilterBar, $FilterInput, $FilterInputWrapper } from './style';

const FILTER = {
  TYPE: 'issue',
  NAME: '이슈',
  MENUS: [
    { menuId: 'writtenByMe', text: '내가 작성한 이슈' },
    { menuId: 'assignedToMe', text: '나에게 할당된 이슈' },
    { menuId: 'commentedByMe', text: '내가 댓글을 남긴 이슈' },
  ],
};

const FilterBar = (props) => {
  return (
    <$FilterBar>
      <DropDown type={FILTER.TYPE} name={FILTER.NAME} width={128} height={40} gap={8} menus={FILTER.MENUS} />
      <$FilterInputWrapper>
        <Icon name="search" fill="#6E7191" />
        <$FilterInput type="text" placeholder="is:issue is:open" />
      </$FilterInputWrapper>
    </$FilterBar>
  );
};

export default FilterBar;
