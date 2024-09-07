import { Suspense } from "react";
import LoadingEffect from "./LoadingEffect";

type LazyImageComponentType = {
    src: string;
    alt: string;
    className?: string;
}

export default function LazyImage({ src, alt, className }: LazyImageComponentType) {
    return (
        <Suspense fallback={<LoadingEffect />}>
            <img src={src} alt={alt} className={className} loading="lazy" />
        </Suspense>
    )
}