import styled from "styled-components";
export const Container = styled.div`
  .blink {
    animation: blinker 0.1s step-start infinite;
    color: white;
  }
  .spinner {
    position: absolute;
    margin: auto;
    top: 0px;
    left: 150px;
    cursor: pointer;
    z-index: 9999;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;
