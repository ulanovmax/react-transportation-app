import styles from './Loader.module.pcss';

interface Props {
    className?: string;
}

const DotsLoader = ({ className }: Props) => {
    return (
        <div className={`${styles.spinner} ${className}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default DotsLoader;
