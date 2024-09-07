import { useTranslation } from "react-i18next";
import "../styles/introduction.css";
import useWindowSize from "../util/useWindowSize";

export default function Introduction() {
    const { width } = useWindowSize();
    const { t } = useTranslation();

    const handleContactClick = () => {
        const socials = document.getElementById("socials-main");
        socials?.classList.toggle("visible");
        setTimeout(() => {
            socials?.classList.toggle("visible");
        }, 3000);
    };

    return (
        <section className="introduction" id="home">
            <div className="content">
                {width >= 750 &&
                    <div className="profile-container">
                        <div className="profile-image"/>
                        <div className="profile-background" />
                    </div>
                }
                <div className="text">
                    <div className="heading">
                        <p>{t("introduction.start")}</p>
                        <h1>Teemu Tontti</h1>
                    </div>
                    <div className="sub-heading">
                        <p>{t("introduction.text")}<br/><a href="#about" className="know-me-link">{t("introduction.about")}</a></p>
                        <a href="#contact" className="contact" onClick={handleContactClick}>
                            <button className="contact-button">{t("introduction.contact")}</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}