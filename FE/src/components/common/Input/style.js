import styled, { css } from 'styled-components';

const textInputFont = css`
  color: ${({ isFocused, hasValue, theme }) => {
    return theme.colors.neutral.text[hasValue || isFocused ? 'strong' : 'weak'];
  }};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
  font-weight: 400;
`;

const defaultLabelFont = css`
  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
  line-height: ${({ theme }) => theme.fontSize.S.lineHeight};
  font-weight: 400;
`;

const labelFontTransition = css`
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-size: ${({ hasValue, isFocused, theme }) => {
    return theme.fontSize[hasValue || isFocused ? 'S' : 'M'].fontSize;
  }};
  line-height: ${({ hasValue, isFocused, theme }) => {
    return theme.fontSize[hasValue || isFocused ? 'S' : 'M'].lineHeight;
  }};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  transform: translateY(${({ hasValue, isFocused }) => (hasValue || isFocused ? '0' : '50%')});
  transition: transform 200ms;
`;

const $Label = styled.label`
  width: ${({ styleType }) => (styleType === 'both' ? '72px' : '0')};

  ${({ styleType }) => (styleType === 'onlyLabel' ? labelFontTransition : defaultLabelFont)}
`;

const $TextInput = styled.input`
  width: 100%;

  ${textInputFont}
`;

const onlyLabelText = css`
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 56px;
`;

const onlyPlaceholderText = css`
  flex-direction: row;
  align-items: center;
`;

const bothLabelTextAndPlaceholderText = css`
  flex-direction: row;
  align-items: center;
`;

const $Input = styled.div`
  display: flex;

  height: 40px;

  ${({ styleType }) => {
    if (styleType === 'both') return bothLabelTextAndPlaceholderText;
    if (styleType === 'onlyLabel') return onlyLabelText;
    if (styleType === 'onlyPlaceholder') return onlyPlaceholderText;
    return '';
  }}

  padding: 0 24px;

  border: 1px solid
    ${({ isFocused, theme }) => (isFocused ? theme.colors.neutral.border.active : 'transparent')};
  border-radius: 14px;

  background-color: ${({ isFocused, theme }) => {
    return theme.colors.neutral.background[isFocused ? 'strong' : 'bold'];
  }};
  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};
`;

export { $Input, $Label, $TextInput };
