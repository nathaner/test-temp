import Link from 'next/link';
import React from 'react';
import Accordion from '../components/Accordion';

const ACCORDION_DATA = [
  {
    heading: 'Why should we create source code deposits?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida at massa laoreet facilisi ac nisl convallis. Egestas porta hac sed etiam sem tempus cras varius. Nunc sed lorem aliquam justo, amet porttitor hac sed nunc. Pulvinar pharetra eget eleifend aliquam. Gravida a risus cras luctus dignissim tristique cras aliquet. Iaculis quisque ligula platea nibh. Sit augue tempus aliquet sollicitudin in nunc purus at. Tincidunt sit egestas nibh nullam placerat sociis magna. ',
  },
  {
    heading: 'What is the difference between digital and physical deposits?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida at massa laoreet facilisi ac nisl convallis. Egestas porta hac sed etiam sem tempus cras varius. Nunc sed lorem aliquam justo, amet porttitor hac sed nunc. Pulvinar pharetra eget eleifend aliquam. Gravida a risus cras luctus dignissim tristique cras aliquet. Iaculis quisque ligula platea nibh. Sit augue tempus aliquet sollicitudin in nunc purus at. Tincidunt sit egestas nibh nullam placerat sociis magna. ',
  },
  {
    heading: 'Where is your data stored?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida at massa laoreet facilisi ac nisl convallis. Egestas porta hac sed etiam sem tempus cras varius. Nunc sed lorem aliquam justo, amet porttitor hac sed nunc. Pulvinar pharetra eget eleifend aliquam. Gravida a risus cras luctus dignissim tristique cras aliquet. Iaculis quisque ligula platea nibh. Sit augue tempus aliquet sollicitudin in nunc purus at. Tincidunt sit egestas nibh nullam placerat sociis magna. ',
  },
  {
    heading: 'How do source code escrow works?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida at massa laoreet facilisi ac nisl convallis. Egestas porta hac sed etiam sem tempus cras varius. Nunc sed lorem aliquam justo, amet porttitor hac sed nunc. Pulvinar pharetra eget eleifend aliquam. Gravida a risus cras luctus dignissim tristique cras aliquet. Iaculis quisque ligula platea nibh. Sit augue tempus aliquet sollicitudin in nunc purus at. Tincidunt sit egestas nibh nullam placerat sociis magna. ',
  },
  {
    heading: 'How is it different from a hash?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida at massa laoreet facilisi ac nisl convallis. Egestas porta hac sed etiam sem tempus cras varius. Nunc sed lorem aliquam justo, amet porttitor hac sed nunc. Pulvinar pharetra eget eleifend aliquam. Gravida a risus cras luctus dignissim tristique cras aliquet. Iaculis quisque ligula platea nibh. Sit augue tempus aliquet sollicitudin in nunc purus at. Tincidunt sit egestas nibh nullam placerat sociis magna. ',
  },
];

const SOLUTIONS = [
  {
    name: 'Deposit',
    content:
      'Deposits prove your ownership over your digital assests and help you win litigations with unforgeable evidence.',
    readMorePath: '/solutions',
    callBackText: 'Protect your innovations',
    callBackPath: '/',
  },
  {
    name: 'Deposit',
    content:
      'Deposits prove your ownership over your digital assests and help you win litigations with unforgeable evidence.',
    readMorePath: '/solutions',
    callBackText: 'Protect your innovations',
    callBackPath: '/',
  },
  {
    name: 'Deposit',
    content:
      'Deposits prove your ownership over your digital assests and help you win litigations with unforgeable evidence.',
    readMorePath: '/solutions',
    callBackText: 'Protect your innovations',
    callBackPath: '/',
  },
  {
    name: 'Deposit',
    content:
      'Deposits prove your ownership over your digital assests and help you win litigations with unforgeable evidence.',
    readMorePath: '/solutions',
    callBackText: 'Protect your innovations',
    callBackPath: '/',
  },
  {
    name: 'Deposit',
    content:
      'Deposits prove your ownership over your digital assests and help you win litigations with unforgeable evidence.',
    readMorePath: '/solutions',
    callBackText: 'Protect your innovations',
    callBackPath: '/',
  },
  {
    name: 'Deposit',
    content:
      'Deposits prove your ownership over your digital assests and help you win litigations with unforgeable evidence.',
    readMorePath: '/solutions',
    callBackText: 'Protect your innovations',
    callBackPath: '/',
  },
];

export default function Home() {
  return (
    <>
      <section className="intro wrapped">
        <div>
          <h1>Vaultinum</h1>
          <p>Protect your innovations and investments</p>
        </div>
        <video autoPlay={true} muted={true} className="intro-video">
          <source src="videos/vaultinum-intro-video.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </section>

      <section className="wrapped">
        <h2>Solutions</h2>
        <div className="home-solutions-grid">
          {SOLUTIONS.map((solution, index) => (
            <div className="home-solution" key={index}>
              <h3>{solution.name}</h3>
              <p>
                {solution.content}
                <Link href={solution.readMorePath}>
                  <a>Read more...</a>
                </Link>
              </p>
              <Link href={solution.callBackPath}>
                <a className="btn btn-outlined">{solution.callBackText}</a>
              </Link>
            </div>
          ))}
        </div>
        <Link href="/solutions">
          <a className="link-bg all-solutions">Find your solution</a>
        </Link>
      </section>
      <section className="customers-sample wrapped">
        <h2>Trusted by notorious companies</h2>
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
      <section className="safety wrapped">
        <h2>How safe is it?</h2>
        <div className="safety">
          <div className="row">
            <div>
              <img src="img/iso-27001.png" alt="ISO 27001" />
            </div>
            <h3>ISO 27001 certified</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              diam egestas sapien, nisi, eleifend. Diam faucibus ante at sed sit
              ultricies tristique lobortis
            </p>
          </div>
          <div className="row">
            <h3>GDPR Ready</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              diam egestas sapien, nisi, eleifend. Diam faucibus ante at sed sit
              ultricies tristique lobortis
            </p>
            <div>
              <img src="img/gdpr-ready.png" alt="GDPR Ready" />
            </div>
          </div>
          <div className="row">
            <div>
              <img src="img/security.png" alt="Algorithm security" />
            </div>
            <h3>Secure algorithms</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              diam egestas sapien, nisi, eleifend. Diam faucibus ante at sed sit
              ultricies tristique lobortis
            </p>
          </div>
          <div className="row">
            <h3>All data are stored in France</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              diam egestas sapien, nisi, eleifend. Diam faucibus ante at sed sit
              ultricies tristique lobortis
            </p>
            <div>
              <img src="img/servers.png" alt="Servers located in France" />
            </div>
          </div>
          <div className="row">
            <div>
              <img src="img/eidas-ready.svg" alt="eIDAS Ready" />
            </div>
            <h3>eIDAS Ready</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              diam egestas sapien, nisi, eleifend. Diam faucibus ante at sed sit
              ultricies tristique lobortis
            </p>
          </div>
        </div>
        <div className="benefit"></div>
      </section>
      <section className="wrapped">
        <h2>Pricing</h2>
      </section>
      <section className="wrapped">
        <h2>Your questions answered</h2>
        <Accordion data={ACCORDION_DATA} />
      </section>
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
        <h2>Want to get in touch?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sed
          eget diam ut. Gravida sed integer eros adipiscing felis non enim.
          Pretium eget et diam cursus dignissim odio pulvinar sit dictum. Eget
          in arcu proin sed interdum orci odio. Platea nulla mauris orci ut
          morbi id risus auctor enim suscipit.
        </p>
        <Link href="/contact">
          <a className="btn btn-contrast">Contact us</a>
        </Link>
      </section>
    </>
  );
}
