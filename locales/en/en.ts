import general from "./general.json"
import contact from "./contact.json"
import footer from "./footer.json"
import navbar from "./navbar.json"
import homepage from "./homepage.json"

export const en = {
    general,
    navbar,
    footer,
    contact,
    homepage
}

export type Translation = typeof en;
export default en