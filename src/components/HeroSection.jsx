import React from "react";
import flipkart from "../../public/flipkart.png";
import amazon from "../../public/amazon.png";
import shoe from "../../public/shoe_image.png";

const HeroSection = () => {
    return (
        <div className="container mx-auto lg:px-32 flex-grow flex flex-col lg:flex-row justify-center items-center">
            <div className="w-3/4 lg:w-1/2 flex flex-col gap-7">
                <h1 className="text-8xl font-bold">
                    YOUR FEET
                    <br />
                    DESERVE
                    <br />
                    THE BEST
                </h1>
                <p className="text-sm font-semibold w-3/4">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                    OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
                    YOU WITH OUR SHOES.
                </p>
                <div className="flex gap-4">
                    <button className="px-4 py-1 text-white font-semibold bg-red-600 text-lg">
                        Shop Now
                    </button>
                    <button className="px-4 py-1 font-semibold border border-black text-lg">
                        Category
                    </button>
                </div>
                <div>
                    <p className="mb-4">Also Available On</p>
                    <div className="flex gap-5">
                        <a href="/">
                            <img src={flipkart} />
                        </a>
                        <a href="/">
                            <img src={amazon} />
                        </a>
                    </div>
                </div>
            </div>
            <img src={shoe} className="object-contain xl:w-1/2"/>
        </div>
    );
};

export default HeroSection;
