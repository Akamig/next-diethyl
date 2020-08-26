import { Post } from 'types/types';

type Props = {
  content: Post['content'];
};

const PostBody = ({ content }: Props) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
