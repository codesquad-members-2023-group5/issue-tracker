import styled, { css } from 'styled-components';

import Button from '../Button';

const left = css`
  border-radius: 11px 0 0 11px;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const right = css`
  border-radius: 0 11px 11px 0;
`;

const $Button = styled(Button)`
  width: 160px;
  height: 40px;
  ${({ position }) => (position === 'left' ? left : right)}
  color: ${({ theme, current }) => theme.colors.neutral.text[current ? 'strong' : 'default']};
  background-color: ${({ current, theme }) => {
    return theme.colors.neutral.background[current ? 'bold' : 'default'];
  }};
`;

const $TabButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 321px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 11px;
`;

export { $TabButton, $Button };
