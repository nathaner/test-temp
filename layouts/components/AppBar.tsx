import Link from 'next/link';
import VaultinumLogo from './VaultinumLogo';

type MenuItem = {
  name: string;
  path: string;
};

const MENU_ITEMS = [
  {
    name: 'You are',
    path: '/you-are',
  },
  {
    name: 'Solutions',
    path: '/solutions',
  },
  {
    name: 'About us',
    path: '/about-us',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export default function AppBar() {
  return (
    <nav className="wrapped">
      <div>
        <Link href="/">
          <a><VaultinumLogo /></a>
        </Link>
      </div>
      <ul>
        {
          MENU_ITEMS.map((item, index) => (
            <li key={index}>
            <Link href={item.path}>
              <a>
                {item.name}
              </a>
            </Link>
          </li>
          ))
        }
      </ul>
      <div>
        <a href="#" className="btn">Sign in</a>
      </div>
    </nav>
  );
}

