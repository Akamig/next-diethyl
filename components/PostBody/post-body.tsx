import { Post } from 'types/types';
import styled from '@emotion/styled';

const Article = styled.article`
  line-height: 1.6;
  font-size: 1.125rem;
  letter-spacing: calc(1.125rem * -0.03);

  @media screen and (max-width: 900px) {
    iframe {
      display: block;
      max-width: 100%;
    }
    font-size: 1rem;
  }
`;

type Props = {
  content: Post['content'];
};

const PostBody = ({ content }: Props) => {
  return <Article dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostBody;
