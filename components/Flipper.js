import React from 'react';
import styled from 'styled-components';

const FlipperStyles = styled.div`
  background-color: transparent;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  p {
    max-width: 350px;
    margin: 0 50px 0 0;
  }
  .outer {
    perspective: 1000px;
    width: 300px;
    height: 300px;
  }

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  &:hover .inner {
    transform: rotateY(180deg);
  }
  .back,
  .front {
    width: 300px;
    height: 300px;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .front {
    background-color: #bbb;
    color: black;
  }
  .back {
    transform: rotateY(180deg);
  }
`;

export default function Flipper({ children }) {
  return (
    <FlipperStyles>
      {children}
      <div className="outer">
        <div className="inner">
          <div className="front">
            <img src="/arctic-front.png" alt="Screenshot album cover" />
          </div>
          <div className="back">
            <img src="/arctic-back.png" alt="Screenshot reverse side" />
          </div>
        </div>
      </div>
    </FlipperStyles>
  );
}
