import Head from 'next/head';
import Link from 'next/link';
import H1Styles from '../components/styles/H1Styles';
import SectionStyle from '../components/styles/SectionStyle';
import ArticleDisplay from '../components/ArticleDisplay';
import SelectStyle from '../components/styles/SelectStyle';
import styled from 'styled-components';
import ProjectSection from '../components/ProjectSection';
import { useTheme } from '../utils/themeState';
import Theme from '../components/Theme';
import Wild from '../components/Wild';
import Nav from '../components/Nav';
import ContStack from '../components/ContStack';
import { device } from '../components/styles/sizes';

const ThemeBody = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const ListStyle = styled.li`
  background: transparent;
  a {
    color: ${(props) => props.theme.color};
  }
`;

const HeadingStyles = styled.div`
  margin: 0;
  @media ${device.mobileL} {
    margin: 15rem 0 0 0;
  }
  @media ${device.mobileM} {
    margin: 12rem 0 0 0;
  }
  @media ${device.mobileS} {
    margin: 4rem 0 0 0;
  }
`;

const ParaStyles = styled.div`
  max-width: 700px;
  margin: 0 0 0 auto;
`;

export default function Home() {
  const { theme, text } = useTheme();
  const paragraph = text.paragraph.map((item, index) => (
    <p key={index}>{item}</p>
  ));
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Personal portfolio website for Web Developer Mac Beagan."
        />
        <title>Mac Beagan | Web Developer</title>
      </Head>
      <ThemeBody theme={theme}>
        <Nav />
        {theme.isWild && <Wild theme={theme} />}
        <Theme />
        <main>
          <SectionStyle id="home">
            <ArticleDisplay>
              <HeadingStyles>
                <H1Styles>{text.one}</H1Styles>
                <H1Styles>{text.two}</H1Styles>
                <ParaStyles>{paragraph}</ParaStyles>
              </HeadingStyles>
            </ArticleDisplay>
            <SelectStyle>
              <ListStyle theme={theme}>
                <Link href="#projects">projects</Link>
              </ListStyle>
              <ListStyle theme={theme}>
                <Link href="#stack">stack</Link>
              </ListStyle>
              <ListStyle theme={theme}>
                <Link href="#contact">contact</Link>
              </ListStyle>
            </SelectStyle>
          </SectionStyle>
          <SectionStyle flip id="projects">
            <ProjectSection />
          </SectionStyle>
          <SectionStyle>
            <ContStack />
          </SectionStyle>
        </main>
      </ThemeBody>
    </>
  );
}
