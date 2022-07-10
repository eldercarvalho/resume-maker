import styled from 'styled-components';

const defaultMargin = '10mm';
const textColor = '#44474a';
const linkColor = '#56a8ff';
const detailColor = '#ffa500';
const h1FontSize = '2.6rem';
const h2FontSize = '1.8rem';
const bodyTextFontSize = '1.4rem';

export namespace S {
  export const Header = styled.header`
    background: #fff;
    margin-bottom: ${defaultMargin};
    text-align: center;

    h1 {
      font-size: ${h1FontSize};
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
      color: ${textColor};
    }

    a.link {
      color: ${linkColor};
    }

    p {
      font-size: ${bodyTextFontSize};
      line-height: 1.5;
    }

    > aside {
      border-right: 0.2rem solid ${detailColor};
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
      margin-top: ${defaultMargin};
    }
  `;

  export const Experience = styled.div`
    & + div {
      margin-top: 4mm;
    }

    h2 {
      font-size: ${h2FontSize};
      font-weight: 600;
      margin-bottom: 1mm;
    }

    .details {
      font-size: ${bodyTextFontSize};
      margin-bottom: 1mm;
      display: flex;

      a {
        color: ${linkColor};
      }

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
}
