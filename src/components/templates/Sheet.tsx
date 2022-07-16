import styled from 'styled-components';

const sheetWidth = '21cm';
const sheetHeight = '29.7cm';
const defaultMargin = '10mm';

export const Sheet = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  width: ${sheetWidth};
  min-height: ${sheetHeight};
  margin: 0 auto 3rem;
  padding: ${defaultMargin} 0;

  @media print {
    width: 100%;
    height: auto;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
`;
