import styled, { keyframes } from 'styled-components';
import { device } from './sizes';

const ExDivStyles = styled.div`
  position: relative;
  margin: 0.75rem 0;
  padding: 0.75rem 1rem;
  border-radius: 20px;
  height: ${(props) => (props.show ? '27rem' : '3.4rem')};
  will-change: height;
  overflow: hidden;
  transition: height 0.8s ease;
  p {
    width: 80%;
    margin: 1rem 0 0 0;
    font-family: var(--kanit);
    line-height: ${(props) => (props.show ? '1.5' : '4')};
    opacity: ${(props) => (props.show ? '0.9' : '0')};
    transition: all 400ms ease;
    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.mobileL} {
      font-size: 1.8rem;
    }
  }
  @media ${device.tablet} {
    text-align: right;
  }
  h2 {
    font-family: var(--oleo);
    font-size: 3rem;
    font-weight: normal;
    text-align: left;
    height: 3rem;
    margin: 0;
    text-decoration: ${(props) => (props.show ? 'underline' : 'none')};
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    @media ${device.tablet} {
      text-align: right;
    }
  }
`;

export default ExDivStyles;
