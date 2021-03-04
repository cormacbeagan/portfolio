import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import { useDimensionSetter } from '../utils/useDimensionSetter';
import { device } from './styles/sizes';

const BorderStyle = styled.div`
  width: 3px;
  height: 100%;
  margin-bottom: ${(props) => (props.top ? '0' : '80px')};
  position: absolute;
  right: ${(props) => (props.flip ? '' : '0')};
  background: ${(props) => props.theme.lineGrad};
  @media ${device.tablet} {
    display: none;
  }
`;

const ArticleStyles = styled.article`
  height: ${(props) => props.height}px;
  overflow: hidden;
  text-align: ${(props) => (props.flip ? 'left' : 'right')};
  margin: ${(props) => (props.flip ? '0 0 0 3px' : '0 3px 0 0')};
  position: relative;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-top: 1rem;
  }
  @media ${device.tablet} {
    margin: 0;
    text-align: ${(props) => (props.unflip ? 'right' : '')};
  }
`;

const ArticleInnerStyle = styled.div`
  padding: 2rem 6rem;
  @media ${device.tablet} {
    padding: 20rem 2rem;
    height: 100vh;
  }
  @media ${device.mobileL} {
    padding: 0 2rem;
  }
  @media ${device.mobileS} {
    padding: 0 1rem;
  }
`;

export default function ArticleDisplay({ children, flip, unflip, top }) {
  const { theme } = useTheme();
  const { height, width } = useDimensionSetter();
  return (
    <ArticleStyles theme={theme} flip={flip} unflip={unflip} height={height}>
      <ArticleInnerStyle>{children}</ArticleInnerStyle>
      <BorderStyle theme={theme} flip={flip} top={top} />
    </ArticleStyles>
  );
}
