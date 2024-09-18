import { useTranslation } from "react-i18next";
import "../styles/language-selector.css";

export default function LanguageSelector({ inMenu = false }: { inMenu?: boolean }) {
    const { i18n } = useTranslation();

    return (
        <div className={inMenu ? "language-buttons menu" : "language-buttons"}>
            {i18n.language === "fi-FI" ? (
                <button onClick={() => i18n.changeLanguage("en-EN")}>In English</button>
            ) : (
                <button onClick={() => i18n.changeLanguage("fi-FI")}>Suomeksi</button>
            )}
        </div>
    );
}