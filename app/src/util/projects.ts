import recipeImage1 from "../assets/project-images/recipe-tn.webp";
import recipeImage2 from "../assets/project-images/recipe-1.webp";
import recipeImage3 from "../assets/project-images/recipe-2.webp";
import recipeImage4 from "../assets/project-images/recipe-3.webp";
import vectorImage1 from "../assets/project-images/vector-1.webp";
import vectorImage2 from "../assets/project-images/vector-2.webp";
import staffImage1 from "../assets/project-images/staffapp-tn.webp";
import staffImage2 from "../assets/project-images/staffapp-1.webp";
import staffImage3 from "../assets/project-images/staffapp-2.webp";
import staffImage4 from "../assets/project-images/staffapp-3.webp";
import modbusImage1 from "../assets/project-images/modbus-tn.webp";
import { ProjectType } from "./types";

const vectorMappingTool: ProjectType = {
    name: "Vector Mapping Tool",
    date: new Date("2024-07-01"),
    thumbnail: vectorImage1,
    images: [vectorImage1, vectorImage2],
    logos: ["java", "mapbox", "js-web"],
    description: {
        en: [
            "Vector Mapping Tool was a project I made for a company as a software developer trainee. The company was Bertin Environics Oy and the project was met with great reviews.",
            "The project was a tool for mapping vector data from osm (OpenStreetMap) files. The project included three different parts: tiling, hosting, and rendering. My job was to figure out how to conversion process would work most efficiently and how the data could be in the devices.",
            "With this project I learned a lot about mapping and how to work with vector data.",
        ],
        fi: [
            "Vector Mapping Tool oli projekti jonka tein yritykselle ohjelmistokehittäjä harjoittelijana. Yritys oli Bertin Environics Oy, jolta projekti sai hyvää palautetta.",
            "Projekti oli työkalu osm (OpenStreetMap) karttojen muuttamiseen vektoridatamuotoon. Projekti sisälsi kolme eri osaa: tiilien generointi, hostaus ja renderöinti. Minun tehtäväni oli selvittää kuinka konversioprosessi toimisi tehokkaimmin ja kuinka dataa voitaisiin käyttää laitteissa.",
            "Tämän projektin myötä opin paljon karttatekniikoista ja kuinka vektoridataa käsitellään.",
        ]
    },
    rank: 3,
};

const staffApp: ProjectType = {
    name: "StaffApp Demo",
    date: new Date("2024-06-01"),
    thumbnail: staffImage1,
    images: [staffImage1, staffImage2, staffImage3, staffImage4],
    logos: ["react", "node", "express", "mysql"],
    description: {
        en: [
            "StaffApp was made for our client, Entail Oy, who's vision was an app designed for employers to easily find trusted subtitute workers.",
            "In this project I was a part of a 5 member team that built this demo application from start to finish. StaffApp was the biggest project I have worked on. I was in charge of the frontend of the project. One big part of the project for me was to implement notifications for the users. This was a whole new experience for me and I learned a lot from it.",
            "I also learned a lot about communicating and working as a team in software development industry.",
        ],
        fi: [
            "StaffApp tehtiin asiakkaallemme, Entail Oy:lle, jonka visiona oli sovellus, jolla sote-alan työnantajat voivat löytää helposti ja nopeasti luotettavaa sijaistyövoimaa.",
            "Olin osa viisihenkistä tiimiä, joka rakensi tämän demo sovelluksen alusta loppuun. StaffApp oli suurin projekti, jossa olen ollut mukana. Olin vastuussa projektin frontendistä ja yksi merkittävin tehtäväni oli toteuttaa sovellukseen ilmoitukset. Tämä oli minulle täysin uusi kokemus ja opin siitä paljon.",
            "Opin myös paljon kuinka kommunikoida ja työskennellä tiimissä ohjelmistoalalla.",
        ]
    },
    rank: 1,
};

const recipeApp: ProjectType = {
    name: "Recipe App",
    date: new Date("2024-05-01"),
    thumbnail: recipeImage1,
    images: [recipeImage1, recipeImage2, recipeImage3, recipeImage4],
    logos: ["android", "kotlin", "spring"],
    description: {
        en: [
            "Recipe App was a project I made for a course in my university. The project was a recipe app that included a database for recipes and a visually appealing user interface. The app used a REST API to get the recipe data from the database and had features like: searching for recipes, adding recipes to favorites, creating your own recipes and creating a shopping list.",
            "The project was a great learning experience for me and I learned a lot about how to work with REST API's and how to create a user interface for an app on Android.",
        ],
        fi: [
            "Recipe App oli projekti jonka tein koulun kurssia varten. Projekti oli reseptisovellus joka sisälsi tietokannan resepteille ja visuaalisesti miellyttävän käyttöliittymän. Sovellus käytti REST API:a hakeakseen reseptidataa tietokannasta ja ominaisuuksiin kuului: reseptien etsiminen, reseptien lisääminen suosikkeihin, reseptien luonti ja ostoslistan luominen.",
            "Projekti oli minulle hyvä oppimiskokemus ja opin paljon kuinka REST API:lla työskennellään ja kuinka käyttöliittymä luodaan Android-sovellukselle.",
        ]
    },
    rank: 4,
};

const modbusConverter: ProjectType = {
    name: "Modbus Converter",
    date: new Date("2023-12-01"),
    thumbnail: modbusImage1,
    images: [modbusImage1],
    logos: ["modbus", "js", "html", "css"],
    description: {
        en: [
            "Modbus Converter was a project I made for Bertin Environics. The app's job was to convert binary and hex data coming from a device through Modbus connection to a readable form.",
            "The app was made for the company's own use to help with testing and debugging their devices. This made the testing process a lot easier and faster. **The converter has also been used to demonstrate the devices to cutomers.**",
        ],
        fi: [
            "Modbus Converter oli projekti jonka tein Bertin Environicsille. Sovelluksen tehtävä oli muuntaa laitteelta Modbus yhteyden kautta tuleva binääri- ja heksadata luettavaan muotoon.",
            "Sovellus tehtiin yrityksen omaan käyttöön auttamaan laitteiden testaamisessa ja debuggaamisessa. Tämä helpotti testausprosessia huomattavasti ja teki siitä nopeampaa. **Muunninta on käytetty myös laitteiden esittelyssä asiakkaille.**",
        ]
    },
    rank: 2,
};

export default [staffApp, vectorMappingTool, recipeApp, modbusConverter];