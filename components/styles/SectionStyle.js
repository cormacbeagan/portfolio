import styled from 'styled-components';
import { device } from './sizes';

const SectionStyle = styled.section`
  height: ${(props) => props.height}px;
  display: grid;
  grid-template-columns: ${(props) => (props.flip ? '2fr 5fr' : '5fr 2fr')};
  overflow: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    margin: 0rem;
  }
`;

export default SectionStyle;
