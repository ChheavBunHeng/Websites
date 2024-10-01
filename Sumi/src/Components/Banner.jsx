import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Banner() {
    const images = [
        "https://www.sws.co.jp/resource/img/product/048.png",  
        "https://www.sws.co.jp/resource/img/product/049.png",
        "https://www.sws.co.jp/resource/img/product/050.png",
        "https://www.sws.co.jp/resource/img/product/051.png",
        "https://www.sws.co.jp/resource/img/product/052.png"
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);  // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative h-screen flex">
            {/* Left div for text */}
            <div className="flex items-center justify-center w-1/2 bg-white bg-opacity-50">
                <div className="mx-auto max-w-xl text-left">
                    <h1 className="text-3xl font-bold sm:text-5xl text-blue-800">
                        Streamline Your Wiring Solutions.
                        <strong className="font-bold text-blue-600 block">Enhance Safety and Efficiency.</strong>
                    </h1>
                    <p className="mt-4 sm:text-lg text-black">
                        Discover innovative solutions for your wiring needs, ensuring reliability and performance.
                    </p>
                    <div className="mt-8 flex justify-start">
                        <a className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-700 mr-2" href="#">Get Started</a>
                        <a className="bg-white px-6 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-100" href="#">Learn More</a>
                    </div>
                </div>
            </div>
            
            {/* Right div for the background image */}
            <div className="relative w-1/2">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }} // Start invisible
                    animate={{ opacity: 1 }}   // Fade in
                    exit={{ opacity: 0 }}      // Fade out
                    transition={{ duration: 0.5, ease: "easeInOut" }} // Transition duration
                    className="absolute w-full h-full inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                />
            </div>
        </section>
    );
}
