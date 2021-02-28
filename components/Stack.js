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
import { useEffect, useState } from 'react';

const H2Styles = styled.h2`
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
    margin-bottom: 1rem;
  }
`;
const StackDivStyles = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StackHeadingStyles = styled.h3`
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
  height: auto;
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

const LinkCont = styled.ul`
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

// todo render the buttons from an array

export default function Contact() {
  const { theme, text } = useTheme();
  const [selected, setSelected] = useState('main');

  return (
    <ContactStackContainer>
      <StackGrid tabIndex="0">
        <StackDivStyles>
          <H2Styles>{text.stack.heading}</H2Styles>
          <StackHeadingStyles>
            {text.stack[selected].heading}
          </StackHeadingStyles>
          <StackParaStyles>{text.stack[selected].text}</StackParaStyles>
        </StackDivStyles>
        <LinkCont>
          <li>
            <TechLink
              color={'gold'}
              onClick={() => {
                setSelected('js');
              }}
            >
              <SiJavascript
                tabIndex="0"
                alt="tech logo"
                className="tech-link"
                aria-label="Javascript details"
                onKeyDown={(e) => {
                  const key = e.key || e.keyCode;
                  if (key === 'Enter' || key === 13) {
                    setSelected('js');
                  }
                }}
              />
            </TechLink>
          </li>
          <li>
            <TechLink
              onClick={() => {
                setSelected('html');
              }}
              color={'#e34c26'}
            >
              <SiHtml5
                tabIndex="0"
                alt="tech logo"
                className="tech-link"
                aria-label="HTML details"
                onKeyDown={(e) => {
                  const key = e.key || e.keyCode;
                  if (key === 'Enter' || key === 13) {
                    setSelected('html');
                  }
                }}
              />
            </TechLink>
          </li>
          <li>
            <TechLink
              onClick={() => {
                setSelected('css');
              }}
              color={'#2864f1'}
            >
              <SiCss3
                tabIndex="0"
                alt="tech logo"
                className="tech-link"
                aria-label="CSS details"
                onKeyDown={(e) => {
                  const key = e.key || e.keyCode;
                  if (key === 'Enter' || key === 13) {
                    setSelected('css');
                  }
                }}
              />
            </TechLink>
          </li>
          <li>
            <TechLink
              onClick={() => {
                setSelected('react');
              }}
              color={'#5ad7f1'}
            >
              <GrReactjs
                tabIndex="0"
                alt="tech logo"
                className="tech-link"
                aria-label="React JS details"
                onKeyDown={(e) => {
                  const key = e.key || e.keyCode;
                  if (key === 'Enter' || key === 13) {
                    setSelected('react');
                  }
                }}
              />
            </TechLink>
          </li>
          <li>
            <TechLink
              onClick={() => {
                setSelected('node');
              }}
              color={'#4fa94d'}
            >
              <FaNodeJs
                tabIndex="0"
                alt="tech logo"
                className="tech-link"
                aria-label="Node JS details"
                onKeyDown={(e) => {
                  const key = e.key || e.keyCode;
                  if (key === 'Enter' || key === 13) {
                    setSelected('node');
                  }
                }}
              />
            </TechLink>
          </li>
          <li>
            <TechLink
              onClick={() => {
                setSelected('next');
              }}
              color={'#0072f7'}
            >
              <SiNextDotJs
                tabIndex="0"
                alt="tech logo"
                className="tech-link"
                aria-label="Next JS details"
                onKeyDown={(e) => {
                  const key = e.key || e.keyCode;
                  if (key === 'Enter' || key === 13) {
                    setSelected('next');
                  }
                }}
              />
            </TechLink>
          </li>
          <li>
            <TechLink
              onClick={() => {
                setSelected('firebase');
              }}
              color={'#faa730'}
            >
              <SiFirebase
                tabIndex="0"
                alt="tech logo"
                className="tech-link"
                aria-label="Firebase details"
                onKeyDown={(e) => {
                  const key = e.key || e.keyCode;
                  if (key === 'Enter' || key === 13) {
                    setSelected('firebase');
                  }
                }}
              />
            </TechLink>
          </li>
          <li>
            <TechLink
              onClick={() => {
                setSelected('styled');
              }}
              color={'#d57ec4'}
            >
              <SiStyledComponents
                tabIndex="0"
                alt="tech logo"
                className="tech-link"
                aria-label="Styled Components details"
                onKeyDown={(e) => {
                  const key = e.key || e.keyCode;
                  if (key === 'Enter' || key === 13) {
                    setSelected('styled');
                  }
                }}
              />
            </TechLink>
          </li>
        </LinkCont>
      </StackGrid>
      <LineStyle theme={theme}></LineStyle>
    </ContactStackContainer>
  );
}
