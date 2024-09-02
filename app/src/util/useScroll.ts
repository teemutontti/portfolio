import { useEffect, useState } from "react";

export default function useScroll() {
    const [scroll, setScroll] = useState<{ x: number, y: number }>({
        x: window.scrollX,
        y: window.scrollY,
    });

    useEffect(() => {
        function handleScroll() {
            setScroll({
                x: window.scrollX,
                y: window.scrollY,
            });
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return scroll;
}