import { useState } from 'react';
import styled from 'styled-components';
import ExDivStyles from './styles/ExDivStyles';
import HeadStyle from './styles/HeadStyle';

const PStyles = styled.p`
  margin: 0rem;
  font-family: var(--kanit);
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
      onMouseEnter={handleDisplay}
      onMouseOver={handleDisplay}
      onMouseOut={removeDisplay}
      onMouseLeave={removeDisplay}
      onFocus={handleDisplay}
      onBlur={removeDisplay}
      show={display}
    >
      <HeadStyle>{description.heading}</HeadStyle>
      <PStyles show={display}>{description.paragraph}</PStyles>
    </ExDivStyles>
  );
}
