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
import pearlImage1 from "../assets/project-images/pearl-tn.webp";
import pearlImage2 from "../assets/project-images/pearl-1.webp";
import pearlImage3 from "../assets/project-images/pearl-2.webp";
import pearlImage4 from "../assets/project-images/pearl-3.webp";
import pearlImage5 from "../assets/project-images/pearl-4.webp";
import { ProjectType } from "./types";

export const projects: ProjectType[] = [
    {
        name: "Vector Mapping Tool",
        date: new Date("2024-07-01"),
        thumbnail: vectorImage2,
        images: [vectorImage2, vectorImage1],
        logos: ["java", "mapbox", "js-web"],
        description: {
            en: [
                "Vector Mapping Tool was a project I made for a company as a software developer trainee. The company was Bertin Environics Oy and the project was met with great reviews.",
                "The project was a tool for mapping vector data from OSM-files (OpenStreetMap). The project included three different parts: tiling, hosting, and rendering. My job was to figure out how to conversion process would work most efficiently and how the data could be in the devices.",
                "With this project I learned a lot about mapping and how to work with vector data.",
            ],
            fi: [
                "Vector Mapping Tool oli projekti, jonka tein Bertin Environics Oy:lle ohjelmistokehityksen harjoittelijana.",
                "Projekti oli työkalu OSM-karttojen (OpenStreetMap) muuttamiseen vektoridatamuotoon. Projekti sisälsi kolme eri osaa: tiilien generointi, hostaus ja renderöinti. Tehtäväni oli selvittää, kuinka konversioprosessi toimisi tehokkaimmin ja kuinka dataa voitaisiin käyttää laitteissa.",
                "Tämän projektin myötä opin paljon karttatekniikoista ja kuinka vektoridataa käsitellään. Projekti sai myös hyvää palautetta ja auttoi yritystä tuotteen jatkokehityksessä.",
            ],
        },
        rank: 4,
    },
    {
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
                "Unfortunately the project and it's code is not available for public use, but I can show the project in person if needed.",
            ],
            fi: [
                "StaffApp tehtiin asiakkaallemme, Entail Oy:lle, jonka visiona oli sovellus, jolla sote-alan työnantajat voivat löytää helposti ja nopeasti luotettavaa sijaistyövoimaa.",
                "Olin osa viisihenkistä tiimiä, joka rakensi tämän demosovelluksen alusta loppuun. Tämä tekikin tästä suurimman projektin, jossa olen ollut mukana. **Olin vastuussa projektin frontendistä** ja sen pohjan rakentamisesta. Myöhemmin muu tiimi siirtyi myös front-puolen tehtäviin.",
                "Yksi merkittävin tehtäväni oli toteuttaa **sovellukseen ilmoitukset**. Tämä oli minulle täysin uusi ja opettavainen kokemus. Opin myös, kuinka kommunikoida ja työskennellä tiimissä ohjelmistoalalla.",
                "Valitettavasti projekti ja sen koodi eivät ole julkisesti saatavilla, mutta voin tarvittaessa esitellä projektin henkilökohtaisesti.",
            ],
        },
        responsibilities: {
            en: [
                "Frontend implementation with React and JavaScript",
                "Notification implementation",
                "PWA functionality",
                "Mobile debugging documentation",
            ],
            fi: [
                "Frontend toteutus Reactilla ja JavaScriptillä",
                "Ilmoitusominaisuuden toteutus",
                "PWA-toiminnallisuus",
                "Mobiilidebuggausdokumentaatio",
            ],
        },
        rank: 1,
    },
    {
        name: "Recipe App",
        date: new Date("2024-05-01"),
        thumbnail: recipeImage1,
        images: [recipeImage1, recipeImage2, recipeImage3, recipeImage4],
        logos: ["android", "kotlin", "spring"],
        description: {
            en: [
                "Recipe App was a project I made for a course in my university. The project was a recipe app that included a database for recipes and a visually appealing user interface. The app used a REST API to get the recipe data from the database and had features like: searching for recipes, adding recipes to favorites, creating your own recipes and recipe recommendations once per day. After the submission I added a feature for managing a shopping list.",
                "The project was a great learning experience for me and I learned a lot about how to work with REST API's and how to create a user interface for an app on Android.",
            ],
            fi: [
                "Recipe App oli projekti, jonka tein koulukurssin lopputyönä. Projekti oli reseptisovellus, joka sisälsi tietokannan resepteille ja visuaalisesti miellyttävän käyttöliittymän. Sovellus käytti REST API:a hakeakseen reseptidataa tietokannasta ja ominaisuuksiin kuului: reseptien hakeminen, reseptien lisääminen suosikkeihin, reseptien luonti ja päivittäiset ehdotukset. Jälkeen päin lisäsin vielä ostoslistaominaisuuden.",
                "Projekti oli minulle hyvä oppimiskokemus ja opin paljon siitä, kuinka REST API:lla työskennellään ja kuinka käyttöliittymä luodaan Android-sovellukselle.",
            ],
        },
        secondaryLink: "https://github.com/teemutontti/recipe-app",
        inDevelopment: true,
        rank: 3,
    },
    {
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
                "Modbus Converter oli projekti, jonka tein Bertin Environicsille. Sovelluksen tehtävä oli muuntaa laitteelta Modbus-yhteyden kautta tuleva binääri- ja heksadata luettavaan muotoon.",
                "Sovellus tehtiin yrityksen omaan käyttöön auttamaan laitteiden testaamisessa ja debuggaamisessa. Tämä helpotti testausprosessia huomattavasti ja teki siitä nopeampaa. **Muunninta on käytetty myös laitteiden esittelyssä asiakkaille.**",
            ],
        },
        rank: 5,
    },
    {
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
                "Pint Rush on 2D-peli, jossa pelaajan täytyy tarjoilla juomia koko ajan suurenevalle asiakasmäärälle. Pelin vaikeus kasvaa pelin edetessä, sillä tilausten nopeus kasvaa ja asiakkaiden kärsivällisyys vähenee.",
                "Projekti tehtiin Unityllä ja C#:lla. Tämä oli minulle hyvä oppimiskokemus pelinkehityksestä ja ensimmäinen kosketus ketterään tiimityöskentelyyn.",
                "Pelin voi ladata Android-laitteille Google Play Storesta.",
            ],
        },
        responsibilities: {
            en: ["Game logic implementation with Unity and C#"],
            fi: ["Pelin logiikan toteutus Unityllä ja C#:lla"],
        },
        mainLink: "https://play.google.com/store/apps/details?id=com.SecretDamStudios.PintRush&pcampaignid=web_share",
        secondaryLink: "https://github.com/teemutontti/PintRush",
        rank: 6,
    },
    {
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
                "Hair Salon nettisivu on kuvitteellisen parturi-kampaamon kotisivu, joka oli tehty koulukurssin lopputyönä.",
                "Tein sivuston HTML:llä, CSS:llä ja JavaScriptillä. Sivusto sisälsi tietoa parturi-kampaamosta, palveluistaan, yhteydenottolomakkeen ja ajanvarausominaisuuden. **Tällä hetkellä ajanvarausominaisuus ei toimi, koska tietokantapalvelin on otettu pois käytöstä.**",
                "Tämä projekti oli hyvä haaste kokeilla erilaista nettisivutyyliä. Vaikka tämä oli yksinkertainen projekti kuvitteelliselle asiakkaalle uskon, että se tuo hyvin esiin web-kehitysosaamistani.",
            ],
        },
        mainLink: "https://homepages.tuni.fi/teemu.tontti/hairsalon",
        secondaryLink: "https://github.com/teemutontti/hair-salon-website",
        rank: 7,
    },
    {
        name: "Pearl Image Comparer",
        date: new Date("2024-12-13"),
        thumbnail: pearlImage1,
        images: [pearlImage1, pearlImage2, pearlImage4, pearlImage3, pearlImage5],
        logos: ["react", "ts"],
        description: {
            en: [
                "As part of a development team, I worked on a web application designed to support nature conservation efforts.",
                "The project utilized satellite imagery from the Copernicus program and species data from Laji.fi. The client for the project was Solita.",
                "The primary goal was to provide an intuitive tool for example marking illegal logging activities, river crossings, and monitoring endangered species.",
                "During the project, I deepened my expertise by working with Remix and map technologies, and honed my skills in processing and visualizing complex datasets. Collaboration with the team was key in overcoming challenges such as optimizing data handling and creating a user-friendly interface.",
                "The end product successfully met the client's requirements and is ready to contribute to critical conservation efforts.",
            ],
            fi: [
                "Olin osa kehitystiimiä verkkosovelluksen toteuttamiseen, jonka tarkoitus on tukea luonnonsuojelua.",
                "Projekti hyödynsi Copernicus-ohjelman satelliittikuvia sekä Laji.fi:n lajistotietoja. Projektin asiakkaana toimi Solita.",
                "Sovelluksen päätarkoitus oli tarjota helppokäyttöinen työkalu esimerkiksi laittomien hakkuiden, joen ylitysten ja uhanalaisten lajien havainnointiin.",
                "Projektin aikana syvensin osaamistani erityisesti Remix-kehyksen ja karttateknologioiden parissa, sekä kehitin taitojani monimutkaisen datan käsittelyssä ja visualisoinnissa. Tiimityöskentely oli keskeistä haasteiden, kuten datankäsittelyn optimoinnin ja käyttäjäystävällisen käyttöliittymän suunnittelun, ratkaisemisessa.",
                "Lopputuote vastasi asiakkaan tarpeita ja on valmis käytettäväksi luonnonsuojelun edistämistarpeita varten.",
            ],
        },
        responsibilities: {
            en: [
                "UI and UX design with Figma",
                "Frontend implementation with React and TypeScript",
                "Map functionalities with Leaflet",
            ],
            fi: [
                "UI- ja UX-suunnittelu Figmalla",
                "Frontend toteutus Reactilla ja TypeScriptillä",
                "Karttatoiminnot Leafletillä",
            ],
        },
        mainLink: "https://ec2-13-60-246-10.eu-north-1.compute.amazonaws.com/",
        secondaryLink: "https://github.com/Pearl-image-comparer/Pearl",
        rank: 2,
    },
];

export const workExperiences = [
    {
        en: {
            title: "Bertin Environics Oy",
            date: "Jun 2024 - Jul 2024",
            text: [
                "I worked as a software developer trainee at Bertin Environics Oy. My job was to create a vector mapping tool for the company. The tool's purpose was to convert OSM-files (OpenStreetMap) to vector data and host the data to be used by the manufactured devices.",
                "This was met with great reviews and I learned a lot about map technologies and how to work with vector data. I also learned a lot about how software development works in a company.",
            ],
        },
        fi: {
            title: "Bertin Environics Oy",
            date: "Kes 2024 - Hei 2024",
            text: [
                "Toimin Bertin Environics Oy:ssä ohjelmistokehityksen harjoittelijana kesällä 2024, jolloin tehtäväni oli luoda vektorikarttamuunnostyökalu. Työkalun tarkoitus oli muuntaa OSM-tiedostot (OpenStreetMap) vektoridataksi ja hostata data valmistetuille laitteille.",
                "Tekemäni projekti sai hyvää palautetta ja opin paljon karttateknologioista ja vektoridatan käsittelystä. Sain myös paljon kokemusta siitä, kuinka ohjelmistokehitys toimii yrityksessä.",
            ],
        },
    },
    {
        en: {
            title: "Environics Oy",
            date: "2021 - 2022",
            text: [
                "I worked at Environics Oy as a device assembler for a year after graduating from vocational school. My tasks were to assemble and test devices.",
                "This job was very independent and required a lot of precision and care. I gained a lot of experience about how devices work and how to assemble them.",
                "My good work ethic and precision were noticed because I was given a lot of responsibility in my work.",
            ],
        },
        fi: {
            title: "Environics Oy",
            date: "2021 - 2022",
            text: [
                "Toimin Environics Oy:llä laiteasentajana ammattikoulusta valmistuttuani vuoden ajan. Tehtäviäni olivat laitteiden asennus- ja testaustyöt.",
                "Tämä työ oli hyvin itsenäistä työskentelyä ja vaati paljon tarkkuutta ja huolellisuutta. Sain paljon kokemusta laitteiden toiminnasta ja laitteiden asennuksesta.",
                "Tehtävässä hyvä työmoraalini ja tarkkuuteni huomattiin, sillä sain paljon vastuuta työtehtävissäni."
            ],
        },
    },
    {
        en: {
            title: "Ohjaamo Olkkari",
            date: "Feb 2021 - Aug 2021",
            text: [
                "At Ohjaamo Olkkari I worked as a Communications Assistant. My job was to inform young people about the services and events Ohjaamo offers. I was also responsible for internal communication.",
                "With this job I learned a lot about how to work in a big organization and how to communicate and work with different people. Here I learned how self-initiative can help you to succeed in your job.",
                "I also was responsible for the migration of the website to a new platform. This was the first actual connection to web development I had which started my interest in the web and software development field."
            ],
        },
        fi: {
            title: "Ohjaamo Olkkari",
            date: "Hel 2021 - Elo 2021",
            text: [
                "Toimin Ohjaamo Olkkarin tiedottajana. Tehtäväni oli tiedottaa nuorille Ohjaamon palveluista ja tapahtumista. Vastuullani oli myös Ohjaamon sisäinen viestintä.",
                "Tässä tehtävässä opin paljon siitä, kuinka toimia isossa monialaisessa verkostossa. Näin ensimmäistä kertaa oma-aloitteisuuden tärkeyden.",
                "Vastasin myös nettisivujen siirrosta uudelle alustalle. Tämä herätti kiinnostukseni web- ja ohjelmistokehitykseen."
            ],
        }
    }
];