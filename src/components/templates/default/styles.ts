import styled from 'styled-components';

export const Sheet = styled.div`
  margin: 3rem auto;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 21cm;
  height: 29.7cm;
  color: #44474a;

  @media print {
    width: 100%;
    height: auto;
    box-shadow: none;
    margin: 0;
  }
`;

export const Header = styled.header`
  background: #fff;
  padding: 4.2rem 0 5rem;
  text-align: center;

  h1 {
    font-size: 2.6rem;
  }

  p {
    font-size: 1.6rem;
  }

  @media print {
    padding: 10mm 13.2mm;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.6mm;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  padding: 0 5mm;

  a {
    text-decoration: none;
    color: #44474a;
  }

  a.link {
    color: #56a8ff;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.5;
  }

  > aside {
    border-right: 0.2rem solid #ffa500;
    text-align: right;
    padding-right: 6mm;

    ul {
      list-style: none;

      li {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 1.4rem;
        padding: 0.3rem 0;

        svg {
          flex-shrink: 0;
          margin-left: 1.6rem;
          stroke: rgba(0, 0, 0, 0.4);
        }
      }
    }

    @media print {
      border-right-width: 0.3mm;
    }
  }

  > div {
    padding-left: 6mm;
  }
`;
export const Section = styled.section`
  & + section {
    margin-top: 10mm;
  }
`;

export const Experience = styled.div`
  & + div {
    margin-top: 4mm;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1mm;
  }

  div {
    font-size: 1.4rem;
    margin-bottom: 1mm;
    display: flex;

    span {
      display: flex;

      & + span {
        &::before {
          content: '•';
          margin-left: 2mm;
          margin-right: 2mm;
        }
      }
    }
  }
`;
