import styled from 'styled-components';
import { device } from './sizes';

const MobileSelect = styled.ul`
  margin: 0;
  height: 8.4rem;
  width: 100vw;
  position: absolute;
  top: 0;
  margin-left: -2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 2;
  padding: 1rem 2rem 1rem 0.8rem;
  z-index: 1;
  list-style-type: none;
  background: ${(props) => props.theme.background};
  background: rgba(0, 0, 0, 0.1);
  text-align: center;
  @media ${device.mobileL} {
    height: 7rem;
  }
  @media ${device.mobileS} {
    margin-left: -1rem;
    padding: 0.5rem 2rem 0.5rem 0.8rem;
  }

  li {
    font-family: 'Abril Fatface';
    font-size: 2.4rem;
    font-weight: 500;
    margin: auto 0.7rem;
    button {
      text-align: center;
      @media ${device.mobileL} {
        font-size: 2rem;
        line-height: 1.2;
      }
      @media ${device.mobileL} {
        font-size: 1.9rem;
        line-height: 1.2;
      }
      @media ${device.mobileS} {
        font-size: 1.8rem;
        line-height: 1;
      }
    }
  }
`;

export default MobileSelect;
