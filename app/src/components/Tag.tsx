import { TagType } from "../util/types";
import "../styles/tag.css";
import { MouseEvent, useEffect, useState } from "react"; // Import the correct type for MouseEvent

export default function Tag({ children, className }: TagType) {
    const [logosToLightUp, setLogosToLightUp] = useState<string[]>([]);

    useEffect(() => {
        switch (children) {
            case "Frontend":
                setLogosToLightUp(["react-full", "html", "css", "javascript-web", "typescript", "mapbox-full"]);
                break;
            case "Backend":
                setLogosToLightUp(["node-full", "express-full", "java-full", "springboot-full", "python", "modbus-full"]);
                break;
            case "API":
                setLogosToLightUp(["node-full", "express-full", "springboot-full", "java-full"]);
                break;
            case "Problem Solving":
                setLogosToLightUp(["python", "java-full", "unity-full", "javascript", "kotlin"]);
                break;
            case "Self-Initiative":
                setLogosToLightUp(["git", "github", "docker", "mysql-full", "android-full", "react-full", "modbus-full", "mapbox-full", "java-full", "springboot-full", "html", "css", "javascript-web", "node-full", "express-full", "typescript", "javascript"]);
                break;
            case "Teamwork":
                setLogosToLightUp(["git", "unity-full", "github", "react-full", "html", "css", "docker", "javascript-web", "mysql-full", "node-full"]);
                break;
            case "TDD":
                setLogosToLightUp(["java-full"]);
                break;
            case "Critical Thinking":
                setLogosToLightUp(["java-full", "python", "unity-full", "javascript", "kotlin"]);
                break;
            case "Industrial Protocols":
                setLogosToLightUp(["modbus-full", "mapbox-full", "java-full", "python"]);
                break;
            case "Game Development":
                setLogosToLightUp(["unity-full"]);
                break;
            case "Databases":
                setLogosToLightUp(["mysql-full"]);
                break;
            case "Internship Experience":
                setLogosToLightUp(["java-full", "modbus-full", "python", "node-full", "express-full", "html", "css", "javascript-web", "mapbox-full", "git", "javascript"]);
                break;
        }
    }, [children])

    const handleLightUp = (lightUp: boolean) => {
        logosToLightUp.forEach(logo => {
            document.querySelectorAll(`.logo.${logo}`).forEach((logoElement) => {
                if (lightUp) {
                    logoElement.classList.add("light-up");
                } else {
                    logoElement.classList.remove("light-up");
                }
            });
        });
    }

    const handleHover = (e: MouseEvent<HTMLSpanElement>) => { // Remove the second type argument from MouseEvent
        if (e.type === "mouseenter") {
            handleLightUp(true);
        } else {
            handleLightUp(false);
        }
    };

    return (
        <span className={className ? `tag ${className}` : `tag`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            {children}
        </span>
    );
}