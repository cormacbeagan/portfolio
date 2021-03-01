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
  button {
    margin: 0;
    font-size: 24px;
    cursor: pointer;
    color: ${(props) => props.theme.color};
    text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
  }
`;

export default ListStyles;
