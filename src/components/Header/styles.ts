import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 300px;
  width: calc(100% - 300px);
  height: 6rem;
  background: ${({ theme }) => theme.colors.headerBg};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;
