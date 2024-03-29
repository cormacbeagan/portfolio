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
import { device } from '../components/styles/sizes';
import { useEffect } from 'react';
import { useDimensionSetter } from '../utils/useDimensionSetter';
import Contact from '../components/Contact';
import Stack from '../components/Stack';
import { ThemeBody, ScrollContent } from '../components/styles/PageStyles';

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
    margin: 8rem 0 0 0;
  }
  @media ${device.mobileS} {
    margin: 8rem 2rem 0 2rem;
  }
`;

const ParaStylesMain = styled.div`
  max-width: 700px;
  margin: 0 0 0 auto;
  text-align: justify;
  text-align-last: right;
  p {
    margin: 0;
  }
`;

export default function Home() {
  const { theme, text } = useTheme();
  const { height, width } = useDimensionSetter();

  useEffect(() => {}, [height]);
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
        {theme.isWild && <Wild theme={theme} />}
        <ScrollContent theme={theme} id="root" height={height}>
          <Nav />
          <Theme />
          <main>
            <SectionStyle id="home" height={height}>
              <ArticleDisplay top>
                <HeadingStyles>
                  <H1Styles>
                    <h1>{text.one}</h1>
                    <h2>{text.two}</h2>
                  </H1Styles>
                  <ParaStylesMain>{text.paragraphOne}</ParaStylesMain>
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
            <SectionStyle flip id="projects" height={height}>
              <ProjectSection />
            </SectionStyle>
            <SectionStyle height={height} id="stack">
              <Stack />
            </SectionStyle>
            <SectionStyle height={height} flip id="contact">
              <Contact />
            </SectionStyle>
          </main>
        </ScrollContent>
      </ThemeBody>
    </>
  );
}
