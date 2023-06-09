import styled from 'styled-components';

const $CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  background-color: ${({ theme }) => theme.colors.neutral.background.default};
`;

const $UserInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  gap: 8px;
`;

const $HeaderButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const $DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.danger.text};
  gap: 4px;
`;

const $HeaderButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  gap: 4px;
`;

const $CommentText = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.neutral.background.strong};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  line-height: 28px;
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const $UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const $UserName = styled.div`
  padding-top: 4px;
  color: ${({ theme }) => theme.colors.neutral.text.strong};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
`;

const $CommentTime = styled.div`
  padding-top: 4px;
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
`;

const $Buttons = styled.div`
  display: flex;
  margin-bottom: 24px;
  gap: 8px;
`;

const $Comment = styled.div`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  width: 958px;
  min-height: 125px;
  max-height: fit-content;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
`;

export {
  $Comment,
  $CommentHeader,
  $UserInfo,
  $HeaderButtons,
  $HeaderButton,
  $CommentText,
  $UserImg,
  $UserName,
  $CommentTime,
  $Buttons,
  $DeleteButton,
};
