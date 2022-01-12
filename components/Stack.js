import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import { FaNodeJs } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiNextDotJs,
  SiStyledComponents,
  SiTypescript,
  SiAngular,
} from 'react-icons/si';
import { device } from './styles/sizes';
import { useState } from 'react';
import SelectNonList from './styles/SelectNonList';
import ArticleDisplay from './ArticleDisplay';

const StackContainer = styled.div`
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
  @media ${device.mobileS} {
    margin: 7rem 0 0 0;
  }
`;

const H2Styles = styled.h2`
  margin: 0 0 2rem 0;
  font-family: var(--oleo);
  font-size: 3rem;
  font-weight: normal;
  @media ${device.tablet} {
    font-size: 2.2rem;
  }
  @media ${device.mobileM} {
    font-size: 2.5rem;
  }
  @media ${device.mobileS} {
    font-size: 2.2rem;
    margin-bottom: 0rem;
  }
`;
const StackDivStyles = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.mobileS} {
    margin: 1rem;
  }
`;
const StackHeadingStyles = styled.h3`
  font-size: 2.5rem;
  font-family: var(--oleo);
  font-weight: normal;

  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.mobileS} {
    font-size: 1.8rem;
  }
`;
const StackParaStyles = styled.p`
  width: 100%;
  height: auto;
  margin: 0 0 0 auto;
  text-align: justify;
  text-align-last: right;
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.mobileS} {
    margin: 0;
  }
`;

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  @media ${device.tablet} {
    grid-template-columns: 5fr 1fr;
  }
  @media ${device.mobileS} {
    margin-top: -25px;
    grid-template-columns: auto 40px;
  }
`;

const LinkCont = styled.ul`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.tablet} {
    padding: 2rem;
    width: 40px;
    li {
      width: 50px;
    }
  }
  @media ${device.mobileM} {
    padding: 0;
    width: 40px;
    li {
      width: 50px;
    }
  }
  @media ${device.mobileS} {
    li {
      width: 32px;
    }
  }
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

export default function Contact() {
  const { theme, text } = useTheme();
  const [selected, setSelected] = useState('main');

  return (
    <>
      <ArticleDisplay>
        <StackContainer>
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
                    setSelected('angular');
                  }}
                  color={'#de3f33'}
                >
                  <SiAngular
                    tabIndex="0"
                    alt="tech logo"
                    className="tech-link"
                    aria-label="Angular details"
                    onKeyDown={(e) => {
                      const key = e.key || e.keyCode;
                      if (key === 'Enter' || key === 13) {
                        setSelected('angular');
                      }
                    }}
                  />
                </TechLink>
              </li>
              <li>
                <TechLink
                  onClick={() => {
                    setSelected('typescript');
                  }}
                  color={'#3178c6'}
                >
                  <SiTypescript
                    tabIndex="0"
                    alt="tech logo"
                    className="tech-link"
                    aria-label="Typescript details"
                    onKeyDown={(e) => {
                      const key = e.key || e.keyCode;
                      if (key === 'Enter' || key === 13) {
                        setSelected('typescript');
                      }
                    }}
                  />
                </TechLink>
              </li>
              {/* <li>
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
              </li> */}
            </LinkCont>
          </StackGrid>
          <LineStyle theme={theme}></LineStyle>
        </StackContainer>
      </ArticleDisplay>
      <SelectNonList live={selected !== 'main'} theme={theme}>
        <button
          onClick={() => {
            setSelected('main');
          }}
        >
          stack
        </button>
      </SelectNonList>
    </>
  );
}
