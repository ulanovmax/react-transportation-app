interface Props {
    value: string;
    onChange: (option: string) => void;
    options: Array<string | number>;
    label?: string;
    required?: boolean;
    placeholder?: string;
    error?: string;
}

const Select = (props: Props) => {
    return (
        <div>
            {props.label && (
                <label className="mb-2 text-base font-semibold">
                    {props.label}
                    {props.required && <span className="text-red-500">*</span>}
                </label>
            )}

            <select value={props.value} className="input" onChange={(e) => props.onChange(e.target.value)}>
                {props.placeholder && <option className="text-slate-400">{props.placeholder}</option>}

                {props.options.map((item, i) => (
                    <option key={i} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            <p v-show="error" className="error mt-2 text-red-500 transition">
                {props.error}
            </p>
        </div>
    );
};

export default Select;
