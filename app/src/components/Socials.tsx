import "../styles/menu-socials.css";
import linkedinLogo from "../assets/logos/linkedin-app-white-icon.webp";
import githubLogo from "../assets/logos/github-mark-white.png";
import { SocialsType } from "../util/types";

export default function Socials({ inMenu = false }: SocialsType) {
    const sendEmail = () => {
        const subject = encodeURIComponent("Contact Request");
        const body = encodeURIComponent("Hello,\n\nI would like to get in touch with you.");
        const mailto = `mailto:teemu.tontti.tt@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailto;
    }

    return (
        <ul className={inMenu ? `socials menu` : "socials"} id={inMenu ? "socials-menu" : "socials-main"}>
            <li>
                <a href="https://www.linkedin.com/in/tonttiteemu" target="_blank">
                    <img src={linkedinLogo} alt="Linked-In logo" />
                    {!inMenu && <p>Linked in</p>}
                </a>
            </li>
            <li>
                <a href="https://github.com/teemutontti" target="_blank">
                    <img src={githubLogo} alt="GitHub logo"/>
                    {!inMenu && <p>GitHub</p>}
                </a>
            </li>
            <li>
                <a onClick={sendEmail}>
                    <span className="material-symbols-outlined">mail</span>
                    {!inMenu && <p>Email</p>}
                </a>
            </li>
        </ul>
    );
}