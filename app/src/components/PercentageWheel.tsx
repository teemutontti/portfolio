import "../styles/percentage-wheel.css";
import { PercentageWheelType } from "../util/types";

export default function PercentageWheel({ percentage }: PercentageWheelType) {
    return (
        <div
            className={`percentage-wheel`}
            style={{
                background: `conic-gradient(var(--primary) 0% ${percentage}%, var(--paper) ${percentage}% 100%)`
            }}
        >
            <div className="fill">
                <span className="percentage">{`${percentage}%`}</span>
            </div>
        </div>
    )
}