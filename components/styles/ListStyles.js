import styled from 'styled-components';

const ListStyles = styled.li`
  line-height: 3rem;
  font-family: var(--abril);
  color: ${(props) => props.theme.color};
  margin: 0.75rem 0;
  cursor: pointer;
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  a {
    margin: 0;
    font-size: 24px;
    color: ${(props) => props.theme.color};
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

export default ListStyles;
