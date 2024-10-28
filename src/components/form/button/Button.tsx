import { PropsWithChildren } from '@/ts/common';
import styles from './Button.module.pcss';

interface Props {
    type?: 'button' | 'reset' | 'submit';
    loading?: boolean;
    disabled?: boolean;
    variant?: 'secondary' | 'error' | 'success';
    size?: 'sm' | 'lg';
    className?: string;
}

const Button = (props: PropsWithChildren<Props>) => {
    const variant = props.variant && styles[props.variant];

    return (
        <button
            disabled={props.disabled}
            type={props.type ?? 'button'}
            className={`${styles.button} ${variant ?? ''} ${styles[props.size ?? 'lg']} ${props.className ?? ''}`}
        >
            {props.children}
        </button>
    );
};

export default Button;
