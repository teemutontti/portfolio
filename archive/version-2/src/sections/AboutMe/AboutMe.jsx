import { useTranslation } from "react-i18next";
import "./AboutMe.css";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div id="about-me">
            <div className="about-text">
                <h2>{t("aboutMe")}</h2>
                <p>{t("aboutMeText")}</p>
            </div>
        </div>
    );
}
