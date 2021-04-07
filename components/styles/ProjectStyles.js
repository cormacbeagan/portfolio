const { default: styled } = require('styled-components');

export const GridStyles = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  p {
    width: 350px;
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

  /* // todo add all screen sizes */
  @media (max-width: 500px) {
    p {
      max-width: 280px;
    }
    img {
      max-width: 280px;
      height: auto;
      margin: 20px 0;
    }
  }
`;
