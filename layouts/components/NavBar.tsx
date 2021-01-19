import Link from "next/link";
import { useState } from "react";
import VaultinumLogo from "./VaultinumLogo";
import classNames from "classnames";
import { useRouter } from "next/router";

import en from "../../locales/en/en";
import fr from "../../locales/fr/fr";

export default function NavBar() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en" ? en : fr;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((open) => !open);
    };

    const MENU_ITEMS = [
        {
            name: t.navbar.youAre,
            path: "/you-are",
        },
        {
            name: t.navbar.solutions,
            path: "/solutions",
        },
        {
            name: t.navbar.aboutUs,
            path: "/about-us",
        },
        {
            name: t.navbar.contact,
            path: "/contact",
        },
    ];

    return (
        <nav className="navbar container block">
            <Link href="/">
                <a>
                    <VaultinumLogo />
                </a>
            </Link>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="toggler-open"
                onClick={handleOpen}
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <div className={classNames("menu", { open })}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="toggler-close"
                    onClick={handleOpen}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <ul className="list-unstyled">
                    {MENU_ITEMS.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path}>
                                <a onClick={handleOpen}>{item.name}</a>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="" className="btn primary">
                            {t.general.signIn}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
