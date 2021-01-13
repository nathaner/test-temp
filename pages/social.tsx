import Head from 'next/head';
import React from 'react';
import Heading from '../components/common/Heading';

export default function Social() {
  return (
    <>
      <Head>
        <title>Vaultinum — Solutions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>
      <section>
        <Heading>Follow us around</Heading>
        <p>Want to know all everything about intellectual property?</p>
      </section>
    </>
  );
}
