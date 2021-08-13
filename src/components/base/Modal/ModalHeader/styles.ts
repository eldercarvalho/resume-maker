import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 1rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
  }
`;
