import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";

const HomeSection = () => {
    return (
        <section id="home" className="home-section pt-[20%] mb-4 lg:pt-[10%]  ">
            <div className="container mx-auto px-[5%]">
                <div className="flex flex-col gap-5 lg:flex-row items-center justify-around">
                    <div className="lg:w-[60%] xl:w-1/2 mb-10 lg:mb-0">
                        <div className="space-y-4">
                            <h6
                                className=""
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <span className="bg-[rgba(7,136,255,0.2)] text-white uppercase text-xs font-normal leading-5 tracking-[4px] py-1 px-3 rounded-md">ADEEL JAVED</span>
                            </h6>
                            <h1
                                className="lg:text-5xl text-3xl font-bold uppercase text-white "
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Hay! I’m ADEEL JAVED
                            </h1>
                            <h2
                                className="lg:text-4xl text-2xl text-[rgb(var(--px-theme-rgb))] font-semibold"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <span>I'm a Senior Full Stack Engineer</span>
                            </h2>
                            <p
                                className="text-white "
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                Experienced Senior Software Engineer specializing in developing scalable, high-performance applications with a strong focus on clean code, architecture, and leading development teams to deliver impactful software solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4" data-aos="fade-up" data-aos-delay="500">
                                <a
                                    href="#contact"
                                    className="tracking-[0.0625em] flex gap-2 items-center cursor-pointer font-medium px-10 py-4 bg-[rgb(var(--px-theme-rgb))] uppercase text-white rounded-[40px] transition justify-center sm:justify-start"
                                >
                                    <span>Get in touch</span> <span> <HiOutlineArrowLongRight /></span>
                                </a>

                                <div
                                    className="flex gap-4 text-gray-500 justify-center sm:justify-start"
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                >
                                    <a
                                        href="https://www.linkedin.com/in/adeeljaved-/"
                                        target="_blank"
                                        className="w-12 h-12 rounded-full border-2 border-white flex justify-center items-center hover:bg-blue-600"
                                    >
                                        <FaLinkedin className="text-white text-xl" />
                                    </a>
                                    <a
                                        href="https://www.upwork.com/freelancers/~01d08a841e5935f0f8?companyReference=1116069956964913153&mp_source=share"
                                        target="_blank"
                                        className="w-12 h-12 rounded-full border-2 border-white flex justify-center items-center hover:bg-blue-600"
                                    >
                                        <FaSquareUpwork className="text-white text-xl" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="xl:w-1/2 lg:w-[40%] w-full flex justify-center items-center" data-aos="fade-left" data-aos-delay="700">
                        <img
                            src="/banner-image.jpeg"
                            alt="Jenna Banner"
                            className="w-[80%] h-[50%] rounded-full shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
