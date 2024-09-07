//import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import LogoDumb from "../components/LogoDumb";
//import PercentageWheel from "../components/PercentageWheel";
import Tag from "../components/Tag";
import Section from "../features/Section";
import "../styles/skills.css"
import useWindowSize from "../util/useWindowSize";

export default function Skills() {
    const { t } = useTranslation();
    const { width } = useWindowSize();

    return (
        <Section name="skills">
            {width >= 550 && <p className="hint-text">{t("skills.hint")}</p>}
            <div className="logo-list-container">
                <LogoDumb />
                <div className="logo-list">
                    {width < 550 && <p className="hint-text">{t("skills.hint")}</p>}
                    <Tag className="frontend">{t("skills.frontend")}</Tag>
                    <Tag className="backend">{t("skills.backend")}</Tag>
                    <Tag className="api">{t("skills.api")}</Tag>
                    <Tag className="problem">{t("skills.problem")}</Tag>
                    <Tag className="initiative">{t("skills.initiative")}</Tag>
                    <Tag className="team">{t("skills.team")}</Tag>
                    <Tag className="critical">{t("skills.critical")}</Tag>
                    <Tag className="industrial">{t("skills.industrial")}</Tag>
                    <Tag className="game">{t("skills.game")}</Tag>
                    <Tag className="database">{t("skills.database")}</Tag>
                    <Tag className="internship">{t("skills.internship")}</Tag>
                </div>
            </div>
        </Section>
    );
}