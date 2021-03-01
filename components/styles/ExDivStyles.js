import styled from 'styled-components';
import { device } from './sizes';

const ExDivStyles = styled.div`
  position: relative;
  margin: 0.75rem 0;
  padding: 0.75rem 1rem;
  border-radius: 20px;
  height: ${(props) => (props.show ? '27rem' : '3rem')};
  will-change: height;
  overflow: hidden;
  transition: all 0.8s ease;
  p {
    line-height: ${(props) => (props.show ? '1.5' : '4')};
    transition: line-height 800ms ease;
  }
  @media ${device.tablet} {
    text-align: right;
  }
  h2 {
    @media ${device.tablet} {
      text-align: right;
    }
  }
`;

export default ExDivStyles;
