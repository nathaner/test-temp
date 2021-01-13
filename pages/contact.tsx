import Head from 'next/head';
import React from 'react';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import Heading from '../components/common/Heading';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Vaultinum — Contact us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
        <meta
          name="Description"
          content="Vaultinum answers to any question you may have regarding its solutions or intellectual property."
        />
      </Head>
      <Container>
        <section>
          <Heading>Contact us</Heading>
          <p>
            We are eager to discuss your business needs and answer any questions
            you may have. Enter your details and we’ll get back to you shortly.
          </p>
          <form>
            <div className="form-control">
              <label htmlFor="firstname">
                First name
                <span className="optional"> — Optional</span>
              </label>
              <input type="text" name="firstname" id="firstname" />
            </div>
            <div className="form-control">
              <label htmlFor="lastname">
                Last name
                <span className="optional"> — Optional</span>
              </label>
              <input type="text" name="lastname" id="lastname" />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form-control">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols={50}
                rows={10}
              ></textarea>
            </div>
            <Button>Send</Button>
          </form>
        </section>
      </Container>
    </>
  );
}
