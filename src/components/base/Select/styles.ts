import styled, { css } from 'styled-components';

import { Container as LoadingContainer } from '../Loading/styles';

type ContainerProps = {
  isDisabled: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: relative;

  ${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.5;
    `}
`;

export const SelectedOption = styled.div`
  position: relative;

  > svg,
  ${LoadingContainer} {
    position: absolute;
    top: 0.9rem;
    right: 1.2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }

  input {
    cursor: pointer;
  }
`;

interface OptionsProps {
  isOpened: boolean;
}

export const Options = styled.div<OptionsProps>`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  padding-top: 0;
  transition: 0.3s;
  z-index: 1;

  ${({ isOpened }) =>
    isOpened &&
    css`
      opacity: 1;
      padding-top: 1rem;
      pointer-events: auto;
    `}

  div {
    background: #fff;
    border: 1px solid #000;
    border-radius: 3px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    /* padding: 0 1rem; */

    button {
      display: block;
      width: 100%;
      border: none;
      background: transparent;
      padding: 1.2rem 1rem;
      transition: all 0.3s;
      font-weight: 500;
      text-align: left;

      :hover {
        background: ${({ theme }) => theme.colors.primary};
        color: #fff;
      }
    }
  }
`;
