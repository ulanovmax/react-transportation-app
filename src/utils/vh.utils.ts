// VH calc for true value
const calcVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

calcVh();

if (window) {
    window.addEventListener("resize", () => calcVh());
}

