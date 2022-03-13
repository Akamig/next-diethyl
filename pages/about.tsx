import Link from 'next/link';
import Layout from 'components/Layout';
import { Container } from 'next/app';

const AboutPage = () => (
  <Layout>
    <Container>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link as='/' href='/'>
          <a>Go home</a>
        </Link>
      </p>
    </Container>
  </Layout>
);

export default AboutPage;
