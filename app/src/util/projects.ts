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
import pintrushImage1 from "../assets/project-images/pintrush-1.webp";
import pintrushImage2 from "../assets/project-images/pintrush-2.webp";
import pintrushImage3 from "../assets/project-images/pintrush-3.webp";
import pintrushImage4 from "../assets/project-images/pintrush-4.webp";
import hairsalonImage1 from "../assets/project-images/hairsalon-1.webp";
import hairsalonImage2 from "../assets/project-images/hairsalon-2.webp";
import hairsalonImage3 from "../assets/project-images/hairsalon-3.webp";
import { ProjectType } from "./types";

const vectorMappingTool: ProjectType = {
    name: "Vector Mapping Tool",
    date: new Date("2024-07-01"),
    thumbnail: vectorImage2,
    images: [vectorImage2, vectorImage1],
    logos: ["java", "mapbox", "js-web"],
    description: {
        en: [
            "Vector Mapping Tool was a project I made for a company as a software developer trainee. The company was Bertin Environics Oy and the project was met with great reviews.",
            "The project was a tool for mapping vector data from osm (OpenStreetMap) files. The project included three different parts: tiling, hosting, and rendering. My job was to figure out how to conversion process would work most efficiently and how the data could be in the devices.",
            "With this project I learned a lot about mapping and how to work with vector data.",
        ],
        fi: [
            "Vector Mapping Tool oli projekti jonka tein Bertin Environics Oy:lle ohjelmistokehittäjä harjoittelijana.",
            "Projekti oli työkalu osm (OpenStreetMap) karttojen muuttamiseen vektoridatamuotoon. Projekti sisälsi kolme eri osaa: tiilien generointi, hostaus ja renderöinti. Minun tehtäväni oli selvittää kuinka konversioprosessi toimisi tehokkaimmin ja kuinka dataa voitaisiin käyttää laitteissa.",
            "Tämän projektin myötä opin paljon karttatekniikoista ja kuinka vektoridataa käsitellään. Projekti sai myös hyvää palautetta ja auttoi yritystä tuotteen jatkokehityksessä.",
        ]
    },
    rank: 2,
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
            "Opin myös kuinka kommunikoida ja työskennellä tiimissä ohjelmistoalalla.",
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
    secondaryLink: "https://github.com/teemutontti/recipe-app",
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
    rank: 3,
};

const pintRush: ProjectType = {
    name: "Pint Rush",
    date: new Date("2023-05-01"),
    thumbnail: pintrushImage1,
    images: [pintrushImage1, pintrushImage2, pintrushImage3, pintrushImage4],
    logos: ["unity", "c-sharp"],
    description: {
        en: [
            "Pint Rush is a mobile game project I made with a team of 4 people as a part of a course in my university. The game was made for Narvan kyläpanimo which is a local brewery in Narva, Finland.",
            "The game is a 2D game where the player has to serve oncoming customers the right drinks. The game's difficulty increases as the player progresses as the speed of the orders increases and customers patience decreases.",
            "The game was made with Unity and C# and it was a great learning experience for me on game development and a first crasp on how to work inside an agile team.",
            "The game can be downloaded only for Android devices from Google Play Store.",
        ],
        fi: [
            "Pint Rush on mobiilipeli, jonka tein osana neljän hengen tiimiä koulukurssin aikana asiakkaalle, Narvan kyläpanimolle.",
            "Pint Rush on 2D-peli, jossa pelaaja tarjoilee oikeita juomia koko ajan suurenevalle asiakasmäärälle. Pelin vaikeus kasvaa pelin edetessä, sillä tilausten nopeus kasvaa ja asiakkaiden kärsivällisyys vähenee.",
            "Projekti tehtiin Unityllä ja C#:lla. Tämä oli minulle hyvä oppimiskokemus pelinkehityksestä ja ensimmäinen kosketus ketterään tiimityöskentelyyn.",
            "Pelin voi ladata Android-laitteille Google Play Storesta.",
        ],
    },
    mainLink: "https://play.google.com/store/apps/details?id=com.SecretDamStudios.PintRush&pcampaignid=web_share",
    secondaryLink: "https://github.com/teemutontti/PintRush",
    rank: 5,
};

const hairsalon: ProjectType = {
    name: "Hair Salon Website",
    date: new Date("2023-10-01"),
    thumbnail: hairsalonImage1,
    images: [hairsalonImage1, hairsalonImage2, hairsalonImage3],
    logos: ["html", "css", "js-web"],
    description: {
        en: [
            "Hair Salon website was a project I made for a fictional hair salon. The website was made for a course in my university.",
            "The website was made with HTML, CSS and JavaScript and it included information about the salon, the services they offer, a contact form and booking feature. **Currently the booking feature is not working after the database server was shut down.**",
            "This project was a great challenge for me to try out different designs and layouts. Although this was a simple project for a fictional customer, it greatly shows my skills in web development.",
        ],
        fi: [
            "Hair Salon nettisivu oli tehty kuvitteelliselle parturi-kampaamolle osana koulukurssia.",
            "Tein sivuston HTML:llä, CSS:llä ja JavaScriptillä. Sivusto sisälsi tietoa parturi-kampaamosta, palveluistaan, yhteydenottolomakkeen ja ajanvarausominaisuuden. **Tällä hetkellä ajanvarausominaisuus ei toimi, koska tietokantapalvelin on otettu pois käytöstä.**",
            "Tämä projekti oli hyvä haaste kokeilla erilaista nettisivutyyliä. Vaikka tämä oli yksinkertainen projekti kuvitteelliselle asiakkaalle, uskon että se tuo hyvin esiin web-kehitysosaamistani.",
        ],
    },
    mainLink: "https://homepages.tuni.fi/teemu.tontti/hairsalon",
    secondaryLink: "https://github.com/teemutontti/hair-salon-website",
    rank: 6,
};

//homepages.tuni.fi/teemu.tontti/hairsalon

export default [staffApp, vectorMappingTool, recipeApp, modbusConverter, pintRush, hairsalon];