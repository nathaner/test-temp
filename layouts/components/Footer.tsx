import Link from "next/link";
import { useRouter } from "next/router";

import en from "../../locales/en/en";
import fr from "../../locales/fr/fr";

export default function Footer({ currentYear }: { currentYear: number }) {
    const router = useRouter();
    const { locale } = router;

    const t = locale === "en" ? en : fr;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };

    const FOOTER_ITEMS = [
        {
            heading: "Vaultinum",
            items: [
                {
                    name: t.general.home,
                    path: "/",
                },
                {
                    name: t.general.solutions,
                    path: "/solutions",
                },
                {
                    name: t.general.youAre,
                    path: "/you-are",
                },
                {
                    name: t.general.aboutUs,
                    path: "/about-us",
                },
                {
                    name: t.general.contact,
                    path: "/contact",
                },
            ],
        },
        {
            heading: "Resources",
            items: [
                {
                    name: t.general.blog,
                    path: "/blog",
                },
                {
                    name: t.general.whitePapers,
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
                    name: t.general.termsAndConditions,
                    path: "/terms-and-conditions",
                },
                {
                    name: t.general.privacyPolicy,
                    path: "/privacy-policy",
                },
            ],
        },
    ];

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
                        <img src="./img/vaultinum-logo.png" alt="Vaultinum logo" />
                        <span>Since 1976</span>
                    </div>
                </div>
                <select
                    onChange={changeLanguage}
                    defaultValue={locale}
                    className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
                >
                    <option className="text-black" value="en">
                        English
                    </option>
                    <option className="text-black" value="fr">
                        Français
                    </option>
                </select>
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
