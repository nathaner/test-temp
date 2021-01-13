import Head from 'next/head';
import Heading from '../components/common/Heading';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Vaultinum — Privacy policy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
        <meta
          name="Description"
          content="Vaultinum respects your privacy, learn more about what we do with your data."
        />
      </Head>
      <Heading>Privacy Policy</Heading>
    </>
  );
}
