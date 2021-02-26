import styled from 'styled-components';
import { device } from './sizes';

const SelectStyle = styled.ul`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${(props) => (props.flip ? 'right' : 'left')};
  margin-left: ${(props) => (props.flip ? 'auto' : '5rem')};
  margin-right: ${(props) => (props.flip ? '5rem' : 'auto')};
  line-height: 2;
  padding: 0;
  z-index: 1;
  a {
    font-family: 'Abril Fatface';
    font-size: 3rem;
    font-weight: 500;
  }
  @media ${device.mobileL} {
    display: none;
  }
`;

export default SelectStyle;
