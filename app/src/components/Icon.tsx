export default function Icon({ name, width = "24px", fill = "white" }: { name: string, width?: string, fill?: string }) {
    if (name === "close") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width={width} fill={fill}>
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
        );
    } else if (name === "mail") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width={width} fill={fill}>
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
        );
    } else if (name === "arrow-up") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width={width} fill={fill}>
                <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
            </svg>
        );
    } else if (name === "arrow-down") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width={width} fill={fill}>
                <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
            </svg>
        );
    } else if (name === "chevron-left") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width={width} fill={fill}>
                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
        );
    } else if (name === "chevron-right") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width={width} fill={fill}>
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
        );
    } else {
        return null;
    }
}