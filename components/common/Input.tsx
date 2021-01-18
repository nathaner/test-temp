import { useState } from "react";
import classNames from "classnames";

type Props = {
    label: string;
    name: string;
    id: string;
    type?: string;
    optional?: boolean;
};

export default function Input({
    label,
    name,
    id,
    type = "text",
    optional = false,
    ...props
}: Props) {
    const [floating, setFloating] = useState(false);

    const handleChange = (e) => {
        if (e.target.value.length > 0) setFloating(true)
        else setFloating(false)
    };

    return (
        <div className="input-group">
            <input
                type="text"
                name={name}
                id={id}
                required={!optional}
                {...props}
                onChange={handleChange}
            />
            <label htmlFor={id} className={classNames({ floating })}>
                {label}
                {optional && (
                    <span className="label-optional"> - Optional</span>
                )}
            </label>
        </div>
    );
}
