import styled from 'styled-components';
import ProjectPara from './ProjectPara';
import ProjectLinks from './ProjectLinks';
import { device } from './styles/sizes';

const DivStyles = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: var(--kanit);
  justify-content: center;
  @media ${device.mobileL} {
    width: 90vw;
  }
  @media ${device.mobileM} {
    margin-top: 12rem;
    justify-content: flex-start;
  }
  @media ${device.mobileS} {
    margin-top: 8rem;
    justify-content: flex-start;
  }
`;

export default function ProjectDisplay({ project }) {
  return (
    <DivStyles>
      {project.descriptions.map((item) => (
        <ProjectPara key={item.heading} description={item} />
      ))}
      <ProjectLinks links={project.links} />
    </DivStyles>
  );
}
