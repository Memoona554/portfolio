import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import HomeSection from './components/HeroSection'
import CompanyLogo from './components/CompanyLogo'
import AboutUs from './components/AboutUs'
import RecentProjects from './components/RecentProjects'
import ServicesSection from './components/Services'
import ExperienceSection from './components/Experience'
import TestimonialSection from './components/Testimonial'
import ContactUs from './components/ContactUs'
import CustomCursor from './components/CustomCursor'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
    <CustomCursor/>
      <Header />
      <HomeSection />
      <div className='py-10 w-full bg-[#05294a]'>
        <div className='w-[80%] mx-auto'>
          <CompanyLogo />
        </div>
      </div>
      <AboutUs />
      <div className='pt-20'>
        <RecentProjects />
      </div>
      <div className='py-20'>
        <ServicesSection />
      </div>
      <div className='py-20'>
        <ExperienceSection />
      </div>
      <div className='py-20'>
        <TestimonialSection />
      </div>
      <div className='lg:py-20 py-10'>
        <ContactUs />
      </div>
      <div className='bg-gray-700 h-[0.5px] w-full'></div>
      <footer className=" py-4">

        <div className="container mx-auto px-4">
          <p className="m-0 text-center text-white">
            © 2023 copyright all rights reserved
          </p>
        </div>
      </footer>

    </>
  );
}

export default App;
