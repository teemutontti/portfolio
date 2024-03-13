import { useTranslation } from "react-i18next";
import "./Home.css";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div id="about-me">
            <img src="./src/assets/animation.gif" alt={t("aboutMeImage")} className="home-image" />
            <div className="home-text">
                <h2>{t("aboutMe")}</h2>
                <p>{t("aboutMeText")}</p>
            </div>
        </div>
    );
}
