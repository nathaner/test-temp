import Head from 'next/head';
import Container from '../components/common/Container';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Vaultinum — You are</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>
      <Container>
        <section>
          <h2>You are...</h2>
        </section>
      </Container>
    </>
  );
}
