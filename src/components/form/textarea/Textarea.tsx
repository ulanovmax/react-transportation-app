import { InputProps } from '@/components/form/input/Input.tsx';
import { ChangeEvent } from 'react';

interface Props extends Pick<InputProps, 'placeholder' | 'label' | 'value' | 'required' | 'className'> {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = (props: Props) => {
    return (
        <div className={`${props.className ?? ''}`}>
            <label v-if="label" className="mb-2 text-base font-semibold">
                {props.label}
                <span v-if="required" className="text-red-500">
                    *
                </span>
            </label>

            <div className="relative">
                <textarea
                    value={props.value}
                    placeholder={props.placeholder}
                    className="input min-h-40 resize-none transition"
                    onChange={props.onChange}
                ></textarea>
            </div>
        </div>
    );
};

export default Textarea;
