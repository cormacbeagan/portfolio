import styled from 'styled-components';

const ExDivStyles = styled.div`
  position: relative;
  margin: 0.75rem 0;
  padding: 0.75rem 1rem;
  border-radius: 20px;
  height: ${(props) => (props.show ? '200px' : '5rem')};
  line-height: ${(props) => (props.show ? '1.5' : '3')};
  overflow: hidden;
  transition: all 0.8s ease;
`;

export default ExDivStyles;
