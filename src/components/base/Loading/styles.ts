import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  isDark: boolean;
  size: number;
  screenCenter: boolean;
  thickness: number;
}

const LoadingAnimation = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: inline-block;

  ${({ screenCenter }) =>
    screenCenter &&
    css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
    `}

  span {
    display: block;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-top: ${(props) => props.thickness}px solid
      ${({ theme, isDark }) => (isDark ? '#FFF' : theme.primary)};
    border-right: ${(props) => props.thickness}px solid
      ${({ theme, isDark }) => (isDark ? '#FFF' : theme.primary)};
    border-bottom: ${(props) => props.thickness}px solid rgba(0, 0, 0, 0.3);
    border-left: ${(props) => props.thickness}px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    animation: ${LoadingAnimation} 0.7s linear infinite;
  }
`;
