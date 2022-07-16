import styled from 'styled-components';

export namespace S {
  export const CheckboxLabel = styled.label`
    display: flex;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    margin-top: 1.6rem;

    input {
      margin-right: 1rem;
      transform: scale(1.2);
      cursor: pointer;
    }
  `;
}
