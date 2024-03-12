import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("projects")}</h2>
        </>
    );
}
