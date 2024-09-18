import { SectionType } from "../util/types";
import "../styles/section.css";

export default function Section({ name, title, children }: SectionType) {
    return (
        <section className={`styled-section ${name}`} id={name}>
            {title && <h2 className="heading">{title}</h2>}
            <div className="content">
                {children}
            </div>
        </section>
    )
}
