import recipeAppImage from "../assets/recipe-app-image.png";
import staffAppImage from "../assets/staffapp-image.png";
import vectorMappingToolImage from "../assets/vector-mapping-tool-image.png";

const vectorMappingTool = {
    name: "Vector Mapping Tool",
    date: "August 2024",
    image: vectorMappingToolImage,
    logos: ["mapbxox", "js", "java"],
    description: [
        "Vector Mapping Tool was a project I made for a company as a software developer trainee. The company was Bertin Environics Oy and the project was met with great reviews.",
        "The project was a tool for mapping vector data from osm (OpenStreetMap) files. The project included three different parts: tiling, hosting, and rendering. My job was to figure out how to conversion process would work most efficiently and how the data could be used by the company.",
        "With this project I learned a lot about mapping and how to work with vector data.",
    ]
};

const staffApp = {
    name: "StaffApp Demo",
    date: "July 2024",
    image: staffAppImage,
    logos: ["react", "node", "express", "mysql"],
    description: [
        "StaffApp was made for a client who's vision was a staff management app designed for employers to easily find trusted workers. Our customer was Entail Oy.",
        "I was part of a 5 member team that built a demo application for a client. StaffApp was the biggest project I have worked on. I was in charge of the frontend of the project. One big part of the project for me was to implement notifications for the users. This was a whole new experience for me and I learned a lot from it.",
        "I also learned a lot about working in a team and how to communicate with other team members.",
    ]
};

const recipeApp = {
    name: "Recipe App",
    date: "May 2024",
    image: recipeAppImage,
    logos: ["android", "kotlin", "spring"],
    description: [
        "Recipe App was a project I made for a course in my university.",
        "The project was a recipe app that included a database for recipes and a user interface for the app. The app used a REST API to get the recipe data from a recipe service and had features like: searching for recipes, adding recipes to favorites, and creating a shopping list.",
        "The project was a great learning experience for me and I learned a lot about how to work with REST API's and how to create a user interface for an app on Android.",
    ]
};

export default [vectorMappingTool, staffApp, recipeApp];