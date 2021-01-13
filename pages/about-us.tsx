import Head from 'next/head';
import ButtonLink from '../components/common/ButtonLink';
import ButtonLinkContrast from '../components/common/ButtonLinkContrast';
import Container from '../components/common/Container';
import Heading from '../components/common/Heading';
import HeadingCenter from '../components/common/HeadingCenter';

export default function AboutVaultinum() {
  return (
    <>
      <Head>
        <title>Vaultinum — About us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
        <meta name="Description" content="Vaultinum brings the modern web to intellectual property." />
      </Head>
      <Container>
        <section className="about-us-intro">
          <Heading>About us</Heading>
          <div className="grid">
            <div>
              <p>
                Vaultinum (formerly CELOG) is a trusted, independent, and
                neutral third party specialized in digital asset protection.
              </p>

              <p>
                The dematerialization of information and exchanges has
                contributed to the significant increase in digital disputes. It
                has created new challenges with increased risk of data loss,
                theft , and misuse.
              </p>

              <p>
                Our mission is to protect our clients’ most important assests
                and to ensure their business continuity.
              </p>

              <p>
                Through an unrivalled range of services, Vaultinum solves issues
                related to the collection and analysis of evidence in a digital
                environment.
              </p>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pVE92TNDwUk"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>
        <section>
          <HeadingCenter>For 40 years</HeadingCenter>
          <p className="text-center">
            Vaultinum experts are committed to protecting the intellectual
            property of creators.
          </p>
          <p className="text-center">
            Thanks to its legal and technical competencies, our team is able to
            assist our clients in their cases and offer them reliable and
            effective probative solutions in accordance with state of the art,
            in line with their needs.
          </p>
        </section>
        <section className="text-center why-vaultinum">
          <HeadingCenter>Why Vaultinum?</HeadingCenter>
          <div className="grid">
            <div>
              <h3>The traditional way of digital asset protection</h3>
              <ul>
                <li>Tedious and time-consuming manual solutions</li>
                <li>Limited probative value</li>
                <li>Individual services</li>
                <li>Long processes with little to no support</li>
              </ul>
            </div>
            <div>
              <h3>The Vaultinum services</h3>
              <ul>
                <li>Automanted and digital solutions</li>
                <li>Unforgeable evidence</li>
                <li>Collaborative platforms</li>
                <li>High responsiveness with 24/7 assistance </li>
              </ul>
            </div>
          </div>
          <ButtonLink href="/replace">Get started</ButtonLink>
        </section>
      </Container>

      <section className="wave-section">
        <div className="custom-shape-divider-top-1610045199">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Heading>Need more information?</Heading>
        <ButtonLinkContrast href="/contact">Contact us</ButtonLinkContrast>
      </section>
    </>
  );
}
