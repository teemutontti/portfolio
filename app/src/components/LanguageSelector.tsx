import { useTranslation } from "react-i18next";
import "../styles/language-selector.css";
import { useState } from "react";
import LoadingEffect from "./LoadingEffect";

export default function LanguageSelector({ inMenu = false }: { inMenu?: boolean }) {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const [loading, setLoading] = useState(false);

    const changeLanguage = (lang: string) => {
        setLoading(true);
        setLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
        window.location.reload();
    };

    return (
        <div className={inMenu ? "language-buttons menu" : "language-buttons"}>
            {language !== "fi" && (
                <button onClick={() => changeLanguage("fi")}>{loading ? <LoadingEffect size="xs" /> : "Suomeksi"}</button>
            )}
            {language !== "en" && (
                <button onClick={() => changeLanguage("en")}>{loading ? <LoadingEffect size="xs" /> : "In English"}</button>
            )}
        </div>
    );
}