import "../styles/introduction.css";
import { useTranslation } from "react-i18next";
import { BaseSyntheticEvent, useState } from "react";

export default function Introduction() {
    const { t } = useTranslation();
    const [count, setCount] = useState<number>(0);

    const handleContactClick = () => {
        const socials = document.getElementById("socials-main");
        socials?.classList.toggle("visible");
        setTimeout(() => {
            socials?.classList.toggle("visible");
        }, 3000);
    };

    const appendCount = (e:  BaseSyntheticEvent) => {
        setCount(count + 1);
        const year = new Date().getFullYear();

        if (count === year - 2000) {
            e.target.classList.add("active");
            setTimeout(() => {
                e.target.classList.remove("active");
                setCount(0);
            }, 1500);
        }
    }


    return (
        <section className="introduction" id="home">
            <div className="profile-foreground" onClick={(e) => appendCount(e)} />
            <div className="content">
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