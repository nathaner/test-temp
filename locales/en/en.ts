import general from "./general.json"
import contact from "./contact.json"
import footer from "./footer.json"
import menu from "./menu.json"
import homepage from "./homepage.json"

export const en = {
    general,
    menu,
    footer,
    contact,
    homepage
}

export type Translation = typeof en;
export default en