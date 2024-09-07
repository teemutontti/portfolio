import MenuLinks from "../components/MenuLinks";
import Socials from "../components/Socials";
import { MenuType } from "../util/types";
import Icon from "../components/Icon";
import "../styles/menu.css";
import LanguageSelector from "../components/LanguageSelector";

export default function Menu({ open, closeMenu }: MenuType) {
    return (
        <div className={open ? "menu open" : "menu"}>
            <div className="menu-background" />
            <div className="menu-content">
                <button onClick={closeMenu} className="close">
                    <Icon name="close" width="2.5rem" />
                </button>
                <MenuLinks />
                <div className="bottom-section">
                    <LanguageSelector inMenu={true} />
                    <Socials inMenu={true} />
                </div>
            </div>
        </div>
    );
}