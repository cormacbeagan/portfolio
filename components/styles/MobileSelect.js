import styled from 'styled-components';
import { device } from './sizes';

const MobileSelect = styled.ul`
  margin: 0;
  height: auto;
  width: 100vw;
  margin-left: -2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 2;
  padding: 1rem 2rem;
  z-index: 1;
  list-style-type: none;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;

  @media ${device.mobileS} {
    margin-left: -1rem;
  }

  li {
    font-family: 'Abril Fatface';
    font-size: 2rem;
    font-weight: 500;
    margin: auto 0.7rem;
    @media ${device.mobileL} {
      font-size: 2rem;
      line-height: 1.2;
    }
    @media ${device.mobileS} {
      font-size: 1.8rem;
      line-height: 1;
    }
  }
`;

export default MobileSelect;
