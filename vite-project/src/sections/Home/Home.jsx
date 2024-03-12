import { useTranslation } from "react-i18next";
import "./Home.css";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="home">
            <img src="./src/assets/animation.gif" alt={t("aboutMeImage")} className="home-image" />
            <div className="home-text">
                <h1>Teemu Tontti</h1>
                <h2>{t("ictTechnitian")}</h2>
                <p>{t("aboutMeText")}</p>
            </div>
        </div>
    );
}
