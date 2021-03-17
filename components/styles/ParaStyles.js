import styled from 'styled-components';
import { device } from './sizes';

const ParaStyles = styled.article`
  height: auto;
  position: relative;
  margin: 0.75rem 0;
  padding: 0.75rem 1rem;
  p {
    width: 80%;
    margin: 1.5rem 0 0 0;
    font-family: var(--kanit);
    transition: all 400ms ease;
    line-height: 1.2;
    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.mobileL} {
      font-size: 1.8rem;
    }
    @media ${device.mobileS} {
      font-size: 1.6rem;
      margin: 1rem 0 0 0;
    }
  }
  h2 {
    font-family: var(--oleo);
    font-size: 3rem;
    font-weight: normal;
    text-align: left;
    height: 3rem;
    margin: 0;
    @media ${device.tablet} {
      text-align: right;
    }
  }
  @media ${device.tablet} {
    text-align: right;
  }
  @media ${device.mobileM} {
    margin: 0;
  }
`;

export default ParaStyles;
