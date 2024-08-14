import { TagType } from "../util/types";
import "../styles/tag.css";

export default function Tag({ children }: TagType) {
    return (
        <span className="tag">
            {children}
        </span>
    )
}