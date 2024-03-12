import { useTranslation } from "react-i18next";

export default function WorkExperience() {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("workExperience")}</h2>
        </>
    );
}
