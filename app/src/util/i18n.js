import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "fi-FI",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            "en-EN": {
                translation: {
                    about: {
                        title: "About",
                        text:
                            "I’m a third year programming student with a strong passion for coding and problem solving.\n" +
                            "During my studies, I have worked on several projects that greatly showcases my skills in software development and web design. Here I have gathered some of those projects.\n" +
                            "Each project has been a valuable learning experience only fueling my passion for this industry.\n" +
                            "I’m eager to continue learning new technologies in both front- and backend development.\n" +
                            "Thank you for visiting, and I hope you find my work as exciting as I do!",
                    },
                    contact:
                        "If you'd like to connect or have any questions about my work, feel free to reach out!\n" +
                        "I'm always open to discuss new opportunities, collaborations, or simply sharing ideas.\n" +
                        "Looking forward to hearing from you!",
                    email: "Email",
                    copyright: "All rights reserved.",
                    introduction: {
                        start: "Hello, my name is",
                        text: "Aspiring software developer student ready for new challenges.",
                        about: "Get to know me!",
                        contact: "Contact Me",
                    },
                    skills: {
                        hint: "Hover over the tags to see where I have used each skill.",
                        frontend: "Frontend",
                        backend: "Backend",
                        api: "API",
                        problem: "Problem Solving",
                        initiative: "Self-Initiative",
                        team: "Teamwork",
                        critical: "Critical Thinking",
                        industrial: "Industrial Protocols",
                        game: "Game Development",
                        database: "Databases",
                        internship: "Internship Experience",
                    },
                    projects: {
                        title: "Recent Projects",
                        sort: "Sort by:",
                        rank: "Rank",
                        date: "Date",
                        order: "Order:",
                        viewAll: "View All",
                        description: "Description",
                        technologies: "Technologies Used",
                    },
                    menu: {
                        home: "Home",
                        skills: "Skills",
                        projects: "Projects",
                        workShort: "Work",
                        workLong: "Work Experience",
                        about: "About",
                        contact: "Contact",
                    },
                    work: {
                        title: "Work Experience",
                    },
                    topbar: {
                        back: "To Home",
                    },
                    notFound: {
                        title: "Page Not Found",
                        text: "This is not the page you are looking for. Please check the address and try again or return to the home page.",
                        link: "Back to Home",
                    },
                },
            },
            "fi-FI": {
                translation: {
                    about: {
                        title: "Minusta",
                        text:
                            "Olen kolmannen vuoden tietojenkäsittelyn opiskelija, jolla on aito intohimo koodaukseen ja ongelmanratkaisuun.\n" +
                            "Opintojeni aikana olen päässyt työstämään monenlaisia projekteja, joissa olen päässyt tuomaan esiin taitojani ohjelmistokehityksessä ja web-suunnittelussa. Tänne olen koonnut osan noista projekteista.\n" +
                            "Jokainen projekti on ollut arvokas oppimiskokemus, joka on vain vahvistanut innostustani tätä alaa kohtaan.\n" +
                            "Olen aina innokas oppimaan uutta sekä front- että backend-kehityksessä.\n" +
                            "Kiitos mielenkiinnostasi. Toivon, että löydät työni yhtä mielenkiintoisiksi kuin minä itse!",
                    },
                    contact:
                        "Ota rohkeasti yhteyttä, jos sinulta löytyy lisäkysymyksiä!\n" +
                        "Olen aina avoin keskustelemaan töistäni, uusista mahdollisuuksista ja yhteistöistä.\n" +
                        "Odotan innolla yhteydenottoasi!",
                    email: "Sähköposti",
                    copyright: "Kaikki oikeudet pidätetään.",
                    introduction: {
                        start: "Hei, minun nimi on",
                        text: "Tuleva ohjelmistokehittäjä, valmiina uusiin haasteisiin.",
                        about: "Tutustu minuun!",
                        contact: "Ota yhteyttä",
                    },
                    skills: {
                        hint: "Viemällä hiiren taitojen päälle tai klikkaamalla näet, missä olen käyttänyt kyseistä taittoa.",
                        frontend: "Frontend",
                        backend: "Backend",
                        api: "API",
                        problem: "Ongelmanratkaisu",
                        initiative: "Itseohjautuvuus",
                        team: "Tiimityö",
                        critical: "Kriittinen ajattelu",
                        industrial: "Teollisuusprotokollat",
                        game: "Pelikehitys",
                        database: "Tietokannat",
                        internship: "Harjoittelukokemus",
                    },
                    projects: {
                        title: "Viimeisimmät Projektit",
                        sort: "Järjestä:",
                        rank: "Tärkeys",
                        date: "Päiväys",
                        order: "Järjestys:",
                        viewAll: "Näytä kaikki",
                        description: "Kuvaus",
                        technologies: "Käytetyt teknologiat",
                    },
                    menu: {
                        home: "Aloitus",
                        skills: "Taidot",
                        projects: "Projektit",
                        workShort: "Työkokemus",
                        workLong: "Työkokemus",
                        about: "Minusta",
                        contact: "Yhteystiedot",
                    },
                    work: {
                        title: "Työkokemus",
                    },
                    topbar: {
                        back: "Aloitussivulle",
                    },
                    notFound: {
                        title: "Sivua ei löytynyt",
                        text: "Tämä ei ole sivu, jota etsit. Tarkista osoite ja yritä uudelleen tai palaa aloitussivulle.",
                        link: "Aloitussivulle",
                    },
                },
            },
        },
    });

export default i18n;