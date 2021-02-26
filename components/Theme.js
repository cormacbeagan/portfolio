import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import { device } from './styles/sizes';

const ThemeBtnStyle = styled.div`
  text-align: center;
  color: ${(props) => props.theme.color};
  font-family: var(--abril);
  z-index: 10;
  position: fixed;
  top: 20px;
  right: 20px;
  transition: height 2s ease;
  &:hover {
    text-decoration: underline;
  }
  p {
    cursor: pointer;
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
  right: ${(props) => (props.show ? '0' : '-250px')};
  top: ${(props) => (props.show ? '0' : '-150px')};
  transform: ${(props) => (props.show ? 'rotate(0)' : 'rotate(-90deg)')};
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
  button {
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

export default function Theme() {
  const { theme, themeSetter } = useTheme();
  const [show, setShow] = useState(false);
  const btn = useRef();
  useEffect(() => {
    const themeBtn = btn.current;

    function handleUp(e) {
      if (!e.target.contains(themeBtn)) {
        setShow(false);
      }
    }
    document.addEventListener('click', handleUp);
    return () => {
      document.removeEventListener('click', handleUp);
    };
  }, []);

  // todo add onEnter selection for themes
  return (
    <ThemeBtnStyle
      ref={btn}
      theme={theme}
      onClick={() => setShow(!show)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex="0"
    >
      theme
      <ThemeDropDown theme={theme} show={show}>
        <DropDownArrow theme={theme} />
        <ul>
          <li onClick={() => themeSetter('light')}>
            <button>light</button>
          </li>
          <li onClick={() => themeSetter('dark')}>
            <button>dark</button>
          </li>
          <li onClick={() => themeSetter('blue')}>
            <button>blue</button>
          </li>
          <li onClick={() => themeSetter('rainbow')}>
            <button>rainbows</button>
          </li>
          <li onClick={() => themeSetter('wild')}>
            <button>go wild</button>
          </li>
        </ul>
      </ThemeDropDown>
    </ThemeBtnStyle>
  );
}
