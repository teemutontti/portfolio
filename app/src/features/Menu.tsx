import MenuLinks from "../components/MenuLinks";
import Socials from "../components/Socials";
import "../styles/Menu.css";
import { MenuType } from "../util/types";

export default function Menu({ closeMenu }: MenuType) {
    return (
        <div className="menu">
            <div className="menu-content">
                <button onClick={closeMenu} className="close">
                    <span className="material-symbols-outlined">close</span>
                </button>
                <MenuLinks />
                <Socials inMenu={true} />
            </div>
        </div>
    );
}