import "../styles/introduction.css";

export default function Introduction() {
    return (
        <section className="introduction" id="home">
            <div className="content">
                <div className="heading">
                    <p>Hello, my name is</p>
                    <h1>Teemu Tontti</h1>
                </div>
                <div className="sub-heading">
                    <p>Aspiring software developer student ready for new challenges. <br/><a href="#about" className="know-me-link">Get to know me!</a></p>
                    <a href="#contact">
                        <button>Contact Me</button>
                    </a>
                </div>
            </div>
        </section>
    );
}