import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ArticleDisplay from './ArticleDisplay';
import Contact from './Contact';
import Stack from './Stack';
import ListStyles from './styles/ListStyles';
import SelectStyle from './styles/SelectStyle';
import { ServerStyleSheet } from 'styled-components';
import MobileSelect from './styles/MobileSelect';

export default function ContStack() {
  const [selected, setSelected] = useState(true);
  const [mobile, setMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth < 420) {
      setMobile(true);
    }
    if (router.asPath.includes('stack')) {
      setSelected(false);
    } else if (router.asPath.includes('contact')) {
      setSelected(true);
    }
  });

  const list = (
    <>
      <ListStyles
        onClick={() => {
          router.asPath = '/#contact';
          setSelected(true);
        }}
        tabIndex="0"
        selected={selected}
      >
        contact
      </ListStyles>
      <ListStyles
        onClick={() => {
          router.asPath = '/#stack';
          setSelected(false);
        }}
        tabIndex="0"
        selected={!selected}
      >
        stack
      </ListStyles>
    </>
  );
  return (
    <>
      <ArticleDisplay>
        {mobile && <MobileSelect id="stack">{list}</MobileSelect>}
        {selected ? <Contact /> : <Stack />}
      </ArticleDisplay>
      {!mobile && <SelectStyle id="stack">{list}</SelectStyle>}
    </>
  );
}
