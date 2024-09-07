import { lazy, Suspense } from "react";
import LoadingEffect from "../components/LoadingEffect";
import "../styles/page.css";

export default function Page({ topBar = true, footer = true, children, className }: { topBar?: boolean, footer?: boolean, children: React.ReactNode, className?: string }) {
    const TopBar = lazy(() => import("../features/TopBar"));
    const Footer = lazy(() => import("./Footer"));

    return (
        <Suspense fallback={<LoadingEffect />}>
            <div className={className ? `page ${className}` : "page"}>
                {topBar && <TopBar />}
                <div className="children-container">
                    {children}
                </div>
                {footer && <Footer />}
            </div>
        </Suspense>
    );
}