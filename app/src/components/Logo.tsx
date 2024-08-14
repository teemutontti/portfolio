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
import { LogoType } from "../util/types";
import "../styles/logo.css";

export default function Logo({ name }: LogoType) {
    switch (name) {
        case "android":
            return (
                <a href="https://developer.android.com/" target="_blank" title="Android">
                    <img src={androidLogo} alt="Android logo" />
                </a>
            );
        case "css":
            return (
                <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" title="CSS">
                    <img src={cssLogo} alt="CSS logo" />
                </a>
            );
        case "java":
            return (
                <a href="https://dev.java/" target="_blank" title="Java">
                    <img src={javaLogo} alt="Java logo" />
                </a>
            );
        case "js":
            return (
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" title="JavaScript">
                    <img src={javascriptLogo} alt="JavaScript logo" />
                </a>
            );
        case "kotlin":
            return (
                <a href="https://kotlinlang.org/" target="_blank" title="Kotlin">
                    <img src={kotlinLogo} alt="Kotlin logo" />
                </a>
            );
        case "kotlin-full":
            return (
                <a href="https://kotlinlang.org/" target="_blank" title="Kotlin">
                    <img src={kotlinFullLogo} alt="Kotlin logo" />
                </a>
            );
        case "mapbox":
            return (
                <a href="https://www.mapbox.com/" target="_blank" title="Mapbox">
                    <img src={mapboxLogo} alt="Mapbox logo" />
                </a>
            );
        case "mapbox-full":
            return (
                <a href="https://www.mapbox.com/" target="_blank" title="Mapbox">
                    <img src={mapboxFullLogo} alt="Mapbox logo" />;
                </a>
            );
        case "modbus":
            return (
                <a href="https://en.wikipedia.org/wiki/Modbus" target="_blank" title="Modbus">
                    <img src={modbusLogo} alt="Modbus logo" />
                </a>
            );
        case "modbus-full":
            return (
                <a href="https://en.wikipedia.org/wiki/Modbus" target="_blank" title="Modbus">
                    <img src={modbusFullLogo} alt="Modbus logo" />
                </a>
            );
        case "mysql":
            return (
                <a href="https://www.mysql.com/" target="_blank" title="MySQL">
                    <img src={mysqlLogo} alt="MySQL logo" />
                </a>
            );
        case "node":
            return (
                <a href="https://nodejs.org/en" target="_blank" title="NodeJS">
                    <img src={nodeLogo} alt="NodeJS logo" />
                </a>
            );
        case "python":
            return (
                <a
                    href="https://www.python.org/"
                    target="_blank"
                    title="Python"
                >
                    <img src={pythonLogo} alt="Python logo" />
                </a>
            );
        case "react":
            return (
                <a href="https://react.dev/" target="_blank" title="React">
                    <img src={reactLogo} alt="React logo" />
                </a>
            );
        case "ts":
            return (
                <a
                    href="https://www.typescriptlang.org/"
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
                    target="_blank"
                    title="SpringBoot"
                >
                    <img src={springLogo} alt="SpringBoot logo" />
                </a>
            );
        default:
            return (
                <a
                    href="https://en.wikipedia.org/wiki/HTML"
                    target="_blank"
                    title="HTML"
                >
                    <img src={htmlLogo} alt="HTML logo" />
                </a>
            );
    }
}