import React from 'react';
import PropTypes from 'prop-types';

import {
  useFilterDispatchContext,
  useFilterStateContext,
  FILTER_ACTION_TYPES,
} from '../../../../context/filterContext';

import Icon from '../../Icon';
import { $MenuWrapper, $MenuLeftWrapper, $MenuImg, $MenuText, $LabelColor } from './style';

const DropDownMenu = ({
  menuId,
  menuType,
  menuImg = null,
  menuText,
  backgroundColor,
  dropDownType,
  onSelectItem,
  isSelectItem,
}) => {
  if (dropDownType !== 'sideBar') {
    const filterDispatch = useFilterDispatchContext();
    const { filterState } = useFilterStateContext();
    const checkedOption = filterState[menuType];

    const isChecked = checkedOption === menuId;

    const menuClickHandler = () => {
      filterDispatch({
        type: FILTER_ACTION_TYPES.CHANGE_MENU,
        payload: { filterType: menuType, id: menuId },
      });
    };

    return (
      <$MenuWrapper type="button" onClick={dropDownType !== 'sideBar' ? menuClickHandler : () => {}}>
        <$MenuLeftWrapper>
          {backgroundColor && <$LabelColor backgroundcolor={backgroundColor} />}
          {menuImg !== null && <$MenuImg src={menuImg} />}
          <$MenuText $isChecked={isChecked}>{menuText}</$MenuText>
        </$MenuLeftWrapper>
        <Icon name={isChecked ? 'checkOnCircle' : 'checkOffCircle'} />
      </$MenuWrapper>
    );
  }

  const selectItemHandler = () => {
    onSelectItem((prev) => {
      if (prev.id === menuId) return {};

      return {
        type: menuType,
        id: menuId,
      };
    });
  };

  return (
    <$MenuWrapper type="button" onClick={selectItemHandler}>
      <$MenuLeftWrapper>
        {backgroundColor && <$LabelColor backgroundcolor={backgroundColor} />}
        {menuImg !== null && <$MenuImg src={menuImg} />}
        <$MenuText $isChecked={isSelectItem === menuId}>{menuText}</$MenuText>
      </$MenuLeftWrapper>
      <Icon name={isSelectItem === menuId ? 'checkOnCircle' : 'checkOffCircle'} />
    </$MenuWrapper>
  );
};

DropDownMenu.propTypes = {
  menuId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  menuType: PropTypes.string.isRequired,
  menuImg: PropTypes.string,
  menuText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  dropDownType: PropTypes.string,
  onSelectItem: PropTypes.func,
  isSelectItem: PropTypes.any,
};

export default DropDownMenu;
