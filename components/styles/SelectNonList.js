import styled from 'styled-components';
import { device } from './sizes';

const SelectNonList = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${(props) => (props.flip ? 'left' : 'right')};
  margin-left: ${(props) => (props.flip ? 'auto' : '5rem')};
  margin-right: ${(props) => (props.flip ? '5rem' : 'auto')};
  line-height: 2;
  padding: 0;
  z-index: 1;
  a,
  h2,
  button {
    font-family: 'Abril Fatface';
    font-size: 3rem;
    font-weight: 500;
    cursor: ${(props) => (props.live ? 'pointer' : 'arrow')};
    text-align: ${(props) => (props.flip ? 'right' : 'left')};
    color: ${(props) => props.theme.color};
    &:hover,
    &:focus {
      text-decoration: ${(props) => (props.live ? 'underline' : 'none')};
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export default SelectNonList;
