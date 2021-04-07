import styled from 'styled-components';

const ThemeBody = styled.div`
  position: relative;
  z-index: 0;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const ScrollContent = styled.div`
  z-index: 2;
  width: 100%;
  height: ${(props) => props.height}px;
  position: relative;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scrollbar-width: normal;
  scrollbar-color: ${(props) => props.theme.color} rgba(0, 0, 0, 0.2);
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color};
    border-radius: 6px;
  }
`;

export { ThemeBody, ScrollContent };
