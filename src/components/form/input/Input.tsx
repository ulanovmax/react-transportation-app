import DotsLoader from '@/components/feedback/loader/DotsLoader.tsx';
import { ChangeEvent, ComponentType } from 'react';
import { IconProps } from '@tabler/icons-react';

export interface InputProps {
    value: string | number;
    debounce?: boolean;
    searchDelay?: number;
    type?: string;
    placeholder?: string;
    label?: string;
    loading?: boolean;
    icon?: ComponentType<IconProps>;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
}

const Input = (props: InputProps) => {
    const InputIcon = (Icon: ComponentType<IconProps>) => {
        return (
            <Icon
                className={`${props.value ? 'text-blue-500' : ''} pointer-events-none absolute top-1/2 -translate-y-1/2 icon left-2 opacity-30 transition-colors`}
            />
        );
    };

    return (
        <div className={`${props.className ?? ''}`}>
            {props.label && (
                <label className="mb-2 text-base font-semibold">
                    {props.label}
                    {props.required && <span className="text-red-500">*</span>}
                </label>
            )}

            <div className="relative">
                {props.icon && InputIcon(props.icon)}

                <input
                    type={props.type}
                    value={props.value}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    className={`${props.icon ? '!pl-10' : ''} input`}
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
