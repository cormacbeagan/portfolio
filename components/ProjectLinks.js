import { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import ExDivStyles from './styles/ExDivStyles';
import HeadStyle from './styles/HeadStyle';
import LinkStyles from './styles/LinkStyles';

const LinkDiv = styled.div`
  padding: 3rem 0;
`;
export default function ProjectLinks({ links }) {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);
  function handleDisplay() {
    setDisplay(true);
  }
  function removeDisplay() {
    console.log('calling');
    setDisplay(false);
  }
  return (
    <ExDivStyles
      onClick={handleDisplay}
      onFocus={handleDisplay}
      onBlur={removeDisplay}
      show={display}
      tabIndex="0"
    >
      <HeadStyle>links</HeadStyle>
      <LinkDiv>
        {links.map((item) => (
          <LinkStyles
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            theme={theme}
          >
            {item.text}
          </LinkStyles>
        ))}
      </LinkDiv>
    </ExDivStyles>
  );
}
