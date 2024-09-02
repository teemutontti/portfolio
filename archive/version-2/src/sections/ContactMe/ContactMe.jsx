import { useTranslation } from "react-i18next";

export default function ContactMe() {
    const { t } = useTranslation();

    return (
        <div id="contact-me">
            <h2>{t("contactMe")}</h2>
        </div>
    );
}
