import Logo from "./Logo";
import "../styles/logo-dumb.css";

export default function LogoDumb() {
    return (
        <div className="logo-dumb">
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
                <Logo name="docker" />
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
}