import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text};
  padding: 1rem 1.2rem;

  & + li {
    border-top: thin solid ${(props) => props.theme.colors.border};
  }
`;
