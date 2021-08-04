import styled from 'styled-components';

export const Container = styled.span`
  position: relative;

  :hover {
    span {
      opacity: 1;
      top: calc(100% + 16px);
    }
  }

  span {
    display: inline-block;
    position: absolute;
    top: 100%;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    padding: 1rem;
    border-radius: 3px;
    background: #000;
    line-height: 1;
    opacity: 0;
    transition: 0.3s;
    white-space: nowrap;
    pointer-events: none;

    ::before {
      content: '';
      border-bottom: 8px solid #000;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
