import styled from 'styled-components';

const BtnStyles = styled.button`
  margin: 0 0 0 1rem;
  padding: 0.2rem 1rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.color};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  transition: box-shadow 200ms;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    box-shadow: ${(props) => props.theme.bs};
  }
  &:focus {
    text-decoration: underline;
    box-shadow: ${(props) => props.theme.bs};
  }
  &:active {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }
  &:disabled,
  &[disabled] {
    background: rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.4);
    cursor: not-allowed;
    text-decoration: none;
  }
`;

export default BtnStyles;
