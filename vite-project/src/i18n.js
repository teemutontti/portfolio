import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            home: "home",
            projects: "projects",
            workExperience: "work experience",
            contactMe: "contact me",
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
                "I'm a Business Information Systems student at TAMK who is eager and fast to learn new things. Here I have gathered some of my skills and projects that I have done.",
            aboutMeImage: "Guy fixing an error on a computer",
        },
    },
    fi: {
        translation: {
            home: "koti",
            projects: "projektit",
            workExperience: "työkokemus",
            contactMe: "yhteystiedot",
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
                "Olen tietojenkäsittelyn opiskelija TAMK:ssa, joka on innokas ja nopea oppimaan uutta. Tänne olen kerännyt hieman omaa osaamistani ja projekteja joita olen koulun ohella tehnyt.",
            aboutMeImage: "Henkilö korjaa virheen tietokoneella",
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
