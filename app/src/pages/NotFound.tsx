import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import personThinking from "../assets/person.webp";
import "../styles/not-found.css";
import Page from "../features/Page";

export default function NotFound() {
    const location = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        console.log(`404 Not Found: ${location.pathname}`);
    }, [location]);

    return (
        <Page topBar={false} className="not-found">
            <div className="centered">
                <img src={personThinking} alt="Person with question mark" />
                <h1>{t("notFound.title")}</h1>
                <p>{t("notFound.text")}</p>
                <Link to="/" className="back-button">{t("notFound.link")}</Link>
                <div className="attribution">
                    <a href="https://www.flaticon.com/free-icons/question" title="question icons">
                        Question icons created by justicon - Flaticon
                    </a>
                </div>
            </div>
        </Page>
    );
}