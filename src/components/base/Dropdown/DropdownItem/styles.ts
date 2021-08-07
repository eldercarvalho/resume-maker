import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  width: 100%;
  background: none;
  border: none;
  padding: 1rem 0;
  color: #333;
  white-space: nowrap;
  font-size: 1.4rem;
  font-weight: 500;
  transition: 0.3s;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    margin-right: 1rem;
  }
`;
