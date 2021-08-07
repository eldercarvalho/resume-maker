import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 300px;
  width: calc(100% - 300px);
  height: 6rem;
  background: ${({ theme }) => theme.colors.backgroundVar1};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
