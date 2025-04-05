import React from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function AboutUs() {

  return (
    <section id="aboutus" className="relative flex items-center justify-center py-24">
      <div className="lg:w-[95%] 2xl:w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex justify-center lg:justify-start " data-aos="fade-right" data-aos-delay="100">
            <div className="about-banner text-center" >
              <img src="banner-image.jpeg" alt="Thumb" className="lg:w-full lg:mx-0 mx-auto w-[90%]  h-auto object-contain rounded-xl shadow-lg" />
            </div>
          </div>

          <div className="px-5 lg:px-10 2xl:pt-10 " data-aos="fade" data-aos-delay="200">
            <h6 className="mb-3 2xl:mb-7" >
              <span className="bg-[rgba(7,136,255,0.2)] text-white uppercase text-xs font-normal leading-5 tracking-[4px] py-1 px-3 rounded-md">About Us</span>
            </h6>
            <h2 className="xl:text-3xl text-3xl text-white 2xl:mb-4 lg:text-[1.5rem] font-bold mt-2" >
              I AM AVAILABLE FOR <span className="text-[#0788ff]">UI/UX DESIGN</span> AND DEVELOPMENT
            </h2>
            <p className="mt-5 text-justify text-white 2xl:mb-5" data-aos="fade-up"
              data-aos-delay="400">
              I am a Full Stack Developer with 7 years of experience specializing in scalable web and blockchain applications. My expertise includes Python, React.js, Node.js, Solidity, PHP, web3.js, and Azure DevOps Services, enabling me to build efficient, custom solutions for diverse industries.
              <br />
              I've led multiple full-stack projects, focusing on cutting-edge technologies, database management, and seamless user experiences. Passionate about innovation, I continuously strive to deliver high-quality solutions that exceed client expectations.
            </p>

            <div className="flex gap-4 mt-5 2xl:mt-10" data-aos="fade-up"
              data-aos-delay="500">
              <div className="r-box flex flex-col items-center text-center py-3 px-5 rounded-lg">
                <h3 className="text-2xl font-semibold">7<span className="text-primary">+</span></h3>
                <label className="text-white">Certificates</label>
              </div>
              <div className="r-box flex flex-col items-center text-center py-3 px-5 rounded-lg">
                <h3 className="text-2xl font-semibold">7<span className="text-primary">+</span></h3>
                <label className="text-white">Years Experience</label>
              </div>
              <div className="r-box flex flex-col items-center text-center py-3 px-5 rounded-lg">
                <h3 className="text-2xl font-semibold">7<span className="text-primary">+</span></h3>
                <label className="text-white">Awards</label>
              </div>
            </div>

            <div className="mt-5 2xl:mt-10" data-aos="fade-up"
              data-aos-delay="600">
              <a href="#contact" className="tracking-[0.0625em] inline-flex gap-2 items-center cursor-pointer font-medium px-5 py-4 bg-[rgb(var(--px-theme-rgb))] uppercase text-white rounded-[40px] transition max-w-max">
                <span>Get in touch</span>
                <span><HiOutlineArrowLongRight /></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute lg:block hidden top-10 right-10 z-[-1] rotate-effect">
        <img
          src="/effect-2.svg"
          alt="Shape"
          className="aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="400"
        />
      </div>
      <div className="absolute bottom-[-70px] xl:block hidden left-10 z-[-1] effect-1">
        <img
          src="/effect-1.svg"
          alt="Shape"
          className="aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="500"
        />
      </div>


    </section>

  );
}

export default AboutUs;
