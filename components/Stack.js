import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import ContactStackContainer from './styles/ContactStackContainer';
import { FaNodeJs } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiNextDotJs,
  SiStyledComponents,
} from 'react-icons/si';
import { device } from './styles/sizes';
import { useState } from 'react';

const H4Styles = styled.h4`
  margin: 0 0 2rem 0;
  font-family: var(--oleo);
  font-size: 3rem;
  @media ${device.tablet} {
    font-size: 2.2rem;
  }
  @media ${device.mobileM} {
    font-size: 2.5rem;
  }
  @media ${device.mobileS} {
    font-size: 2.2rem;
  }
`;
const StackDivStyles = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StackHeadingStyles = styled.h5`
  font-size: 2.5rem;
  font-family: var(--oleo);
  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.mobileS} {
    font-size: 1.8rem;
  }
`;
const StackParaStyles = styled.p`
  width: 80%;
  height: 15rem;
  margin: 0 0 0 auto;
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.mobileM} {
    font-size: 1.8rem;
  }
`;

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const LinkCont = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TechLink = styled.a`
  .tech-link {
    height: 50px;
    width: 40px;
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${(props) => props.color};
    }
    @media ${device.mobileS} {
      height: 40px;
      width: 32px;
    }
  }
  .accessibly-hidden {
    border: 0;
    clip: rect(0000);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;
const LineStyle = styled.div`
  margin: 3rem 0 0 0;
  padding: 0.5rem;
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.color};
  text-align: center;
  @media ${device.tablet} {
    display: none;
  }
`;

export default function Contact() {
  const { theme, text } = useTheme();
  const [selected, setSelected] = useState('main');

  return (
    <ContactStackContainer>
      <StackGrid>
        <StackDivStyles>
          <H4Styles>{text.stack.heading}</H4Styles>
          <StackHeadingStyles>
            {text.stack[selected].heading}
          </StackHeadingStyles>
          <StackParaStyles>{text.stack[selected].text}</StackParaStyles>
        </StackDivStyles>
        <LinkCont>
          <TechLink
            color={'gold'}
            onClick={() => {
              setSelected('js');
            }}
          >
            <p className="accessibly-hidden">Javascript details</p>
            <SiJavascript alt="tech logo" className="tech-link" />
          </TechLink>
          <TechLink
            onClick={() => {
              setSelected('html');
            }}
            color={'#e34c26'}
          >
            <p className="accessibly-hidden">HTML details</p>
            <SiHtml5 alt="tech logo" className="tech-link" />
          </TechLink>
          <TechLink
            onClick={() => {
              setSelected('css');
            }}
            color={'#2864f1'}
          >
            <p className="accessibly-hidden">CSS details</p>
            <SiCss3 alt="tech logo" className="tech-link" />
          </TechLink>
          <TechLink
            onClick={() => {
              setSelected('react');
            }}
            color={'#5ad7f1'}
          >
            <p className="accessibly-hidden">React JS details</p>
            <GrReactjs alt="tech logo" className="tech-link" />
          </TechLink>
          <TechLink
            onClick={() => {
              setSelected('node');
            }}
            color={'#4fa94d'}
          >
            <p className="accessibly-hidden">Node JS details</p>
            <FaNodeJs alt="tech logo" className="tech-link" />
          </TechLink>
          <TechLink
            onClick={() => {
              setSelected('next');
            }}
            color={'#0072f7'}
          >
            <p className="accessibly-hidden">Next JS details</p>
            <SiNextDotJs alt="tech logo" className="tech-link" />
          </TechLink>
          <TechLink
            onClick={() => {
              setSelected('firebase');
            }}
            color={'#faa730'}
          >
            <p className="accessibly-hidden">Firebase details</p>
            <SiFirebase alt="tech logo" className="tech-link" />
          </TechLink>
          <TechLink
            onClick={() => {
              setSelected('styled');
            }}
            color={'#d57ec4'}
          >
            <p className="accessibly-hidden">Styled Components details</p>
            <SiStyledComponents alt="tech logo" className="tech-link" />
          </TechLink>
        </LinkCont>
      </StackGrid>
      <LineStyle theme={theme}></LineStyle>
    </ContactStackContainer>
  );
}
