import Link from 'next/link';
import styled from 'styled-components';
import { useTheme } from '../utils/themeState';
import { device } from './styles/sizes';

const NavStyles = styled.ul`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  padding: 0.5rem 0 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  font-family: 'Abril Fatface';
  font-size: 2rem;
  bottom: 0px;
  position: fixed;
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
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

  return (
    <nav>
      <NavStyles>
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
