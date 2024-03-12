import { useTranslation } from "react-i18next";

export default function ContactMe() {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("contactMe")}</h2>
        </>
    );
}
