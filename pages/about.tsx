import Link from 'next/link';
import Layout from 'components/Layout';

const AboutPage = () => (
  <Layout>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link as='/' href='/'>
          <a>Go home</a>
        </Link>
      </p>
  </Layout>
);

export default AboutPage;
