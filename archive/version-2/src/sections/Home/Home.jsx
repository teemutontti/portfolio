import { useTranslation } from "react-i18next";
import "./Home.css";

function countStudentYears(language) {
    const STARTING_YEAR = 2022;
    const GRADUATION = new Date("2025-12-31");
    const date = new Date();

    if (date >= GRADUATION) {
        return "GRADUATED";
    }

    const yearStudied = date.getFullYear() - STARTING_YEAR;
    const currentStudyYear = date.getMonth() >= 7 ? yearStudied + 1 : yearStudied;

    if (language === "en") {
        switch (currentStudyYear) {
            case 1:
                return "1st";
            case 2:
                return "2nd";
            case 3:
                return "3rd";
            default:
                return `${currentStudyYear}th`;
        }
    }
    return `${currentStudyYear}.`;
}

export default function Home() {
    const { t, i18n } = useTranslation();

    return (
        <div id="home">
            <div className="home-text">
                <h1>Teemu Tontti</h1>
                <h2>
                    {countStudentYears(i18n.language) == "GRADUATED"
                        ? `${t("jobTitle")}`
                        : `${t("informationSystems")} ${countStudentYears(i18n.language)} ${t("year")} ${t("student")}`}
                </h2>
            </div>
            <img src="./src/assets/animation.gif" alt={t("aboutMeImage")} className="home-image" />
        </div>
    );
}
