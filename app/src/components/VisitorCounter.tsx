import { useEffect, useState } from "react";

const API_URL = "https://visitor-counter-ugty.onrender.com"

export default function VisitorCounter() {
    const [visitors, setVisitors] = useState(0);

    useEffect(() => {
        const updateVisitorCount = async () => {
            try {
                // Increment the visitor count
                await fetch(`${API_URL}/visit`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                // Fetch the updated visitor count
                const response = await fetch(`${API_URL}/visitors`);
                const data = await response.json();

                if (response.ok) {
                    setVisitors(data.count);
                }
            } catch (err) {
                console.log(err)
            }
        }
        updateVisitorCount();
    }, [])

    return (
        <p>{`Visitor count: ${visitors}`}</p>
    );
}