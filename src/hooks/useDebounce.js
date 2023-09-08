const useDebounce = (fn, wait = 300) => {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, wait)
    }
}

export default useDebounce;