import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import { device } from './styles/sizes';

const ThemeBtnStyle = styled.aside`
  text-align: center;
  color: ${(props) => props.theme.color};
  font-family: var(--abril);
  z-index: 10;
  position: absolute;
  overflow: hidden;
  top: 20px;
  right: 20px;
  transition: height 2s ease;

  p {
    cursor: pointer;
  }
  .theme-btn {
    cursor: pointer;
    color: ${(props) => props.theme.color};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  @media ${device.mobileL} {
    position: absolute;
    overflow: hidden;
    top: 2rem;
    right: 1rem;
  }
  @media ${device.mobileM} {
    top: 1rem;
  }
  @media ${device.mobileS} {
    top: 0.5rem;
  }
`;

const DropDownArrow = styled.div`
  width: 0;
  height: 0;
  top: -4px;
  left: 52.5px;
  position: absolute;
  border-width: 10px;
  border-style: solid;
  border-color: ${(props) => props.theme.color};
  transform: rotate(45deg);
`;
const ThemeDropDown = styled.div`
  height: ${(props) => (props.show ? '200px' : '0px')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  margin: 0.5rem 0;
  position: relative;
  padding: 0.1rem 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color};
  color: ${(props) =>
    props.theme.background.includes('line') ? 'grey' : props.theme.background};
  transition: all 200ms ease;
  ul {
    padding: 0;
  }
  li {
    padding: 0;
  }
  .theme-li-btn {
    color: ${(props) =>
      props.theme.background.includes('line')
        ? 'grey'
        : props.theme.background};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const themes = ['light', 'dark', 'blue', 'rainbow', 'wild'];

export default function Theme() {
  const { theme, themeSetter } = useTheme();
  const [show, setShow] = useState(false);
  const div = useRef();
  let timeout;

  const handleBlur = () => {
    timeout = setTimeout(() => {
      setShow(false);
    });
  };

  const handleFocus = () => {
    clearTimeout(timeout);
  };

  return (
    <ThemeBtnStyle ref={div} theme={theme} onBlur={handleBlur}>
      <button
        className="theme-btn"
        theme={theme}
        onFocus={() => {
          setShow(true);
          handleFocus();
        }}
        tabIndex="0"
      >
        theme
      </button>
      <ThemeDropDown theme={theme} show={show} aria-hidden={show}>
        <DropDownArrow theme={theme} />
        <ul>
          {themes.map((theme, index) => (
            <li key={index}>
              <button
                className="theme-li-btn"
                onClick={() => {
                  themeSetter(theme);
                  setShow(false);
                }}
                onFocus={handleFocus}
              >
                {theme === 'wild' ? 'go wild' : theme}
              </button>
            </li>
          ))}
        </ul>
      </ThemeDropDown>
    </ThemeBtnStyle>
  );
}
