import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import classNames from "classnames";
import Chevron from "../../components/common/Chevron";
import getLocale from '../../services/getLocale';
import { ABOUT_US_PAGE, BLOG_PAGE, CONTACT_PAGE, HOME_PAGE, PRIVACY_POLICY_PAGE, SOCIAL_PAGE, SOLUTIONS_PAGE, TERMS_AND_CONDITIONS_PAGE, WHITE_PAPERS_PAGE, YOU_ARE_PAGE } from '../../services/routingService';

export default function Footer() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded((isExpanded) => !isExpanded);
    };

    const router = useRouter();
    const { locale } = router;

    const t = getLocale(locale);

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
                { name: t.footer.home, path: HOME_PAGE },
                { name: t.footer.solutions, path: SOLUTIONS_PAGE },
                { name: t.footer.youAre, path: YOU_ARE_PAGE },
                { name: t.footer.aboutUs, path: ABOUT_US_PAGE },
                { name: t.footer.contact, path: CONTACT_PAGE },
            ],
        },
        {
            heading: "Resources",
            items: [
                { name: t.footer.blog, path: BLOG_PAGE },
                { name: t.footer.whitePapers, path: WHITE_PAPERS_PAGE },
            ],
        },
        {
            heading: "Social",
            items: [
                { name: "LinkedIn", path: SOCIAL_PAGE },
                { name: "Facebook", path: SOCIAL_PAGE },
            ],
        },
        {
            heading: "Legal",
            items: [
                { name: t.footer.termsAndConditions, path: TERMS_AND_CONDITIONS_PAGE },
                { name: t.footer.privacyPolicy, path: PRIVACY_POLICY_PAGE },
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
