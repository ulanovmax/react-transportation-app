export default function useDebounce(callback: (...args: any[]) => void, delay: number = 300) {
    let timer: ReturnType<typeof setTimeout>;

    return function (...args: any[]) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
