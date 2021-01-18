import { useState } from "react";
import classNames from "classnames";

export default function AccordionElement({ heading, children }) {
    const [expanded, setExpanded] = useState(false);
    const handleChange = () => {
        setExpanded((isOpen) => !isOpen);
    };
    return (
        <div className={classNames("accordion", { expanded })}>
            <header>
                <h3 onClick={handleChange}>{heading}</h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </header>
            <p>{children}</p>
        </div>
    );
}
