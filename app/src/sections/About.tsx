import { useTranslation } from "react-i18next";
import Socials from "../components/Socials";
import Section from "../features/Section";
import "../styles/about.css";

export default function About() {
    const { t } = useTranslation();

    return (
        <Section name="about" title={t("about.title")}>
            <div className="text-field">
                {t("about.text").split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="contact" id="contact">
                <div className="text">
                    {t("contact").split("\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <Socials />
            </div>
        </Section>
    );
}
