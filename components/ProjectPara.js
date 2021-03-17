import ParaStyles from './styles/ParaStyles';

export default function ProjectPara({ description }) {
  return (
    <ParaStyles>
      <h2>{description.heading}</h2>
      <p>{description.paragraph}</p>
    </ParaStyles>
  );
}
