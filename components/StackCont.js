import ArticleDisplay from './ArticleDisplay';
import Stack from './Stack';
import SelectNonList from './styles/SelectNonList';

export default function StackCont() {
  return (
    <>
      <ArticleDisplay>
        <Stack />
      </ArticleDisplay>
      <SelectNonList id="stack">
        <h2>stack</h2>
      </SelectNonList>
    </>
  );
}
