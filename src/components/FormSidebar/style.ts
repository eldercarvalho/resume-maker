import styled from 'styled-components';

export const Container = styled.aside`
  position: relative;
  width: 30rem;
  height: 100vh;
  background: ${(props) => props.theme.dark};
`;

export const Logo = styled.h1`
  font-size: 2.6rem;
  color: ${(props) => props.theme.text};
  padding: 1.6rem;
  font-weight: 200;
  text-align: center;
`;
