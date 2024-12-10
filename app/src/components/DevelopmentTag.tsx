import { useTranslation } from "react-i18next";
import "../styles/development-tag.css";

export default function DevelopmentTag() {
    const { t } = useTranslation();

    return (
        <div className="development-tag">
            <span>{t("projects.inDevelopment")}</span>
        </div>
    );
}