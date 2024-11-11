import styles from './Loader.module.pcss';

const TypeLoader = () => {
    return (
        <div className="scale-75">
            <div className={styles.typewriter}>
                <div className={styles.slide}>
                    <i></i>
                </div>
                <div className={styles.paper}></div>
                <div className={styles.keyboard}></div>
            </div>
        </div>
    );
};

export default TypeLoader;
