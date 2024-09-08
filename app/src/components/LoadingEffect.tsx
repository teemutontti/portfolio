import "../styles/loading-effect.css";

export default function LoadingEffect({ size = "md" }: { size?: "xs" | "sm" | "md" | "lg" | "xl" }) {
    return (
        <div className={`loading-effect ${size}`}>
            <div className={`loading-spinner ${size}`}>
                <div className="loading-cover"></div>
            </div>
        </div>
    );
}