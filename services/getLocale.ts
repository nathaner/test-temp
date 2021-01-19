import en from "../locales/en/en";
import fr from "../locales/fr/fr";

export default function getLocale(locale) {
    switch (locale) {
        case "fr":
            return fr;
        default:
            return en;
    }
}