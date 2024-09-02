import MenuLinks from "../components/MenuLinks";
import Socials from "../components/Socials";
import "../styles/menu.css";
import { MenuType } from "../util/types";

export default function Menu({ open, closeMenu }: MenuType) {
    return (
        <div className={open ? "menu open" : "menu"}>
            <div className="menu-background"/>
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