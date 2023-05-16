import styled from 'styled-components';

const $DropDownWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 240px;
`;

const $DropDownHeader = styled.header`
  width: 100%;
  height: 36px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
`;

const $DropDownMenus = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { $DropDownWrapper, $DropDownHeader, $DropDownMenus };
