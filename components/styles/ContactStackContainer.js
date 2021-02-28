import styled from 'styled-components';
import { device } from './sizes';

const ContactStackContainer = styled.div`
  margin: 0 0 0 auto;
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${device.laptop} {
    width: 45rem;
  }
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.mobileL} {
    min-height: 40rem;
    margin: 7rem 0 0 0;
    width: 100%;
  }
  @media ${device.mobileM} {
    margin: 3rem 0 0 0;
    width: 100%;
  }
`;
export default ContactStackContainer;
