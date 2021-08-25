import styled, { css } from 'styled-components';

const flexXAlignValues = {
  center: 'Center',
  left: 'flex-start',
  right: 'flex-end',
};

interface FlexProps {
  xAlign?: 'center' | 'left' | 'right';
}

export const Flex = styled.div<FlexProps>`
  display: flex;

  ${({ xAlign }) =>
    xAlign &&
    css`
      justify-content: ${flexXAlignValues[xAlign]};
    `}
`;
