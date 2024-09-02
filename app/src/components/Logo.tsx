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

export default function Logo({ name }: LogoType) {
    switch (name) {
        case "my-linked-in":
            return (
                <a href="https://www.linkedin.com/in/tonttiteemu" className="logo linked-in" target="_blank" title="LinkedIn">
                    <img src={linkedInLogo} alt="LinkedIn logo" />
                </a>
            );
        case "android":
            return (
                <a href="https://developer.android.com/" className="logo android" target="_blank" title="Android">
                    <img src={androidLogo} alt="Android logo" />
                </a>
            );
        case "android-full":
            return (
                <a href="https://developer.android.com/" className="logo android-full" target="_blank" title="Android">
                    <img src={androidFullLogo} alt="Android logo" />
                </a>
            );
        case "css":
            return (
                <a href="https://en.wikipedia.org/wiki/CSS" className="logo css" target="_blank" title="CSS">
                    <img src={cssLogo} alt="CSS logo" />
                </a>
            );
        case "java":
            return (
                <a href="https://dev.java/" className="logo java" target="_blank" title="Java">
                    <img src={javaLogo} alt="Java logo" />
                </a>
            );
        case "java-full":
            return (
                <a href="https://dev.java/" className="logo java-full" target="_blank" title="Java">
                    <img src={javaFullLogo} alt="Java logo" />
                </a>
            );
        case "js":
            return (
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    className="logo javascript"
                    target="_blank"
                    title="JavaScript"
                >
                    <img src={javascriptLogo} alt="JavaScript logo" />
                </a>
            );
        case "js-web":
            return (
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    className="logo javascript-web"
                    target="_blank"
                    title="JavaScript"
                >
                    <img src={javascriptWebLogo} alt="JavaScript logo" />
                </a>
            );
        case "kotlin":
            return (
                <a href="https://kotlinlang.org/" className="logo kotlin" target="_blank" title="Kotlin">
                    <img src={kotlinLogo} alt="Kotlin logo" />
                </a>
            );
        case "kotlin-full":
            return (
                <a href="https://kotlinlang.org/" className="logo kotlin-full" target="_blank" title="Kotlin">
                    <img src={kotlinFullLogo} alt="Kotlin logo" />
                </a>
            );
        case "mapbox":
            return (
                <a href="https://www.mapbox.com/" className="logo mapbox" target="_blank" title="Mapbox">
                    <img src={mapboxLogo} alt="Mapbox logo" />
                </a>
            );
        case "mapbox-full":
            return (
                <a href="https://www.mapbox.com/" className="logo mapbox-full" target="_blank" title="Mapbox">
                    <img src={mapboxFullLogo} alt="Mapbox logo" />
                </a>
            );
        case "modbus":
            return (
                <a href="https://en.wikipedia.org/wiki/Modbus" className="logo modbus" target="_blank" title="Modbus">
                    <img src={modbusLogo} alt="Modbus logo" />
                </a>
            );
        case "modbus-full":
            return (
                <a href="https://en.wikipedia.org/wiki/Modbus" className="logo modbus-full" target="_blank" title="Modbus">
                    <img src={modbusFullLogo} alt="Modbus logo" />
                </a>
            );
        case "mysql":
            return (
                <a href="https://www.mysql.com/" className="logo mysql" target="_blank" title="MySQL">
                    <img src={mysqlLogo} alt="MySQL logo" />
                </a>
            );
        case "mysql-full":
            return (
                <a href="https://www.mysql.com/" className="logo mysql-full" target="_blank" title="MySQL">
                    <img src={mysqlFullLogo} alt="MySQL logo" />
                </a>
            );
        case "node":
            return (
                <a href="https://nodejs.org/en" className="logo node" target="_blank" title="NodeJS">
                    <img src={nodeLogo} alt="NodeJS logo" />
                </a>
            );
        case "node-full":
            return (
                <a href="https://nodejs.org/en" className="logo node-full" target="_blank" title="NodeJS">
                    <img src={nodeFullLogo} alt="NodeJS logo" />
                </a>
            );
        case "python":
            return (
                <a href="https://www.python.org/" className="logo python" target="_blank" title="Python">
                    <img src={pythonLogo} alt="Python logo" />
                </a>
            );
        case "react":
            return (
                <a href="https://react.dev/" className="logo react" target="_blank" title="React">
                    <img src={reactLogo} alt="React logo" />
                </a>
            );
        case "react-full":
            return (
                <a href="https://react.dev/" className="logo react-full" target="_blank" title="React">
                    <img src={reactFullLogo} alt="React logo" />
                </a>
            );
        case "ts":
            return (
                <a href="https://www.typescriptlang.org/" className="logo typescript" target="_blank" title="TypeScript">
                    <img src={typescriptLogo} alt="TypeScript logo" />
                </a>
            );
        case "express":
            return (
                <a href="https://expressjs.com/" className="logo express" target="_blank" title="ExpressJS">
                    <img src={expressLogo} alt="ExpressJS logo" />
                </a>
            );
        case "express-full":
            return (
                <a href="https://expressjs.com/" className="logo express-full" target="_blank" title="ExpressJS">
                    <img src={expressFullLogo} alt="ExpressJS logo" />
                </a>
            );
        case "spring":
            return (
                <a href="https://spring.io/projects/spring-boot" className="logo springboot" target="_blank" title="SpringBoot">
                    <img src={springLogo} alt="SpringBoot logo" />
                </a>
            );
        case "spring-full":
            return (
                <a
                    href="https://spring.io/projects/spring-boot"
                    className="logo springboot-full"
                    target="_blank"
                    title="SpringBoot"
                >
                    <img src={springFullLogo} alt="SpringBoot logo" />
                </a>
            );
        case "unity":
            return (
                <a href="https://unity.com/" className="logo unity" target="_blank" title="Unity">
                    <img src={unityLogo} alt="Unity logo" />
                </a>
            );
        case "unity-full":
            return (
                <a href="https://unity.com/" className="logo unity-full" target="_blank" title="Unity">
                    <img src={unityFullLogo} alt="Unity logo" />
                </a>
            );
        case "git":
            return (
                <a href="https://git-scm.com/" className="logo git" target="_blank" title="Git">
                    <img src={gitLogo} alt="Git logo" />
                </a>
            );
        case "github":
            return (
                <a href="https://github.com/" className="logo github" target="_blank" title="GitHub">
                    <img src={githubLogo} alt="GitHub logo" />
                </a>
            );
        case "my-github":
            return (
                <a href="https://github.com/teemutontti" className="logo github" target="_blank" title="GitHub">
                    <img src={githubLogo} alt="GitHub logo" />
                </a>
            );
        case "docker":
            return (
                <a href="https://www.docker.com/" className="logo docker" target="_blank" title="Docker">
                    <img src={dockerLogo} alt="Docker logo" />
                </a>
            );
        default:
            return (
                <a href="https://en.wikipedia.org/wiki/HTML" className="logo html" target="_blank" title="HTML">
                    <img src={htmlLogo} alt="HTML logo" />
                </a>
            );
    }
}