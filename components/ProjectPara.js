import { useState } from 'react';
import ExDivStyles from './styles/ExDivStyles';

export default function ProjectPara({ description }) {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setTimeout(() => {
      setDisplay(true);
    }, 100);
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
      show={display ? 1 : 0}
      id={description.heading}
    >
      <h2>{description.heading}</h2>
      <p show={display}>{description.paragraph}</p>
    </ExDivStyles>
  );
}
