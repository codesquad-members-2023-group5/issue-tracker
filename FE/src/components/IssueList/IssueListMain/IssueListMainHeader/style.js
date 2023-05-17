import styled from 'styled-components';

const $LeftButton = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 32px;
  }

  & > button:not(:last-child) {
    margin-right: 24px;
  }
`;

const $RightButton = styled.div`
  display: flex;
  align-content: center;

  & > button:not(:last-child) {
    margin-right: 36px;
  }
`;

const $IssueListMainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 64px;
  padding: 0px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

export { $IssueListMainHeader, $LeftButton, $RightButton };
