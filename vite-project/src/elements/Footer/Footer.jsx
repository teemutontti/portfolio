import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <h1>{t("footer")}</h1>
        </div>
    );
}
