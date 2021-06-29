import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import { device } from './styles/sizes';
import Wild from './Wild';
import { ThemeBody, ScrollContent } from './styles/PageStyles';
import Theme from './Theme';
import { useDimensionSetter } from '../utils/useDimensionSetter';

const NavList = styled.ul`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  padding: 1rem 0 1.2rem 0;
  top: 0;
  right: 12px;
  position: fixed;
  list-style-type: none;
  font-family: var(--abril) !important;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${(props) => props.theme.background};
  opacity: ${(props) => (props.displayNav ? '1' : '0')};
  transition: opacity 800ms ease;
  z-index: 10;
  @media ${device.tablet} {
    font-size: 1.8rem;
  }
  li {
    margin: 0 1rem;
    a {
      color: ${(props) => props.theme.color};
      font-family: var(--abril) !important;
    }
    @media ${device.tablet} {
      margin: 0 0.5rem;
    }
  }
`;

const MDXStyles = styled.section`
  margin: 50px auto;
  padding: 30px 20px;
  max-width: 800px;
  text-align: justify;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--abril);
    font-weight: normal;
  }
  h1 {
    font-size: 48px;
  }

  h3 {
    margin-top: 30px;

    font-size: 30px;
  }
  a {
    color: ${(props) => props.theme.color};
    text-decoration: underline;
    &:hover,
    &:focus {
      color: red;
    }
  }
`;

export default function ProjectLayout({ children, meta }) {
  const title = meta.title;
  const { theme } = useTheme();
  const { height } = useDimensionSetter();

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`Project details for Mac Beagan's ${title} project`}
        />
        <meta name="og:title" content={title} />
        <title>{title}</title>
      </Head>
      <nav>
        <NavList theme={theme} displayNav>
          <li theme={theme}>
            <Link href="/#projects">Home</Link>
          </li>
        </NavList>
      </nav>
      <Theme />
      <main>
        <ThemeBody theme={theme}>
          {theme.isWild && <Wild />}
          <ScrollContent height={height} theme={theme}>
            <MDXStyles theme={theme}>{children}</MDXStyles>
          </ScrollContent>
        </ThemeBody>
      </main>
    </div>
  );
}
