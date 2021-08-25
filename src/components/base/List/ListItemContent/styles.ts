import styled, { css } from 'styled-components';

interface ContainerProps {
  align: 'left' | 'center' | 'right';
}

const flexAlignValues = {
  center: 'Center',
  left: 'flex-start',
  right: 'flex-end',
};

export const Container = styled.span<ContainerProps>`
  flex: 1;
  display: flex;
  justify-content: ${({ align }) => flexAlignValues[align]};
`;
