import React from "react";
import { CiServer, CiMobile3, CiCloudOn, CiSettings } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
const services = [
    {
      id: 1,
      title: "Web Application Development",
      description:
        "Develop scalable and high-performance web applications using modern frameworks like React, Vue, and Django.",
      image: "/service-01.jpg",
      icon: <CiServer className="w-10 h-10 text-white rounded-sm bg-blue-700" />,
      rating: 5,
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Build cross-platform mobile apps using Flutter or React Native for seamless user experiences.",
      image: "/service-02.jpg",
      icon: <CiMobile3 className="w-10 h-10 text-white rounded-sm bg-blue-700" />,
      rating: 5,
    },
    {
      id: 3,
      title: "API Design & Integration",
      description:
        "Design secure, scalable RESTful and GraphQL APIs, and integrate third-party services like Stripe, Firebase, etc.",
      image: "/service-03.jpg",
      icon: <CiSettings className="w-10 h-10 text-white rounded-sm bg-blue-700" />,
      rating: 5,
    },
    {
      id: 4,
      title: "Cloud Infrastructure & DevOps",
      description:
        "Deploy and manage apps on AWS, Azure, or DigitalOcean. CI/CD, Docker, and Kubernetes expert.",
      image: "/service-04.jpg",
      icon: <CiCloudOn className="w-10 h-10 text-white rounded-sm bg-blue-700" />,
      rating: 5,
    },
  ];
const ServiceCard = ({ service }) => {
  return (
    <div
  className="relative rounded-2xl overflow-hidden h-96 bg-cover bg-center shadow-lg transition duration-300 hover:scale-105"
  style={{ backgroundImage: `url(${service.image})` }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent z-0" />

  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
    <div className="mb-2">{service.icon}</div>
    <h5 className="text-xl font-bold mb-1">{service.title}</h5>
    <p className="text-sm mb-2">{service.description}</p>
    <div className="flex space-x-1">
      {[...Array(service.rating)].map((_, idx) => (
            <FaStar key={idx} className="w-4 h-4 text-yellow-400" />

      ))}
    </div>
  </div>
</div>

  
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className=" mb-12">
          <h6 className=" mb-2" data-aos="fade-up"
                                data-aos-delay="100">              
            <span className="bg-[rgba(7,136,255,0.2)] text-white uppercase text-xs font-normal leading-5 tracking-[4px] py-1 px-3 rounded-md">Services</span>
          </h6>
          <h2 data-aos="fade-up"
                                data-aos-delay="300" className="text-4xl uppercase font-space font-bold text-white">
             <span className="text-[#0788ff]">services</span> I am providing .
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up"
                                data-aos-delay="400">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
