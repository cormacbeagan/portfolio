import styled from 'styled-components';
import { device } from './sizes';

const H1Styles = styled.div`
  h1,
  h2 {
    font-family: var(--oleo);
    font-size: 4rem;
    letter-spacing: 1px;
    line-height: 1;
    margin: 2rem 0;
    @media ${device.mobileS} {
      margin: 1rem 0;
    }
  }
  h2 {
    letter-spacing: 0px;
  }
`;

export default H1Styles;
