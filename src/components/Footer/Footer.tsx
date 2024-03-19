import Container from '../Container';

const Footer = () => {
  return (
    <footer className="mt-10">
      <Container className="p-6">
        <p className="text-center text-fuchsia-500 hover:text-slate-700">
          Powered by <a className="underline font-medium text-inherit" href="https://shiftdatmix.org/">Remix</a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;