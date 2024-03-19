import { useTranslation } from "react-i18next";

export default function WorkExperience() {
    const { t } = useTranslation();

    return (
        <div id="work-experience">
            <h2>{t("workExperience")}</h2>
        </div>
    );
}
