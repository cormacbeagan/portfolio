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
    line-height: 1.5;

    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.mobileL} {
      font-size: 1.8rem;
      line-height: 1.2;
    }
    @media ${device.mobileS} {
      font-size: 1.6rem;
      margin: 0.5rem 0 0 0;
      line-height: 1.2;
    }
  }
  h2 {
    font-family: var(--oleo);
    font-size: 3rem;
    font-weight: bold;
    text-align: left;
    height: 3rem;
    margin: 0;
    @media ${device.tablet} {
      text-align: right;
    }
    @media ${device.mobileM} {
      font-size: 2.5rem;
      height: 2.5rem;
    }
    @media ${device.mobileS} {
      font-size: 2rem;
      height: 2.5rem;
    }
  }
  @media ${device.tablet} {
    text-align: right;
  }
  @media ${device.mobileL} {
    margin: 0;
    padding: 0;
  }
`;

export default ParaStyles;
