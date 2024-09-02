import "../styles/menu-links.css";
import useWindowSize from "../util/useWindowSize";

export default function MenuLinks() {
    const { width } = useWindowSize();

    const handleContactClick = () => {
        const socials = document.getElementById("socials-main");
        socials?.classList.toggle("visible");
        setTimeout(() => {
            socials?.classList.toggle("visible");
        }, 3000);
        console.log(socials);
    }

    return (
        <ul className="menu-links">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>{width >= 950
                ? <a href="#work-experience">Work</a>
                : <a href="#work-experience">Work Experience</a>
            }</li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact" onClick={handleContactClick}>Contact</a>
            </li>
        </ul>
    );
}