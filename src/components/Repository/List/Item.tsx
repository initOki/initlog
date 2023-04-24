import { styled } from '@stitches/react';
import axios from 'axios';
import { useUserStore } from '~/store/user';

interface Props {
  languagesUrl: string;
  repositoryName: string;
}
const Item = ({ languagesUrl, repositoryName }: Props) => {
  const { setRepositoryLanguage, repositoryLanguage } = useUserStore();

  const getLanguage = async (languageUrl: Props['languagesUrl']) => {
    await axios
      .get(languageUrl, {
        headers: {
          Authorization: `token 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`,
        },
      })
      .then((response) => {
        if (!response.data) return;
        setRepositoryLanguage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <ItemStyled onClick={() => getLanguage(languagesUrl)}>{repositoryName}</ItemStyled>;
};

export default Item;

const ItemStyled = styled('li', {
  padding: '10px',
  color: '#FFFFFF',
  borderRadius: '10px',
  cursor: 'pointer',
});
