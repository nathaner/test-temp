import Link from 'next/link';
import ButtonLink from '../../components/common/ButtonLink';
import VaultinumLogo from './VaultinumLogo';

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

export default function NavBar() {
  return (
    <nav className="wrapped">
      <div>
        <Link href="/">
          <a>
            <VaultinumLogo />
          </a>
        </Link>
      </div>
      <ul>
        {MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <ButtonLink href="/">Sign in</ButtonLink>
      </div>
    </nav>
  );
}
