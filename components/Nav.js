import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import { device } from './styles/sizes';
import { useDimensionSetter } from '../utils/useDimensionSetter';

const NavStyles = styled.ul`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  padding: 1rem 0 1.2rem 0;
  bottom: 0px;
  right: 12px;
  position: fixed;
  list-style-type: none;
  font-family: 'Abril Fatface';
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
`;

const NavItem = styled.li`
  margin: 0 1rem;
  a {
    color: ${(props) => props.theme.color};
  }
  @media ${device.tablet} {
    margin: 0 0.5rem;
  }
`;

export default function Nav() {
  const { theme } = useTheme();
  const [displayNav, setDisplayNav] = useState(false);
  const { width, height } = useDimensionSetter();

  useEffect(() => {
    if (width <= 740) {
      setDisplayNav(true);
    }
  }, [width]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.innerWidth <= 740) return;
      if (e.target.scrollTop >= height - 100) {
        setDisplayNav(true);
      } else {
        setDisplayNav(false);
      }
    };
    const handleFullscreen = (e) => {
      const requestFullScreen =
        e.target.requestFullscreen ||
        e.target.mozRequestFullScreen ||
        e.target.webkitRequestFullScreen ||
        e.target.msRequestFullscreen;
      requestFullScreen();
    };

    const root = document.getElementById('root');
    root.addEventListener('scroll', handleScroll);
    root.addEventListener('scroll', handleFullscreen, { once: true });
    return () => {
      root.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <NavStyles theme={theme} displayNav={displayNav}>
        <NavItem theme={theme}>
          <Link href="#home">home</Link>
        </NavItem>
        <NavItem theme={theme}>
          <Link href="#projects">projects</Link>
        </NavItem>
        <NavItem theme={theme}>
          <Link href="#stack">stack</Link>
        </NavItem>
        <NavItem theme={theme}>
          <Link href="#contact">contact</Link>
        </NavItem>
      </NavStyles>
    </nav>
  );
}
