import { useState } from "react";
import "../styles/top-bar.css";
import Menu from "./Menu";

export default function TopBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="top-bar">
            <svg className="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path id="left-t" d="M94 31V161.53V170L76 161.53V65.8746L42 83.81V72L94 31Z" />
                <path id="right-t" d="M107 31V161.53V170L125 161.53V65.8746L159 83.81V72L107 31Z" />
            </svg>
            <button className="menu-icon" onClick={() => setMenuOpen(true)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
            {menuOpen && <Menu closeMenu={() => setMenuOpen(false)} />}
        </div>
    );
}
