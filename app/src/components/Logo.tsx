import androidLogo from "../assets/logos/android-logo.webp";
import androidFullLogo from "../assets/logos/android-full-logo.webp";
import cssLogo from "../assets/logos/css-logo.webp";
import javaLogo from "../assets/logos/java-logo.webp";
import javaFullLogo from "../assets/logos/java-full-logo.webp";
import javascriptLogo from "../assets/logos/javascript-logo.webp";
import kotlinLogo from "../assets/logos/kotlin-logo.webp";
import kotlinFullLogo from "../assets/logos/kotlin-full-logo.webp";
import mapboxLogo from "../assets/logos/mapbox-logo.webp";
import mapboxFullLogo from "../assets/logos/mapbox-full-logo.webp";
import modbusLogo from "../assets/logos/modbus-logo.webp";
import modbusFullLogo from "../assets/logos/modbus-full-logo.webp";
import mysqlLogo from "../assets/logos/mysql-logo.webp";
import mysqlFullLogo from "../assets/logos/mysql-full-logo.webp";
import nodeLogo from "../assets/logos/node-logo.webp";
import nodeFullLogo from "../assets/logos/node-full-logo.webp";
import pythonLogo from "../assets/logos/python-logo.webp";
import reactLogo from "../assets/logos/react-logo.webp";
import reactFullLogo from "../assets/logos/react-full-logo.webp";
import typescriptLogo from "../assets/logos/typescript-logo.webp";
import htmlLogo from "../assets/logos/html-logo.webp";
import expressLogo from "../assets/logos/express-logo.webp";
import expressFullLogo from "../assets/logos/express-full-logo.webp";
import springLogo from "../assets/logos/spring-logo.webp";
import springFullLogo from "../assets/logos/springboot-full-logo.webp";
import dockerLogo from "../assets/logos/docker-logo.webp";
import gitLogo from "../assets/logos/git-logo.webp";
import githubLogo from "../assets/logos/github-logo.webp";
import javascriptWebLogo from "../assets/logos/javascript-web-logo.webp";
import unityLogo from "../assets/logos/unity-logo.webp";
import unityFullLogo from "../assets/logos/unity-full-logo.webp";
import linkedInLogo from "../assets/logos/linkedin-app-white-icon.webp";
import { LogoType } from "../util/types";
import "../styles/logo.css";
import "../styles/tag.css";
import LazyImage from "./LaxyImage";

type LogoMapType = {
    [key: string]: { src: string; href: string; alt: string };
};

const logoMap: LogoMapType = {
    "android": { src: androidLogo, href: "https://developer.android.com/", alt: "Android logo" },
    "android-full": { src: androidFullLogo, href: "https://developer.android.com/", alt: "Android logo" },
    "css": { src: cssLogo, href: "https://en.wikipedia.org/wiki/CSS", alt: "CSS logo" },
    "java": { src: javaLogo, href: "https://dev.java/", alt: "Java logo" },
    "java-full": { src: javaFullLogo, href: "https://dev.java/", alt: "Java logo" },
    "js": { src: javascriptLogo, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", alt: "JavaScript logo" },
    "js-web": { src: javascriptWebLogo, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", alt: "JavaScript logo" },
    "kotlin": { src: kotlinLogo, href: "https://kotlinlang.org/", alt: "Kotlin logo" },
    "kotlin-full": { src: kotlinFullLogo, href: "https://kotlinlang.org/", alt: "Kotlin logo" },
    "mapbox": { src: mapboxLogo, href: "https://www.mapbox.com/", alt: "Mapbox logo" },
    "mapbox-full": { src: mapboxFullLogo, href: "https://www.mapbox.com/", alt: "Mapbox logo" },
    "modbus": { src: modbusLogo, href: "https://en.wikipedia.org/wiki/Modbus", alt: "Modbus logo" },
    "modbus-full": { src: modbusFullLogo, href: "https://en.wikipedia.org/wiki/Modbus", alt: "Modbus logo" },
    "mysql": { src: mysqlLogo, href: "https://www.mysql.com/", alt: "MySQL logo" },
    "mysql-full": { src: mysqlFullLogo, href: "https://www.mysql.com/", alt: "MySQL logo" },
    "node": { src: nodeLogo, href: "https://nodejs.org/en", alt: "NodeJS logo" },
    "node-full": { src: nodeFullLogo, href: "https://nodejs.org/en", alt: "NodeJS logo" },
    "python": { src: pythonLogo, href: "https://www.python.org/", alt: "Python logo" },
    "react": { src: reactLogo, href: "https://react.dev/", alt: "React logo" },
    "react-full": { src: reactFullLogo, href: "https://react.dev/", alt: "React logo" },
    "ts": { src: typescriptLogo, href: "https://www.typescriptlang.org/", alt: "TypeScript logo" },
    "express": { src: expressLogo, href: "https://expressjs.com/", alt: "ExpressJS logo" },
    "express-full": { src: expressFullLogo, href: "https://expressjs.com/", alt: "ExpressJS logo" },
    "spring": { src: springLogo, href: "https://spring.io/projects/spring-boot", alt: "SpringBoot logo" },
    "spring-full": { src: springFullLogo, href: "https://spring.io/projects/spring-boot", alt: "SpringBoot logo" },
    "unity": { src: unityLogo, href: "https://unity.com/", alt: "Unity logo" },
    "unity-full": { src: unityFullLogo, href: "https://unity.com/", alt: "Unity logo" },
    "git": { src: gitLogo, href: "https://git-scm.com/", alt: "Git logo" },
    "github": { src: githubLogo, href: "https://github.com/", alt: "GitHub logo" },
    "docker": { src: dockerLogo, href: "https://www.docker.com/", alt: "Docker logo" },
    "html": { src: htmlLogo, href: "https://en.wikipedia.org/wiki/HTML", alt: "HTML logo" },
    "my-linked-in": { src: linkedInLogo, href: "https://www.linkedin.com/in/tonttiteemu", alt: "LinkedIn logo" },
    "my-github": { src: githubLogo, href: "https://github.com/teemutontti", alt: "GitHub logo" },
};

export default function Logo({ name, clickable = true }: LogoType) {
    const logo = logoMap[name];

    return clickable ? (
        <a href={logo.href} className={`logo ${name}`} target="_blank">
            <LazyImage src={logo.src} alt={logo.alt} />
        </a>
    ) : (
        <LazyImage src={logo.src} alt={logo.alt} />
    );
}
