import styled, { keyframes } from 'styled-components';
import { device } from './sizes';

const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 0.9}
`;
const ExDivStyles = styled.div`
  position: relative;
  margin: 0.75rem 0;
  padding: 0.75rem 1rem;
  border-radius: 20px;
  height: ${(props) => (props.show ? '27rem' : '3rem')};
  will-change: height;
  overflow: hidden;
  transition: height 0.8s ease;
  p {
    width: 80%;
    margin: 0rem;
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
    font-family: Kanit;
    font-style: italic;
    font-size: 24px;
    font-weight: normal;
    text-transform: uppercase;
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
