import Logo from "./Logo";
import "../styles/logo-dumb-1.css";
import "../styles/logo-dumb-2.css";
import { LogoDumbType } from "../util/types";

export default function LogoDumb({ version = 1 }: LogoDumbType) {
    if (version === 1) {
        return (
            <div className="logo-dumb-1">
                <div className="top">
                    <Logo name="html" />
                    <Logo name="css" />
                    <Logo name="js-web" />
                    <Logo name="react" />
                </div>
                <div className="middle">
                    <Logo name="mapbox" />
                    <Logo name="express" />
                    <Logo name="js" />
                    <Logo name="github" />
                    <Logo name="modbus" />
                    <Logo name="unity" />
                    <Logo name="spring" />
                    <Logo name="git" />
                    <Logo name="ts" />
                    <Logo name="android" />
                </div>
                <div className="bottom">
                    <Logo name="mysql" />
                    <Logo name="node" />
                    <Logo name="java" />
                    <Logo name="python" />
                    <Logo name="kotlin" />
                </div>
            </div>
        );
    } else {
        return (
            <div className="logo-dumb-2">
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
}