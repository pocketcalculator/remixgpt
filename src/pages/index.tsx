import Layout from '../components/Layout';
import Container from '../components/Container';
import Button from '../components/Button';

function Home() {
  return (
    <Layout>
      <Container className="mt-20">
        <p className="text-center">
          <Button href="/login">
            Log In
          </Button>
        </p>
      </Container>
    </Layout>
  )
}

export default Home;
