import styled from 'styled-components';

const sheetWidth = '21cm';
const sheetHeight = '29.7cm';
const defaultMargin = '10mm';

export const Sheet = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  padding: ${defaultMargin} 0;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: ${sheetWidth};
  min-height: ${sheetHeight};
  color: #44474a;

  @media print {
    width: 100%;
    height: auto;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
`;

export const Header = styled.header`
  background: #fff;
  margin-bottom: ${defaultMargin};
  text-align: center;

  h1 {
    font-size: 2.6rem;
  }

  p {
    font-size: 1.6rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.6mm;
`;

export const Body = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  align-content: stretch;
  padding: 0 5mm 5mm;

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

      & + ul {
        margin-top: 1.2rem;
      }

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

  .details {
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

  @media print {
    /* break-before: page; */
    /* break-inside: avoid-column; */
    /* brea */
  }
`;

export const SummaryContent = styled.div`
  ul {
    padding-left: 2rem;

    li {
      font-size: 1.3rem;
      padding: 0.2rem 0;
    }
  }
`;
