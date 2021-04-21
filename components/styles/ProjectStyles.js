const { default: styled } = require('styled-components');
import { device } from './sizes';
export const GridStyles = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  p {
    width: ${(props) => (props.single ? '100%' : '350px')};
  }
  img {
    margin: ${(props) => (props.flip ? '0 0 40px 0' : '0 20px 0 0')};
    opacity: ${(props) => (props.fade ? '0.7' : '1')};
    transition: all 600ms ease;
    &:hover {
      transform: ${(props) => (props.grow ? 'scale(1.8)' : '')};
      opacity: 1;
    }
  }
  .double-img {
    width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .floyd-img {
    @media ${device.tablet} {
      max-width: 300px;
      margin: 0 auto;
    }
  }

  /* // todo add all screen sizes */
  @media ${device.tablet} {
    flex-direction: column;
    p {
      width: 100%;
    }
    img {
      max-width: 100%;
      height: auto;
      margin: 20px 0;
      opacity: 1;
      &:hover {
        transform: none;
      }
    }
    .double-img {
      width: 100%;
    }
  }
  @media ${device.mobileS} {
    .floyd-img {
      width: 100%;
    }
  }
`;

export const RightHeading = styled.h3`
  width: 100%;
  max-width: 350px;
  text-align: right;
  margin: 0 !important;
  @media ${device.tablet} {
    text-align: left;
  }
`;
