import styled from 'styled-components';

export const Container = styled.div`
  & + div {
    border-top: 1px solid #ccc;
  }
`;
