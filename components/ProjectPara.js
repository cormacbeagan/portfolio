import { useState } from 'react';
import styled from 'styled-components';
import ExDivStyles from './styles/ExDivStyles';
import HeadStyle from './styles/HeadStyle';
import { device } from './styles/sizes';

const PStyles = styled.p`
  width: 80%;
  margin: 0rem;
  font-family: var(--kanit);
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.mobileL} {
    font-size: 1.8rem;
  }
`;

export default function ProjectPara({ description }) {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay(true);
  }
  function removeDisplay() {
    setDisplay(false);
  }
  return (
    <ExDivStyles
      tabIndex="0"
      onClick={handleDisplay}
      onFocus={handleDisplay}
      onBlur={removeDisplay}
      show={display}
      id={description.heading}
    >
      <HeadStyle>{description.heading}</HeadStyle>
      <PStyles show={display}>{description.paragraph}</PStyles>
    </ExDivStyles>
  );
}
