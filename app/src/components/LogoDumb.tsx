import Logo from "./Logo";
import "../styles/logo-dumb.css";
import useWindowSize from "../util/useWindowSize";
import { useEffect, useState } from "react";

export default function LogoDumb() {
    const { width } = useWindowSize();
    const [className, setClassName] = useState<string>("logo-dumb");

    useEffect(() => {
        if ((width > 400 && width < 550) || width > 800) {
            setClassName("logo-dumb large");
        } else {
            setClassName("logo-dumb");
        }
    }, [width]);

    return (
        <div className={className}>
            <Logo name="docker" />
            <Logo name="modbus-full" />
            <Logo name="css" />
            <Logo name="react-full" />
            <Logo name="node-full" />
            <Logo name="kotlin" />
            <Logo name="unity-full" />
            <Logo name="html" />
            <Logo name="mapbox-full" />
            <Logo name="js-web" />
            <Logo name="git" />
            <Logo name="python" />
            <Logo name="js" />
            <Logo name="java-full" />
            <Logo name="express-full" />
            <Logo name="ts" />
            <Logo name="github" />
            <Logo name="android-full" />
            <Logo name="spring-full" />
            <Logo name="mysql-full" />
        </div>
    );
}