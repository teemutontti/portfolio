import { useTranslation } from "react-i18next";
import "../styles/menu-links.css";

export default function MenuLinks() {
    const { t } = useTranslation();

    const handleContactClick = () => {
        const socials = document.getElementById("socials-main");
        socials?.classList.toggle("visible");
        setTimeout(() => {
            socials?.classList.toggle("visible");
        }, 3000);
    }

    return (
        <ul className="menu-links">
            <li>
                <a href="#home">{t("menu.home")}</a>
            </li>
            <li>
                <a href="#skills">{t("menu.skills")}</a>
            </li>
            <li>
                <a href="#projects">{t("menu.projects")}</a>
            </li>
            <li>
                <a href="#work-experience">
                    {window.innerWidth >= 950 ? t("menu.workShort") : t("menu.workLong")}
                </a>
            </li>
            <li>
                <a href="#about">{t("menu.about")}</a>
            </li>
            <li>
                <a href="#contact" onClick={handleContactClick}>
                    {t("menu.contact")}
                </a>
            </li>
        </ul>
    );
}