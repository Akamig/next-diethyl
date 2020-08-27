import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div>
      <h1 className='logo'>
        <Link href='/'>
          <a>
            <img src='/favicon.svg' alt='Test!' style={{ width: '100px' }} />
          </a>
        </Link>
      </h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link href='/post'>
                <a>Post</a>
              </Link>
            </li>
            <li>
              <Link href='/category'>
                <a>Category</a>
              </Link>
            </li>
            <li>
              <Link href='/badge'>
                <a>Badge</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
