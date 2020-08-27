import { Post } from 'types/types';

type Props = {
  content: Post['content'];
};

const PostBody = ({ content }: Props) => {
  return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default PostBody;
