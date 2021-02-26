import styled from 'styled-components';
import { device } from './sizes';

const SectionStyle = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: ${(props) => (props.flip ? '2fr 5fr' : '5fr 2fr')};
  scroll-snap-align: start;
  @media ${device.mobileL} {
    display: flex;
    margin: 0;
  }
`;

export default SectionStyle;
