import React, { Props } from 'react';
import Link from 'next/link';

type Props = {
  basePath: string;
  page: number;
  lastPage: number;
};

export const Pagination = ({ basePath, page, lastPage }: Props) => {
  return (
    <div>
      <Link href={{ pathname: basePath, query: { page: page - 1 } }}>
        <button disabled={page === 1}>Prev</button>
      </Link>
      <div>{page}</div>
      <Link href={{ pathname: basePath, query: { page: page + 1 } }}>
        <button disabled={page === lastPage}>Next</button>
      </Link>
    </div>
  );
};

export default Pagination;
