import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            aboutMe: "About Me",
            projects: "Projects",
            workExperience: "Work Experience",
            contactMe: "Contact Me",
            finnish: "finnish",
            english: "english",
            header: "header",
            footer: "footer",
            light: "light",
            dark: "dark",
            toggleTheme: "Toggle Theme",
            toggleLanguage: "Suomeksi",
            ictTechnitian: "ICT technitian",
            informationSystems: "Business Information Systems",
            student: "student",
            year: "year",
            jobTitle: "Software Developer",
            aboutMeText:
                "I'm a Business Information Systems student at TAMK who is eager and fast to learn new things. "
                + "My previous qualification are ICT technician and Matriculation exam. "
                + "Here I have gathered some of my skills and projects that I have done.",
            aboutMeImage: "Guy fixing an error on a computer",
            january: "January",
            may: "May",
            december: "December",
            link: "Check it out",
            techUsed: "Technologies used",
            description: "Description",
        },
    },
    fi: {
        translation: {
            aboutMe: "Minusta",
            projects: "Projektit",
            workExperience: "Työkokemus",
            contactMe: "Yhteystiedot",
            finnish: "suomi",
            english: "englanti",
            header: "ylätunniste",
            footer: "alatunniste",
            light: "vaalea",
            dark: "tumma",
            toggleTheme: "Vaihda teemaa",
            toggleLanguage: "In English",
            ictTechnitian: "ICT asentaja",
            informationSystems: "Tietojenkäsittelyn",
            student: "opiskelija",
            year: "vuoden",
            jobTitle: "Ohjelmistokehittäjä",
            aboutMeText:
                "Olen tietojenkäsittelyn opiskelija TAMK:ssa, joka on innokas ja nopea oppimaan uutta. "
                + "Olen suorittanut ICT-asentajan tutkinnon ja kirjoittanut ylioppilaaksi. "
                + "Tänne olen kerännyt hieman omaa osaamistani ja projekteja joita olen koulun ohella tehnyt.",
            aboutMeImage: "Henkilö korjaa virheen tietokoneella",
            january: "Tammikuu",
            may: "Toukokuu",
            december: "Joulukuu",
            link: "Tsekkaa projekti",
            techUsed: "Käytetyt tekniikat",
            description: "Kuvaus",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "fi",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
