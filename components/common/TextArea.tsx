import { useState } from 'react';
import classNames from "classnames"

type Props = {
    label: string;
    name: string;
    id: string;
    rows: number;
    type?: string;
    cols?: number;
    optional?: boolean;
};

export default function TextArea({
    id,
    label,
    name,
    rows,
    optional = false,
    ...props
}: Props) {
    const [floating, setFloating] = useState(false);

    const handleChange = (e) => {
        if (e.target.value.length > 0) setFloating(true);
        else setFloating(false);
    };
    return (
        <div className="input-group">
            <textarea
                name={name}
                id={id}
                rows={rows}
                required
                onChange={handleChange}
                {...props}
            ></textarea>
            <label htmlFor={id} className={classNames({ floating })}>
                {label}
                {optional && (
                    <span className="label-optional"> - Optional</span>
                )}
            </label>
        </div>
    );
}
