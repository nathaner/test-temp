import Head from 'next/head';
import Container from '../components/common/Container';
import Heading from '../components/common/Heading';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Vaultinum — You are</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
        <meta name="Description" content="Vaultinum tailors its solutions to each client." />
      </Head>
      <Container>
        <section>
          <Heading>You are...</Heading>
        </section>
      </Container>
    </>
  );
}
