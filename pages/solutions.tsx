import ButtonLink from '../components/common/ButtonLink';
import ButtonLinkContrast from '../components/common/ButtonLinkContrast';
import Container from '../components/common/Container';
import Head from '../components/common/Head';
import Heading from '../components/common/Heading';

export default function AboutVaultinum() {
  return (
    <>
    <Head
        title="Vaultinum — Solutions"
        description="Vaultinum has solutions corresponding to any need you may have regarding the intellectual property of your innovations."
      />
      <main className="solutions">
          <section className="container block">
            <Heading>Deposit</Heading>

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
          <section className="container block">
            <Heading>Escrow agreement</Heading>

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
          <section className="container block">
            <Heading>Secure tranfer</Heading>

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
          <section className="container block">
            <Heading>Timestamping</Heading>

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
          <section className="container block">
            <Heading>GDPR</Heading>

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
          <section className="container block">
            <Heading>Software due diligence</Heading>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum eius eum incidunt labore minus officiis dignissimos
              asperiores sit quos, sapiente totam quae facere ad, in molestias
              nam, natus beatae?
            </p>
          </section>
        <section className="kys-levels">
            <div className="container block">
            <div className="grid grid-1x2">
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
            </div>
        </section>

        <section className="more-info container block">
            <Heading>Need more information?</Heading>

            <div className="grid grid-1x3">
              <ButtonLink href="/">White papers</ButtonLink>
              <ButtonLink href="/">Webinars</ButtonLink>
              <ButtonLink href="/">Contact us</ButtonLink>
            </div>
        </section>
      </main>
    </>
  );
}
