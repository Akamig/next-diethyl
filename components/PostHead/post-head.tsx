import Link from 'next/link';
import Tag from '../Tag/tag';
import { Post } from 'types/types';

type Props = {
  title: Post['title'];
  tags: Post['tags'];
  category: Post['category'];
};

const PostHead = ({ title, tags, category }: Props) => {
  return (
    <>
      <div>
        <Link as={`/category/${category.slug}`} href='/category/[slug]'>
          <a>{category.name}</a>
        </Link>
        <h1>
          <Link as={`/post/`} href='/post/'>
            <a aria-label={title}>{title}</a>
          </Link>
        </h1>
        <section>
          <Tag tags={tags} />
        </section>
      </div>
      <hr />
    </>
  );
};

export default PostHead;
