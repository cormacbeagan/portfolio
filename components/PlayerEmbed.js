import React from 'react';
import styled from 'styled-components';
import { device } from './styles/sizes';

const EmbedStyles = styled.div`
  iframe {
    height: 510px;
    width: 350px;
    border: none;
  }
  @media ${device.tablet} {
    width: 350px;
    margin: 0 auto;
  }
  @media ${device.mobileL} {
    width: 315px;
    iframe {
      width: 315px;
    }
  }
  @media ${device.mobileS} {
    width: 300px;
    margin-left: -15px;
    iframe {
      width: 300px;
      overflow: hidden;
    }
  }
`;

export default function PlayerEmbed() {
  return (
    <EmbedStyles>
      <iframe src="https://radio-player-5a684.web.app/" title="Radio Player" />
    </EmbedStyles>
  );
}

// https://blog.bitsrc.io/best-practices-in-using-iframes-with-react-6193feaa1e08
