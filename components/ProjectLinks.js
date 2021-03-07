import { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import ExDivStyles from './styles/ExDivStyles';
import LinkStyles from './styles/LinkStyles';

const LinkDiv = styled.div`
  padding: 3rem 0;
`;
export default function ProjectLinks({ links }) {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);
  let timeout;
  function handleDisplay() {
    setDisplay(true);
  }
  function removeDisplay() {
    timeout = setTimeout(() => {
      setDisplay(false);
    });
  }

  function handleFocus() {
    clearTimeout(timeout);
  }
  return (
    <ExDivStyles
      tabIndex="0"
      onClick={handleDisplay}
      onFocus={handleDisplay}
      onBlur={removeDisplay}
      show={display}
    >
      <h2>links</h2>
      <LinkDiv>
        {links.map((item) => (
          <LinkStyles
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            theme={theme}
            onFocus={handleFocus}
          >
            {item.text}
          </LinkStyles>
        ))}
      </LinkDiv>
    </ExDivStyles>
  );
}
