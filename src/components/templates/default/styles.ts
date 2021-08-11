import styled from 'styled-components';

export const Sheet = styled.div`
  margin: 3rem auto;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 21cm;
  height: 29.7cm;

  @media print {
    width: 100%;
    height: auto;
    box-shadow: none;
    margin: 0;
  }
`;

export const Header = styled.header`
  background: #fff;
  padding: 3rem;

  h1 {
    font-size: 2.6rem;
  }

  p {
    font-size: 1.6rem;
  }

  @media print {
    padding: 7.9mm 13.2mm;
  }
`;
