import androidLogo from "../assets/android-logo.webp";
import cssLogo from "../assets/css-logo.webp";
import javaLogo from "../assets/java-logo.webp";
import javascriptLogo from "../assets/javascript-logo.webp";
import kotlinFullLogo from "../assets/kotlin-full-logo.webp";
import kotlinLogo from "../assets/kotlin-logo.webp";
import mapboxFullLogo from "../assets/mapbox-full-logo.webp";
import mapboxLogo from "../assets/mapbox-logo.webp";
import modbusFullLogo from "../assets/modbus-full-logo.webp";
import modbusLogo from "../assets/modbus-logo.webp";
import mysqlLogo from "../assets/mysql-logo.webp";
import nodeLogo from "../assets/node-logo.webp";
import pythonLogo from "../assets/python-logo.webp";
import reactLogo from "../assets/react-logo.webp";
import typescriptLogo from "../assets/typescript-logo.webp";
import htmlLogo from "../assets/html-logo.webp";
import expressLogo from "../assets/express-logo.webp";
import springLogo from "../assets/spring-logo.webp";
import dockerLogo from "../assets/docker-logo.webp";
import gitLogo from "../assets/git-logo.webp";
import githubLogo from "../assets/github-logo.webp";
import javascriptWebLogo from "../assets/javascript-web-logo.webp";
import unityLogo from "../assets/unity-logo.webp";
import { LogoType } from "../util/types";
import "../styles/logo.css";

export default function Logo({ name }: LogoType) {
    switch (name) {
        case "android":
            return (
                <a
                    href="https://developer.android.com/"
                    className="android"
                    target="_blank"
                    title="Android"
                >
                    <img src={androidLogo} alt="Android logo" />
                </a>
            );
        case "css":
            return (
                <a
                    href="https://en.wikipedia.org/wiki/CSS"
                    className="css"
                    target="_blank"
                    title="CSS"
                >
                    <img src={cssLogo} alt="CSS logo" />
                </a>
            );
        case "java":
            return (
                <a
                    href="https://dev.java/"
                    className="java"
                    target="_blank"
                    title="Java"
                >
                    <img src={javaLogo} alt="Java logo" />
                </a>
            );
        case "js":
            return (
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    className="javascript"
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
                    className="javascript-web"
                    target="_blank"
                    title="JavaScript"
                >
                    <img src={javascriptWebLogo} alt="JavaScript logo" />
                </a>
            );
        case "kotlin":
            return (
                <a
                    href="https://kotlinlang.org/"
                    className="kotlin"
                    target="_blank"
                    title="Kotlin"
                >
                    <img src={kotlinLogo} alt="Kotlin logo" />
                </a>
            );
        case "kotlin-full":
            return (
                <a
                    href="https://kotlinlang.org/"
                    className="kotlin-full"
                    target="_blank"
                    title="Kotlin"
                >
                    <img src={kotlinFullLogo} alt="Kotlin logo" />
                </a>
            );
        case "mapbox":
            return (
                <a
                    href="https://www.mapbox.com/"
                    className="mapbox"
                    target="_blank"
                    title="Mapbox"
                >
                    <img src={mapboxLogo} alt="Mapbox logo" />
                </a>
            );
        case "mapbox-full":
            return (
                <a
                    href="https://www.mapbox.com/"
                    className="mapbox-full"
                    target="_blank"
                    title="Mapbox"
                >
                    <img src={mapboxFullLogo} alt="Mapbox logo" />;
                </a>
            );
        case "modbus":
            return (
                <a
                    href="https://en.wikipedia.org/wiki/Modbus"
                    className="modbus"
                    target="_blank"
                    title="Modbus">
                    <img src={modbusLogo} alt="Modbus logo" />
                </a>
            );
        case "modbus-full":
            return (
                <a
                    href="https://en.wikipedia.org/wiki/Modbus"
                    className="modbus-full"
                    target="_blank"
                    title="Modbus"
                >
                    <img src={modbusFullLogo} alt="Modbus logo" />
                </a>
            );
        case "mysql":
            return (
                <a
                    href="https://www.mysql.com/"
                    className="mysql"
                    target="_blank"
                    title="MySQL"
                >
                    <img src={mysqlLogo} alt="MySQL logo" />
                </a>
            );
        case "node":
            return (
                <a
                    href="https://nodejs.org/en"
                    className="node"
                    target="_blank"
                    title="NodeJS"
                >
                    <img src={nodeLogo} alt="NodeJS logo" />
                </a>
            );
        case "python":
            return (
                <a
                    href="https://www.python.org/"
                    className="python"
                    target="_blank"
                    title="Python"
                >
                    <img src={pythonLogo} alt="Python logo" />
                </a>
            );
        case "react":
            return (
                <a
                    href="https://react.dev/"
                    className="react"
                    target="_blank"
                    title="React"
                >
                    <img src={reactLogo} alt="React logo" />
                </a>
            );
        case "ts":
            return (
                <a
                    href="https://www.typescriptlang.org/"
                    className="typescript"
                    target="_blank"
                    title="TypeScript"
                >
                    <img src={typescriptLogo} alt="TypeScript logo" />
                </a>
            );
        case "express":
            return (
                <a
                    href="https://expressjs.com/"
                    className="express"
                    target="_blank"
                    title="ExpressJS"
                >
                    <img src={expressLogo} alt="ExpressJS logo" />
                </a>
            );
        case "spring":
            return (
                <a
                    href="https://spring.io/projects/spring-boot"
                    className="spring-boot"
                    target="_blank"
                    title="SpringBoot"
                >
                    <img src={springLogo} alt="SpringBoot logo" />
                </a>
            );
        case "unity":
            return (
                <a
                    href="https://unity.com/"
                    className="unity"
                    target="_blank"
                    title="Unity"
                >
                    <img src={unityLogo} alt="Unity logo" />
                </a>
            );
        case "git":
            return (
                <a
                    href="https://git-scm.com/"
                    className="git"
                    target="_blank"
                    title="Git"
                >
                    <img src={gitLogo} alt="Git logo" />
                </a>
            );
        case "github":
            return (
                <a
                    href="https://github.com/"
                    className="github"
                    target="_blank"
                    title="GitHub"
                >
                    <img src={githubLogo} alt="GitHub logo" />
                </a>
            );
        case "docker":
            return (
                <a
                    href="https://www.docker.com/"
                    className="docker"
                    target="_blank"
                    title="Docker"
                >
                    <img src={dockerLogo} alt="Docker logo" />
                </a>
            );
        default:
            return (
                <a
                    href="https://en.wikipedia.org/wiki/HTML"
                    className="html"
                    target="_blank"
                    title="HTML"
                >
                    <img src={htmlLogo} alt="HTML logo" />
                </a>
            );
    }
}