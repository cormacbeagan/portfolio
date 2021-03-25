import styled from 'styled-components';
import { device } from './sizes';

const H1Styles = styled.div`
  h1,
  h2 {
    font-family: var(--oleo);
    font-size: 4rem;
    letter-spacing: 0.5px;
    line-height: 1;
    margin: 2rem 0;
    @media ${device.mobileS} {
      margin: 1rem 0;
    }
  }
`;

export default H1Styles;
