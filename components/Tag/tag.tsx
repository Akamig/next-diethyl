import React from 'react';
import Link from 'next/link';
import { Post } from 'types/types';

type Props = {
  tags: Post['tags'];
};

const Tag = ({ tags }: Props) => {
  return tags ? (
    <div className='tag-container'>
      <ul>
        {tags.map((tag) => (
          <li key={`${tag.slug}__tag`}>
            <Link as={`/tag/${tag.slug}`} href='/tag/[slug]'>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default Tag;
