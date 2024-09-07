import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import "../styles/footer.css";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <p>© 2024 Teemu Tontti. {t("copyright")}</p>
            <LanguageSelector />
            <div className="background" />
        </div>
    );
}