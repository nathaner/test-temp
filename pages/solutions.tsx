import Head from 'next/head';
import ButtonLink from '../components/common/ButtonLink';
import ButtonLinkContrast from '../components/common/ButtonLinkContrast';
import Container from '../components/common/Container';

export default function AboutVaultinum() {
  return (
    <>
      <Head>
        <title>Vaultinum — Solutions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>
      <main className="solutions">
        <Container>
          <section>
            <h1>Solutions</h1>
          </section>

          <section>
            <h2>Deposit</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum eius eum incidunt labore minus officiis dignissimos
              asperiores sit quos, sapiente totam quae facere ad, in molestias
              nam, natus beatae?
            </p>

            <div className="text-center">
              <ButtonLink href="/">Protect your IP</ButtonLink>
            </div>
          </section>
          <section>
            <h2>Escrow agreement</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum eius eum incidunt labore minus officiis dignissimos
              asperiores sit quos, sapiente totam quae facere ad, in molestias
              nam, natus beatae?
            </p>

            <div className="text-center">
              <ButtonLink href="/">Ensure your technology</ButtonLink>
            </div>
          </section>
          <section>
            <h2>Secure tranfer</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum eius eum incidunt labore minus officiis dignissimos
              asperiores sit quos, sapiente totam quae facere ad, in molestias
              nam, natus beatae?
            </p>

            <div className="text-center">
              <ButtonLink href="/">Secure your transfer</ButtonLink>
            </div>
          </section>
          <section>
            <h2>Timestamping</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum eius eum incidunt labore minus officiis dignissimos
              asperiores sit quos, sapiente totam quae facere ad, in molestias
              nam, natus beatae?
            </p>

            <div className="text-center">
              <ButtonLink href="/">Certify your work</ButtonLink>
            </div>
          </section>
          <section>
            <h2>GDPR</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum eius eum incidunt labore minus officiis dignissimos
              asperiores sit quos, sapiente totam quae facere ad, in molestias
              nam, natus beatae?
            </p>

            <div className="text-center">
              <ButtonLink href="/">Prove your compliance</ButtonLink>
            </div>
          </section>
          <section>
            <h2>Software due diligence</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum eius eum incidunt labore minus officiis dignissimos
              asperiores sit quos, sapiente totam quae facere ad, in molestias
              nam, natus beatae?
            </p>
          </section>
        </Container>
        <section className="kys-levels">
          <Container>
            <div className="grid">
              <div>
                <h3>Self assessment level 1</h3>
                KYS Level 1 evaluates technology health, IP risk, Cyber
                Security, and Maintainability of a company.
              </div>
              <div>
                <h3>Code assessment level 2</h3>
                KYS Level 2 is a full audit that provides a precise inventory of
                the technological assets of a company.
              </div>
            </div>

            <ButtonLinkContrast href="/">
              Secure your investments
            </ButtonLinkContrast>
          </Container>
        </section>

        <section className="more-info">
          <Container>
            <h2>Need more information?</h2>

            <div className="grid">
              <ButtonLink href="/">White papers</ButtonLink>
              <ButtonLink href="/">Webinars</ButtonLink>
              <ButtonLink href="/">Contact us</ButtonLink>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
