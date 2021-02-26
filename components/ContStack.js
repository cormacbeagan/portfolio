import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ArticleDisplay from './ArticleDisplay';
import Contact from './Contact';
import Stack from './Stack';
import ListStyles from './styles/ListStyles';
import SelectStyle from './styles/SelectStyle';
import MobileSelect from './styles/MobileSelect';
import Link from 'next/link';
import { useTheme } from '../utils/themeState';

export default function ContStack() {
  const [selected, setSelected] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { theme } = useTheme();
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
      <ListStyles selected={selected} theme={theme}>
        <Link href="#contact">contact</Link>
      </ListStyles>
      <ListStyles selected={!selected} theme={theme}>
        <Link href="#stack">stack</Link>
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
