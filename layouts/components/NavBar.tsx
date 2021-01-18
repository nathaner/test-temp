import Link from "next/link";
import { useState } from "react";
import VaultinumLogo from "./VaultinumLogo";
import classNames from "classnames"

const MENU_ITEMS = [
    {
        name: "You are",
        path: "/you-are",
    },
    {
        name: "Solutions",
        path: "/solutions",
    },
    {
        name: "About us",
        path: "/about-us",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        console.log("ok");

        setOpen((open) => !open);
    };

    return (
        <nav className="navbar container">
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
                className="open"
                onClick={handleOpen}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            <div className={classNames("menu", { open })}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="close"
                    onClick={handleOpen}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
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
                            Sign in
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
