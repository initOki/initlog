import { useUserStore } from '~/store/user';
import { styled } from 'stitches.config';

const LanguageItem = () => {
  const { repositoryLanguage } = useUserStore();
  const language = Object.keys(repositoryLanguage);

  return (
    <ul>
      {language.map((item, index) => {
        return <ItemStyled>{item}</ItemStyled>;
      })}
    </ul>
  );
};

export default LanguageItem;

export const UnOrderList = styled('ul', {});
const ItemStyled = styled('li', {
  padding: '10px',
  color: '#FFFFFF',
  borderRadius: '10px',
  cursor: 'pointer',
});
