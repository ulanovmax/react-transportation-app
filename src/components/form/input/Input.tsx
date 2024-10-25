import DotsLoader from '@/components/feedback/loader/DotsLoader.tsx';
import { ChangeEvent } from 'react';

export interface InputProps {
    value: string | number;
    debounce?: boolean;
    searchDelay?: number;
    type?: string;
    placeholder?: string;
    label?: string;
    loading?: boolean;
    icon?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
    return (
        <div>
            {props.label && (
                <label className="mb-2 text-base font-semibold">
                    {props.label}
                    {props.required && <span className="text-red-500">*</span>}
                </label>
            )}

            <div className="relative">
                <i></i>

                <input
                    type={props.type}
                    value={props.value}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    className="input"
                />

                {props.loading && (
                    <DotsLoader className="right-4 pointer-events-none absolute top-1/2 -translate-y-1/2" />
                )}
            </div>

            {props.error && <p className="error mt-2 text-red-500 transition">{props.error}</p>}
        </div>
    );
};

export default Input;
