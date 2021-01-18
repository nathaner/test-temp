import Link from "next/link";
import Container from "../../components/common/Container";

const FOOTER_ITEMS = [
    {
        heading: "Vaultinum",
        items: [
            {
                name: "Home",
                path: "/",
            },
            {
                name: "Solutions",
                path: "/solutions",
            },
            {
                name: "You are",
                path: "/you-are",
            },
            {
                name: "About us",
                path: "/about-us",
            },
            {
                name: "Contact",
                path: "/contact",
            },
        ],
    },
    {
        heading: "Resources",
        items: [
            {
                name: "Blog",
                path: "/blog",
            },
            {
                name: "White papers",
                path: "/",
            },
        ],
    },
    {
        heading: "Social",
        items: [
            {
                name: "LinkedIn",
                path: "/social",
            },
            {
                name: "Facebook",
                path: "/social",
            },
        ],
    },
    {
        heading: "Legal",
        items: [
            {
                name: "Terms and conditions",
                path: "/terms-and-conditions",
            },
            {
                name: "Privacy policy",
                path: "/privacy-policy",
            },
        ],
    },
];

export default function Footer({ currentYear }: { currentYear: number }) {
    const handleChange = (option) => {
        window.location.assign(option);
    };
    return (
        <footer className="footer">
            <div className="block container">
                <div>
                    {FOOTER_ITEMS.map((item, index) => (
                        <section key={index}>
                            <h4>{item.heading}</h4>
                            <ul className="list-unstyled">
                                {item.items.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.path}>
                                            <a>{link.name}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                    <div className="brand">
                        <img
                            src="./img/vaultinum-logo.png"
                            alt="Vaultinum logo"
                        />
                        <span>Since 1976</span>
                    </div>
                </div>
                <p className="copyright">&copy; Vaultinum {currentYear} | All rights reserved.</p>
            </div>
        </footer>
    );
}

export function getStaticProps() {
    return {
        props: {
            currentYear: new Date().getFullYear(),
        },
    };
}
