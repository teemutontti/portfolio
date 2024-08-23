import linkedIn from "../assets/linkedin-app-white-icon.webp";
import github from "../assets/github-logo.webp";
import "../styles/menu-socials.css";

export default function MenuSocials() {

    const sendEmail = () => {
        const subject = encodeURIComponent("Contact Request");
        const body = encodeURIComponent("Hello,\n\nI would like to get in touch with you.");
        const mailto = `mailto:teemu.tontti.tt@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailto;
    }

    return (
        <ul className="menu-socials">
            <li>
                <a href="https://www.linkedin.com/in/tonttiteemu" target="_blank">
                    <img src={linkedIn} />
                </a>
            </li>
            <li>
                <a href="https://github.com/teemutontti" target="_blank">
                    <img src={github} />
                </a>
            </li>
            <li>
                <button onClick={sendEmail}>
                    <span className="material-symbols-outlined">mail</span>
                </button>
            </li>
        </ul>
    );
}