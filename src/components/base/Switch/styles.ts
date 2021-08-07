import styled from 'styled-components';

interface ContainerProps {
  isChecked: boolean;
}

export const FieldControl = styled.span`
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 0.1rem;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    left: 1px;
    background: #fff;
    transition: left 0.3s;
    z-index: 1;
  }
`;

export const Container = styled.label<ContainerProps>`
  position: relative;
  display: inline-flex;
  width: 5rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background: ${({ theme }) => theme.colors.switchBg};
  cursor: pointer;

  ${FieldControl} {
    span {
      left: ${(props) => (props.isChecked ? '27px' : '1px')};
    }
  }

  svg {
    position: absolute;
    top: 0.3rem;
    color: yellow;
    fill: yellow;

    &.prepend-icon {
      left: 0.5rem;
    }

    &.append-icon {
      right: 0.5rem;
    }
  }
`;
