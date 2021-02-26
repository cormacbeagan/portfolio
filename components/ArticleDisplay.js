import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import { device } from './styles/sizes';

const BorderStyle = styled.div`
  width: 3px;
  height: 100%;
  margin-bottom: 80px;
  position: absolute;
  right: ${(props) => (props.flip ? '' : '0')};
  background: ${(props) => props.theme.lineGrad};
  @media ${device.mobileL} {
    display: none;
  }
`;

const ArticleStyles = styled.article`
  height: 100%;
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
  @media ${device.mobileL} {
    margin: 0;
  }
`;

const ArticleInnerStyle = styled.div`
  padding: 2rem 6rem;
  @media ${device.tablet} {
    padding: 2rem 2rem;
  }
  @media ${device.mobileL} {
    padding: 0 2rem;
    height: 100vh;
  }
  @media ${device.mobileS} {
    padding: 0 1rem;
    height: 100vh;
  }
`;

export default function ArticleDisplay({ children, flip }) {
  const { theme } = useTheme();
  return (
    <ArticleStyles theme={theme} flip={flip}>
      <ArticleInnerStyle>{children}</ArticleInnerStyle>
      <BorderStyle theme={theme} flip={flip} />
    </ArticleStyles>
  );
}
