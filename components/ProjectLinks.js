import { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import ExDivStyles from './styles/ExDivStyles';
import LinkStyles from './styles/LinkStyles';
import ParaStyles from './styles/ParaStyles';

const LinkDiv = styled.div`
  padding: 3rem 0;
`;
export default function ProjectLinks({ links }) {
  const { theme } = useTheme();
  return (
    <ParaStyles>
      <h2>Links</h2>
      <LinkDiv>
        {links.map((item) => (
          <LinkStyles
            key={item.url}
            href={item.url}
            {...(item.isInternal ? 'target="_blank"' : null)}
            rel="noreferrer"
            theme={theme}
          >
            {item.text}
          </LinkStyles>
        ))}
      </LinkDiv>
    </ParaStyles>
  );
}
