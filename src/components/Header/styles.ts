import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 360px;
  width: calc(100% - 360px);
  height: 6rem;
  background: ${({ theme }) => theme.colors.headerBg};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  > * + * {
    margin-left: 1.2rem;
  }

  @media print {
    display: none;
  }
`;
