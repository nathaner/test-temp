import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import en from "../../locales/en/en";
import fr from "../../locales/fr/fr";

import classNames from "classnames";
import Chevron from "../../components/common/Chevron";

export default function Footer() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded((isExpanded) => !isExpanded);
    };

    const router = useRouter();
    const { locale } = router;

    const t = locale === "en" ? en : fr;
    const [currentLanguage, setCurrentLanguage] = useState(locale === "en" ? "English" : "Français");

    const changeLanguage = (selectedLocale: string) => {
        router.push(router.pathname, router.asPath, { locale: selectedLocale });
        setCurrentLanguage(selectedLocale === "en" ? "English" : "Français");
        setIsExpanded(false);
    };

    const FOOTER_ITEMS = [
        {
            heading: "Vaultinum",
            items: [
                { name: t.footer.home, path: "/" },
                { name: t.footer.solutions, path: "/solutions" },
                { name: t.footer.youAre, path: "/you-are" },
                { name: t.footer.aboutUs, path: "/about-us" },
                { name: t.footer.contact, path: "/contact" },
            ],
        },
        {
            heading: "Resources",
            items: [
                { name: t.footer.blog, path: "/blog" },
                { name: t.footer.whitePapers, path: "/" },
            ],
        },
        {
            heading: "Social",
            items: [
                { name: "LinkedIn", path: "/social" },
                { name: "Facebook", path: "/social" },
            ],
        },
        {
            heading: "Legal",
            items: [
                { name: t.footer.termsAndConditions, path: "/terms-and-conditions" },
                { name: t.footer.privacyPolicy, path: "/privacy-policy" },
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
                                        <Link href={link.path} locale={locale}>
                                            <a>{link.name}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                    <div className="brand">
                        <img src="./img/vaultinum-logo.png" alt="Vaultinum logo" />
                        <span>{t.footer.since1976}</span>
                        <div
                            className={classNames("dropdown", "language-switcher", {
                                "dropdown--expanded": isExpanded,
                            })}
                        >
                            <div className="dropdown__header language-switcher__header" onClick={handleExpand}>
                                {currentLanguage}
                                <Chevron orientation="DOWN" />
                            </div>
                            <div className="dropdown__content language-switcher__body">
                                <div onClick={() => changeLanguage("en")}>English</div>
                                <div onClick={() => changeLanguage("fr")}>Français</div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="copyright">
                    &copy; Vaultinum {new Date().getFullYear()} | {t.footer.allRightsReserved}.
                </p>
            </div>
        </footer>
    );
}
