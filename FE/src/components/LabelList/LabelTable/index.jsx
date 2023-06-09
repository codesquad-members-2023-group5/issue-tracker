import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../../hooks/useFetch';
import { LABELS } from '../../../constants/api';
import { generateRandomColor } from '../../../utils/randomColor';

import Button from '../../common/Button';
import Icon from '../../common/Icon';
import TextInput from '../../common/TextInput';
import Label from '../../common/Label';
import {
  $LabelTable,
  $LabelTableTitle,
  $LabelPreview,
  $LabelTableInputLayout,
  $LabelColorInputLayout,
  $TableButtonsLayout,
  $LabelTableLayout,
  $TextColorSelect,
  $ColorRandomButton,
} from './style';

const LabelTable = ({
  labelId = 0,
  labelName = '',
  content = '',
  backgroundColor = '',
  fontColor = 'dark',
  type,
  closeHandler,
  getNewLabelData,
}) => {
  const [labelInfo, setLabelInfo] = useState({
    labelName: labelName || '레이블',
    content,
    backgroundColor: backgroundColor || generateRandomColor(),
    fontColor,
  });

  const { fetchData: createNewLabel } = useFetch(
    LABELS.POST_LABEL,
    'POST',
    {
      labelName: labelInfo.labelName,
      content: labelInfo.content,
      backgroundColor: labelInfo.backgroundColor,
      fontColor: labelInfo.fontColor,
    },
    true,
  );

  const { fetchData: editLabel } = useFetch(
    LABELS.PATCH_LABEL(labelId),
    'PATCH',
    {
      labelName: labelInfo.labelName,
      content: labelInfo.content,
      backgroundColor: labelInfo.backgroundColor,
      fontColor: labelInfo.fontColor,
    },
    true,
  );

  const labelNameChangeHandler = ({ target }) => {
    setLabelInfo((prev) => {
      return { ...prev, labelName: target.value };
    });
  };

  const contentChangeHandler = ({ target }) => {
    setLabelInfo((prev) => {
      return { ...prev, content: target.value };
    });
  };

  const backgroundColorChangeHandler = ({ target }) => {
    setLabelInfo((prev) => {
      return { ...prev, backgroundColor: target.value };
    });
  };

  const textColorChangeHandler = ({ target }) => {
    setLabelInfo((prev) => {
      return { ...prev, fontColor: target.value };
    });
  };

  const generateColor = () => {
    const randomColor = generateRandomColor();

    setLabelInfo((prev) => {
      return { ...prev, backgroundColor: randomColor };
    });
  };

  const completeButtonHandler = async () => {
    if (type === 'add') {
      await createNewLabel();
    } else if (type === 'edit') {
      await editLabel();
    }
    closeHandler();
    getNewLabelData();
  };

  return (
    <$LabelTable type={type}>
      <$LabelTableTitle>{type === 'add' ? '새로운 레이블 추가' : '레이블 편집'}</$LabelTableTitle>

      <$LabelTableLayout>
        <$LabelPreview>
          <Label
            height={24}
            name={labelInfo.labelName}
            fontColor={labelInfo.fontColor}
            backgroundColor={labelInfo.backgroundColor}
          />
        </$LabelPreview>

        <$LabelTableInputLayout>
          <TextInput
            id="labelName"
            value={labelInfo.labelName}
            onChange={labelNameChangeHandler}
            labelText="레이블 이름"
            placeholderText="입력하세요"
          />

          <TextInput
            id="labelContent"
            value={labelInfo.content}
            onChange={contentChangeHandler}
            labelText="설명 (선택)"
            placeholderText="입력하세요"
          />

          <$LabelColorInputLayout>
            <TextInput
              id="labelBackgroundColor"
              value={labelInfo.backgroundColor}
              onChange={backgroundColorChangeHandler}
              labelText="배경 색상"
              placeholderText="입력해주세요"
            />
            <$ColorRandomButton type="button" onClick={generateColor}>
              <Icon name="refreshCcw" width={20} height={20} fill="#4E4B66" />
            </$ColorRandomButton>
            <$TextColorSelect
              name="labelTextColor"
              defaultValue={fontColor}
              onChange={textColorChangeHandler}
            >
              <option value="dark">dark text</option>
              <option value="light">light text</option>
            </$TextColorSelect>
            <Icon name="chevronDown" width={24} height={24} fill="#6E7191" />
          </$LabelColorInputLayout>
        </$LabelTableInputLayout>
      </$LabelTableLayout>

      <$TableButtonsLayout>
        {type === 'edit' && (
          <Button type="outline" size="S" onClick={closeHandler}>
            <Icon name="xSquare" />
            <p>취소</p>
          </Button>
        )}

        {/* type="add"일 때 완료 버튼을 클릭한 경우, LabelListHeader의 [닫기 -> 레이블 추가] 버튼으로 변경  */}
        {/* 즉 LabelListHeader랑 type="add"인 LabelTable이 열린 유무인 상태를 공유해야 할 듯 */}
        <Button
          type="contained"
          size="S"
          disabled={labelInfo.labelName.length === 0}
          onClick={completeButtonHandler}
        >
          <Icon name={type === 'add' ? 'plus' : 'edit'} />
          <p>{type === 'add' ? '완료' : '편집 완료'}</p>
        </Button>
      </$TableButtonsLayout>
    </$LabelTable>
  );
};

LabelTable.propTypes = {
  labelId: PropTypes.number,
  labelName: PropTypes.string,
  content: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf(['add', 'edit']),
  closeHandler: PropTypes.func,
  getNewLabelData: PropTypes.func.isRequired,
};

export default LabelTable;
