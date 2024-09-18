import { useTranslation } from "react-i18next";
import "../styles/language-selector.css";

export default function LanguageSelector({ inMenu = false }: { inMenu?: boolean }) {
    const { i18n } = useTranslation();

    return (
        <div className={inMenu ? "language-buttons menu" : "language-buttons"}>
            {i18n.language === "fi-FI" ? <a href="/en">In English</a> : <a href="/">Suomeksi</a>}
        </div>
    );
}