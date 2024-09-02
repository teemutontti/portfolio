import { useEffect, useState } from "react";
import "../styles/top-bar.css";
import Menu from "./Menu";
import useWindowSize from "../util/useWindowSize";

export default function TopBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { width } = useWindowSize();

    useEffect(() => {
        if (width >= 950) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }

        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [width]);

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={"top-bar"}>
            {/*
            <svg className="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path id="left-t" d="M94 31V161.53V170L76 161.53V65.8746L42 83.81V72L94 31Z" />
                <path id="right-t" d="M107 31V161.53V170L125 161.53V65.8746L159 83.81V72L107 31Z" />
            </svg>
            */}
            <button className="back-to-top-button" onClick={handleLogoClick} aria-label="Back to top">
                <svg className={scrolled ? "logo down" : "logo" } viewBox="0 0 179 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="left-t">
                        <path id="left-upper" d="M8 0H74L71 4L38 17L0 10L8 0Z" fill="white" />
                        <path id="left-lower" d="M65 130L83 139V0L80 4L65 35V130Z" fill="white" />
                    </g>
                    <g id="right-t">
                        <path id="right-upper" d="M171 0H105L108 4L141 17L179 10L171 0Z" fill="white" />
                        <path id="right-lower" d="M114 130L96 139V0L99 4L114 35V130Z" fill="white" />
                    </g>
                </svg>
            </button>
            <button className="menu-icon" onClick={() => setMenuOpen(true)} aria-label="Menu">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
            <Menu open={menuOpen} closeMenu={() => setMenuOpen(false)} />
        </div>
    );
}
