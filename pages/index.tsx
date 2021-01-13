import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Accordion from '../components/Accordion';
import ButtonLinkContrast from '../components/common/ButtonLinkContrast';
import ButtonLinkOutlined from '../components/common/ButtonLinkOutlined';
import Container from '../components/common/Container';
import Heading from '../components/common/Heading';
import WaveSection from '../components/WaveSection';

import en from '../locales/en/homepage.json';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Vaultinum — Protect your innovations and investments</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
        <meta
          name="Description"
          content="Vaultinum protects your innovations and investments through dposist and escrow agreements."
        />
      </Head>
      <section className="intro">
        <div>
          <h1>Vaultinum</h1>
          <p>Protect your innovations and investments</p>
        </div>
        <video autoPlay={true} muted={true}>
          <source src="videos/vaultinum-intro-video.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </section>
      <Container>
        <Heading>Solutions</Heading>
        <div className="home-solutions-grid">
          {props.solutions.map((solution, index) => (
            <div className="home-solution" key={index}>
              <h3>{solution.name}</h3>
              <p>
                {solution.content}
                <Link href={solution.readMorePath}>
                  <a>Read more...</a>
                </Link>
              </p>
              <ButtonLinkOutlined href={solution.callBackPath}>
                {solution.callBackText}
              </ButtonLinkOutlined>
            </div>
          ))}
        </div>
        <section className="customers-sample">
          <Heading>Trusted by notorious companies</Heading>
          <p>Beyond services, an unforgeable proof of trust for decades...</p>
          <div className="customers-grid">
            <div>
              <img src="img/airbus-logo.png" alt="Airbus logo" />
            </div>
            <div>
              <img src="img/Total-logo.png" alt="Total logo" />
            </div>
            <div>
              <img className="w-max" src="img/cnrs-logo.png" alt="CNRS logo" />
            </div>
          </div>
          <p>...among thousands</p>
        </section>
        <section className="safety">
          <Heading>How safe is it?</Heading>
          <div className="safety">
            <div className="row">
              <div>
                <img src="img/iso-27001.png" alt="ISO 27001" />
              </div>
              <div>
                <h3>ISO 27001 certified</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Iaculis diam egestas sapien, nisi, eleifend. Diam faucibus
                  ante at sed sit ultricies tristique lobortis
                </p>
              </div>
            </div>
            <div className="row">
              <div>
                <h3>GDPR Ready</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Iaculis diam egestas sapien, nisi, eleifend. Diam faucibus
                  ante at sed sit ultricies tristique lobortis
                </p>
              </div>
              <div>
                <img src="img/gdpr-ready.png" alt="GDPR Ready" />
              </div>
            </div>
            <div className="row">
              <div>
                <img src="img/security.png" alt="Algorithm security" />
              </div>
              <div>
                <h3>Secure algorithms</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Iaculis diam egestas sapien, nisi, eleifend. Diam faucibus
                  ante at sed sit ultricies tristique lobortis
                </p>
              </div>
            </div>
            <div className="row">
              <div>
                <h3>All data are stored in France</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Iaculis diam egestas sapien, nisi, eleifend. Diam faucibus
                  ante at sed sit ultricies tristique lobortis
                </p>
              </div>
              <div>
                <img src="img/servers.png" alt="Servers located in France" />
              </div>
            </div>
            <div className="row">
              <div>
                <img src="img/eidas-ready.svg" alt="eIDAS Ready" />
              </div>
              <div>
                <h3>eIDAS Ready</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Iaculis diam egestas sapien, nisi, eleifend. Diam faucibus
                  ante at sed sit ultricies tristique lobortis
                </p>
              </div>
            </div>
          </div>
          <div className="benefit"></div>
        </section>
        <section>
          <Heading>Pricing</Heading>
        </section>
        <section>
          <Heading>Your questions answered</Heading>
          <Accordion data={props.accordion} />
        </section>
      </Container>
      <WaveSection>
        <Heading>Want to get in touch?</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sed
          eget diam ut. Gravida sed integer eros adipiscing felis non enim.
          Pretium eget et diam cursus dignissim odio pulvinar sit dictum. Eget
          in arcu proin sed interdum orci odio. Platea nulla mauris orci ut
          morbi id risus auctor enim suscipit.
        </p>
        <ButtonLinkContrast href="/contact">Contact us</ButtonLinkContrast>
      </WaveSection>
    </>
  );
}

export function getStaticProps({ locale }) {
  const solutions = en.solutions;
  const accordion = en.accordion;

  return {
    props: {
      solutions,
      accordion,
    },
  };
}
