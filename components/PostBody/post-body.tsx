import { Post } from 'types/types';
import styled from '@emotion/styled';

const Article = styled.article`
  line-height: 1.6;
  font-size: 1rem;
  letter-spacing: -0.011rem;
  font-weight: 400;
  font-feature-settings: 'ss01', 'cv01';

  iframe {
    display: block;
    max-width: 90%;
  }
  @media screen and (min-width: 900px) {
    font-size: 1.125rem;
  }
`;

type Props = {
  content: Post['content'];
};

const PostBody = ({ content }: Props) => {
  return <Article dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostBody;
