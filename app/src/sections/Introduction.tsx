import "../styles/introduction.css";
import useWindowSize from "../util/useWindowSize";

export default function Introduction() {
    const { width } = useWindowSize();

    return (
        <section className="introduction" id="home">
            <div className="content">
                {width >= 750 &&
                    <div className="profile-container">
                        <div className="profile-image"/>
                        <div className="profile-background" />
                    </div>
                }
                <div className="text">
                    <div className="heading">
                        <p>Hello, my name is</p>
                        <h1>Teemu Tontti</h1>
                    </div>
                    <div className="sub-heading">
                        <p>Aspiring software developer student ready for new challenges. <br/><a href="#about" className="know-me-link">Get to know me!</a></p>
                        <a href="#contact" className="contact">
                            <button className="contact-button">Contact Me</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}