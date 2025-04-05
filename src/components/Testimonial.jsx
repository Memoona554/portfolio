import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const testimonials = [
    {
        id: 1,
        image: '/avatar_1.jpeg',
        text: "I've had the pleasure of working with Adeel, and can confidently say that he is an outstanding team player. He consistently demonstrates hard work, dedication, and a strong commitment to delivering tasks on time. Not only does he take pride in his work, but he also fosters a collaborative and professional environment with his colleagues. His positive attitude and strong communication skills make him a great asset to any team. I highly recommend Adeel for any project or Team leading role, knowing he will consistently contribute and exceed expectations.",
        name: 'Khansaa Hasan',
        company: 'Software Engineer '
    },
    {
        id: 2,
        image: '/avatar_2.jpeg',
        text: "I had the pleasure of working with Adeel on AI-related project over the past year, and I can confidently say he is an exceptional software developer. Adeel implemented various AI techniques, including Retrieval-Augmented Generation (RAG) with AI chat history, and built an API integration system that connects multiple AI providers to a single chat interface. His work on the backend with Stripe payment integration and the development of an AI chat and document drafting interface was outstanding.Adeel also set up the Azure infrastructure for our web application, demonstrating his advanced skills in PHP, Laravel, JavaScript, and infrastructure management. His dedication and determination led to significant improvements in our projects throughout the year.Adeel is not only a great team player but also a generous mentor. He shared his knowledge with me, helping me learn JavaScript and web development. It was a fantastic experience working with Adeel, and I highly recommend him for any software development role.",
        name: 'Fadi Ibrahim',
        company: 'MCs Data Science '
    },
    {
        id: 3,
        image: '/avatar_3.jpeg',
        text: "Adeel is a talented Senior Full Stack Engineer with impressive skills in PHP, Laravel, Blockchain, and the MERN stack. He consistently delivered high-quality work and was a key contributor to our project's success. I highly recommend him for any future role.",
        name: 'Pakeeza Sharafat',
        company: 'Maths Specialist @ Upwork '
    },
    {
        id: 4,
        image: '/avatar_4.jpeg',
        text: "I had the pleasure of working closely with Adeel during our time together at Vividly SRL , where he served as a Senior Full Stack Developer. Adeel is an exceptional developer with a profound understanding of both front-end and back-end technologies.He has an impressive ability to transform complex requirements into seamless, efficient code. His work on both the user interface and server-side logic was involved in the project’s success.Adeel’s problem-solving skills and proactive attitude were crucial in overcoming several technical challenges we faced.I highly recommend Adeel for any senior development role. His technical skills, dedication, and ability to deliver high-quality work make him an invaluable asset to any team. I would love to work with him again in any future.",
        name: 'Hazhe Chakmaraq',
        company: 'Software Developer '
    },
    {
        id: 5,
        image: '/avatar_5.jpeg',
        text: "Working with Adeel is a pleasure. He's incredibly reliable, and you can count on him to deliver top-notch work. He's a true professional. Adeel has successfully taught professors from various countries and universities and managed to captivate everyone's interest during his lectures. What truly sets him apart is his remarkable ability to engage the audience and hold their attention until the very end. His extensive and solid background makes Adeel's presentations even more valuable. When he shares his personal experiences, the information takes on a whole new depth, making it highly valuable and relatable. It's not just about the abundance of information; it's about how Adeel seamlessly incorporates his insights, enriching and unforgettable the learning experience.I believe we'll cross paths again!",
        name: 'Aigerim Gilmanova',
        company: 'Technical Documentation '
    },
    {
        id: 6,
        image: '/avatar_6.jpeg',
        text: "Adeel is a great professional!He's an ease going, hard working and business driven individual that will help you starting or accelerating any project on various fields.His dedication and spirit of initiative are also making him stand out of the crowd.Highly recommended",
        name: 'Ale Pintaudi',
        company: 'Co-Founder @ KomboAI '
    },
    {
        id: 7,
        image: '/images.jpg',
        text: "Adeel is a committed talented professional who knows how to manage a team in the best way possible. In other words, not even he has a very strong technical skills set, but also he is emotionally intelligent: all you can ask from a team leader. I am glad to work with him and to have a possibility to grow in a team led by Adeel.",
        name: 'Atefe Fahimi',
        company: 'Frontend Developer '
    },
    {
        id: 8,
        image: '/avatar_8.jpeg',
        text: "Adeel is one of the most effective and reliable head of engineering I have worked with. He is a super strong leader, with advanced technical abilities and knowledge. His ambitions, together with a strong sense for respect and empathy, makes him the perfect leader to manage an engineering team. He is also an incredibly hard and smart worker, being effective both as an individual contributor and people manager.",
        name: 'Herman Errico',
        company: 'Product @ Vanta '
    }
];

export default function TestimonialSection() {
    return (
        <section id='testimonial' className="relative container mx-auto 2xl:w-full   lg:py-16  effect-section" data-aos="fade-up"
        data-aos-delay="100">
            <div className=" lg:block hidden absolute top-[15%] left-[18%] w-[140px] animate-float z-0">
                <img src="/effect-3.svg" alt="Effect" />
            </div>

            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h6 className="mb-2">
                        <span data-aos="fade-up"
                                data-aos-delay="100" className="bg-[rgba(7,136,255,0.2)] text-white uppercase text-xs font-normal leading-5 tracking-[4px] py-1 px-3 rounded-md">
                            Testimonial
                        </span>
                    </h6>
                    <h2 data-aos="fade-up"
                                data-aos-delay="200" className="text-3xl md:text-4xl font-bold text-white">
                        Over <span className="text-blue-500">1,000+</span> <br /> PEOPLE TRUST ME
                    </h2>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="!pb-10"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div data-aos="fade-up"
                                data-aos-delay="400" className=" rounded-2xl p-6 text-center flex flex-col items-center h-full relative z-10">
                                <div className="w-24 h-24 mb-4 rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <p className="text-sm text-white lg:w-[60%] mb-4 lg:text-center text-justify">{testimonial.text}</p>
                                <div className="font-semibold text-lg text-white">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.company}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="lg:block hidden absolute top-0 right-0  z-0">
                <img src="/effect-4.svg" alt="Effect" className="w-full h-full object-cover" />
            </div>
        </section>

    );
}
