import styled from 'styled-components';

interface ContainerProps {
  isChecked: boolean;
}

export const FieldControl = styled.span`
  span {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    left: 0;
  }
`;

export const Container = styled.label<ContainerProps>`
  position: relative;
  display: inline-flex;
  width: 5rem;
  height: 2.4rem;
  border-radius: 1.2rem;

  ${FieldControl} {
    span {
      left: ${(props) => (props.isChecked ? '8px' : '0')};
    }
  }
`;
