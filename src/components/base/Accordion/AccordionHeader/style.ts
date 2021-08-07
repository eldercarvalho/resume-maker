import styled from 'styled-components';

export const Container = styled.h3`
  button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: none;
    background: none;
    font-size: 1.6rem;
    padding: 1.2rem;
    text-align: left;
    color: ${(props) => props.theme.colors.text};
    font-weight: ${(props) => (props.theme.name === 'dark' ? '200' : '400')};

    svg {
      stroke-width: 1px;
    }
  }
`;
