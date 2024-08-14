import "../styles/top-bar.css";

export default function TopBar() {
    return (
        <div className="top-bar">
            <svg className="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path id="left-t" d="M94 31V161.53V170L76 161.53V65.8746L42 83.81V72L94 31Z" />
                <path id="right-t" d="M107 31V161.53V170L125 161.53V65.8746L159 83.81V72L107 31Z" />
            </svg>
            <div className="menu-icon">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    );
}
