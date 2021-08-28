import styled from 'styled-components';

interface ContainerProps {
  align: 'left' | 'center' | 'right';
  isEmpty?: boolean;
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
