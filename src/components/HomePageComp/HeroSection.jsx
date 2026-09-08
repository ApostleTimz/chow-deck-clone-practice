import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { Image } from "../Compat";

function useDeviceType() {
    const [device, setDevice] = useState("desktop");

    useEffect(() => {
        const updateDevice = () => {
            if (window.innerWidth <= 768) setDevice("mobile");
            else if (window.innerWidth <= 1024) setDevice("tablet");
            else setDevice("desktop");
        };

        updateDevice();
        window.addEventListener("resize", updateDevice);
        return () => window.removeEventListener("resize", updateDevice);
    }, []);

    return device;
}

function getPaths(device) {
    const width = window.innerWidth;
    const padding = width * 0.025;
    const baseY =
        device === "mobile"
            ? window.innerHeight - 60
            : device === "tablet"
            ? Math.round(window.innerHeight * 0.65) - 48
            : window.innerHeight - 60;

    if (device === "mobile") {
        return [
            `M ${padding} ${baseY} Q ${width / 2} ${baseY - 30} ${width - padding} ${baseY}`,
            `M ${width - padding} ${baseY} Q ${width / 2} ${baseY - 30} ${padding} ${baseY}`,
            `M ${width - 2 * padding} ${baseY} Q ${width * 0.75} ${baseY - 60} ${padding * 2} ${baseY}`,
        ];
    }

    if (device === "tablet") {
        return [
            `M ${padding} ${baseY} Q ${width / 2} ${baseY - 70} ${width - padding} ${baseY}`,
            `M ${width - padding} ${baseY} Q ${width / 2} ${baseY - 50} ${padding} ${baseY}`,
            `M ${width - 2 * padding} ${baseY} Q ${width * 0.75} ${baseY - 80} ${padding * 2} ${baseY}`,
        ];
    }

    return [
        `M 0 ${baseY} Q ${width / 2} ${baseY - 70} ${width} ${baseY}`,
        `M ${width} ${baseY} Q ${width / 2} ${baseY - 40} 0 ${baseY}`,
        `M ${width - 40} ${baseY + 10} Q ${width * 0.75} ${baseY - 40} 40 ${baseY - 10}`,
    ];
}

function getSVGPath(pathD) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    return path;
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function Rider({ src, path, progress, size }) {
    if (!path) return null;

    const pathElement = getSVGPath(path);
    const point = pathElement.getPointAtLength(
        easeInOutQuad(progress) * pathElement.getTotalLength()
    );

    return (
        <Image
            src={src}
            alt="Rider"
            width={size}
            height={size}
            priority
            style={{
                position: "absolute",
                left: point.x,
                top: point.y,
                width: size,
                height: size,
                zIndex: 10,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
            }}
        />
    );
}

export default function Hero() {
    const texts = [
        "Have you eaten?",
        "You don Chow?",
        "Se o ti jeun?",
        "Iriela nri?",
        "Kun ci abinci?",
    ];
    const device = useDeviceType();
    const [paths, setPaths] = useState([]);
    const [index, setIndex] = useState(0);
    const [activeRider, setActiveRider] = useState(0);
    const [progress, setProgress] = useState(0);
    const [address, setAddress] = useState("");

    useEffect(() => {
        const updatePaths = () => setPaths(getPaths(device));
        updatePaths();
        window.addEventListener("resize", updatePaths);
        return () => window.removeEventListener("resize", updatePaths);
    }, [device]);

    useEffect(() => {
        const interval = setInterval(
            () => setIndex((current) => (current + 1) % texts.length),
            3000
        );
        return () => clearInterval(interval);
    }, [texts.length]);

    useEffect(() => {
        if (!paths.length) return undefined;

        let start;
        let animationFrame;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const nextProgress = Math.min((timestamp - start) / 8000, 1);
            setProgress(nextProgress);
            if (nextProgress < 1) animationFrame = requestAnimationFrame(animate);
            else {
                setProgress(0);
                setActiveRider((current) => (current + 1) % 3);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [activeRider, paths]);

    const riders = [
        { src: "/rider1.svg", path: paths[0] },
        { src: "/rider2.svg", path: paths[1] },
        { src: "/rider3.webp", path: paths[2] },
    ];

    return (
        <section className="relative h-screen w-full overflow-hidden md:h-[65vh] lg:h-screen">
            <div className="absolute inset-0 -z-10">
                <Image src="/chow1.svg" alt="Hero Background" fill priority className="object-cover" />
            </div>

            <div className="flex h-full flex-col items-center justify-center px-4 text-center text-black">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={index}
                        className="mb-6 text-5xl font-extrabold tracking-tight md:text-8xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                    >
                        {texts[index]}
                    </motion.h1>
                </AnimatePresence>

                <div className="relative mx-auto my-8 w-full max-w-2xl">
                    <form
                        className="relative mx-auto flex h-[64px] items-center rounded-full bg-white px-3 shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-black"
                        onSubmit={(event) => {
                            event.preventDefault();
                            window.location.href = "/store";
                        }}
                    >
                        <label htmlFor="delivery-address" className="sr-only">
                            Enter a delivery address
                        </label>
                        <MapPin
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-gray-700"
                        />
                        <input
                            id="delivery-address"
                            type="text"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            placeholder="Enter a delivery address"
                            className="ml-3 h-full min-w-0 flex-1 border-0 bg-transparent text-gray-800 outline-none"
                            autoCapitalize="off"
                            autoCorrect="off"
                        />
                        <button
                            type="submit"
                            className="shrink-0 cursor-pointer rounded-full bg-cucumber px-2 py-2 text-sm font-medium text-white transition hover:bg-[#68B99D] active:scale-95 lg:px-6 lg:py-3"
                        >
                            Order now
                        </button>
                    </form>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center gap-6 md:flex-row">
                    {[
                        ["/PlayStore.svg", "Download on Google Play"],
                        ["/AppleStore.svg", "Download on App Store"],
                    ].map(([src, label]) => (
                        <button
                            key={label}
                            className="flex cursor-pointer items-center gap-2 rounded-md bg-[#155B4A] px-4 py-3.5 text-white hover:bg-[#195143]"
                        >
                            <Image src={src} alt={label} width={40} height={40} priority />
                            <span className="text-lg font-bold">{label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {riders.map((rider, riderIndex) =>
                riderIndex === activeRider ? (
                    <Rider
                        key={rider.src}
                        src={rider.src}
                        path={rider.path}
                        progress={progress}
                        size={device === "mobile" ? 40 : device === "tablet" ? 56 : 64}
                    />
                ) : null
            )}
        </section>
    );
}
