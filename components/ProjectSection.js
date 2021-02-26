import { useEffect, useState } from 'react';
import { useTheme } from '../utils/themeState';
import ArticleDisplay from './ArticleDisplay';
import ProjectDisplay from './ProjectDisplay';
import ListStyles from './styles/ListStyles';
import MobileSelect from './styles/MobileSelect';
import SelectStyle from './styles/SelectStyle';

export default function ProjectSection() {
  const { text, theme } = useTheme();
  const [selected, setSelected] = useState(text.projects[0].name);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 420) {
      setMobile(true);
    }
  }, []);

  const list = text.projects.map((item) => (
    <ListStyles
      key={item.name}
      onClick={() => setSelected(item.name)}
      theme={theme}
    >
      <a tabIndex="0">{item.name}</a>
    </ListStyles>
  ));
  return (
    <>
      {!mobile && <SelectStyle flip>{list}</SelectStyle>}
      <ArticleDisplay flip>
        {mobile && <MobileSelect>{list}</MobileSelect>}
        <ProjectDisplay
          project={text.projects.find((item) => item.name === selected)}
        />
      </ArticleDisplay>
    </>
  );
}
