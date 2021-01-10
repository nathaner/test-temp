import Link from 'next/link';

const FOOTER_ITEMS = [
  {
    heading: 'Vaultinum',
    items: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Solutions',
        path: '/solutions',
      },
      {
        name: 'You are',
        path: '/you-are',
      },
      {
        name: 'About us',
        path: '/about-us',
      },
      {
        name: 'Contact',
        path: '/contact',
      },
    ],
  },
  {
    heading: 'Resources',
    items: [
      {
        name: 'Blog',
        path: '/',
      },
      {
        name: 'White papers',
        path: '/',
      },
    ],
  },
  {
    heading: 'Social',
    items: [
      {
        name: 'LinkedIn',
        path: '/social',
      },
      {
        name: 'Facebook',
        path: '/social',
      },
    ],
  },
  {
    heading: 'Legal',
    items: [
      {
        name: 'Terms and conditions',
        path: '/terms-and-conditions',
      },
      {
        name: 'Privacy policy',
        path: '/privacy-policy',
      },
    ],
  },
];

export default function Footer() {

  const handleChange = (option) => {
    window.location.assign(option)
  }
  return (
    <footer className="wrapped">
      <div className="grid">
        <div>
          <img
            src="img/vaultinum-logo.png"
            alt="Vaultinum Logo"
            className="logo"
          />
          <p className="footer-moto">Since 1976</p>
          <select onChange={(option) => handleChange(option)}>
            <option value="/">English</option>
            <option value="/fr">French</option>
          </select>
        </div>
        {FOOTER_ITEMS.map((item) => (
          <div>
            <h4>{item.heading}</h4>
            <ul>
              {item.items.map((link) => (
                <li>
                  <Link href={link.path}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="copyright">
        &copy; Vaultinum {new Date().getFullYear()} | All rights reserved.
      </p>
    </footer>
  );
}
