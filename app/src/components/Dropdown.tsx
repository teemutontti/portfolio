import { useState } from "react";
import "../styles/dropdown.css";

type DropdownType = {
    className?: string;
    list: string[];
    onClick: (selected: string) => void;
};

export default function Dropdown({ className, list, onClick }: DropdownType) {
    const [selected, setSelected] = useState<string>(list[0]);
    const [open, setOpen] = useState<boolean>(false);

    const handleItemClick = (item: string) => {
        setSelected(item);
        onClick(item);
        setOpen(false);
    }

    return (
        <div className={className ? `dropdown-container ${className}` : "dropdown-container"}>
            <p>{selected}</p>
            <button onClick={() => setOpen(!open)} className={open ? "dropdown-button open" : "dropdown-button"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="arrow">
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
            </button>
            {open && (
                <div className="dropdown-menu">
                    {list.map((item, index) => (
                        <button key={index} onClick={() => handleItemClick(item)} className={selected === item ? "selected" : undefined}>
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}