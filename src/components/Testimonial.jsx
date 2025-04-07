import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const testimonials = [
    {
        id: 1,
        image: '/avatar_8.jpeg',
        text: "Adeel is one of the most effective and reliable head of engineering I have worked with. He is a super strong leader, with advanced technical abilities and knowledge. His ambitions, together with a strong sense for respect and empathy, makes him the perfect leader to manage an engineering team. He is also an incredibly hard and smart worker, being effective both as an individual contributor and people manager.",
        name: 'Herman Errico',
        company: 'Product @ Vanta '
    },
    {
        id: 2,
        image: '/images.jpg',
        text: "Adeel is a committed talented professional who knows how to manage a team in the best way possible. In other words, not even he has a very strong technical skills set, but also he is emotionally intelligent: all you can ask from a team leader. I am glad to work with him and to have a possibility to grow in a team led by Adeel.",
        name: 'Atefe Fahimi',
        company: 'Frontend Developer '
    },
    {
        id: 3,
        image: '/avatar_6.jpeg',
        text: "Adeel is a great professional!He's an ease going, hard working and business driven individual that will help you starting or accelerating any project on various fields.His dedication and spirit of initiative are also making him stand out of the crowd.Highly recommended",
        name: 'Ale Pintaudi',
        company: 'Co-Founder @ KomboAI '
    },
    {
        id: 4,
        image: '/avatar_5.jpeg',
        text: "Working with Adeel is a pleasure. He's incredibly reliable, and you can count on him to deliver top-notch work. He's a true professional. Adeel has successfully taught professors from various countries and universities and managed to captivate everyone's interest during his lectures. What truly sets him apart is his remarkable ability to engage the audience and hold their attention until the very end. His extensive and solid background makes Adeel's presentations even more valuable. When he shares his personal experiences, the information takes on a whole new depth, making it highly valuable and relatable. It's not just about the abundance of information; it's about how Adeel seamlessly incorporates his insights, enriching and unforgettable the learning experience.I believe we'll cross paths again!",
        name: 'Aigerim Gilmanova',
        company: 'Technical Documentation '
    },
    {
        id: 5,
        image: '/avatar_4.jpeg',
        text: "I had the pleasure of working closely with Adeel during our time together at Vividly SRL , where he served as a Senior Full Stack Developer. Adeel is an exceptional developer with a profound understanding of both front-end and back-end technologies.He has an impressive ability to transform complex requirements into seamless, efficient code. His work on both the user interface and server-side logic was involved in the project’s success.Adeel’s problem-solving skills and proactive attitude were crucial in overcoming several technical challenges we faced.I highly recommend Adeel for any senior development role. His technical skills, dedication, and ability to deliver high-quality work make him an invaluable asset to any team. I would love to work with him again in any future.",
        name: 'Hazhe Chakmaraq',
        company: 'Software Developer '
    },
    {
        id: 6,
        image: '/avatar_3.jpeg',
        text: "Adeel is a talented Senior Full Stack Engineer with impressive skills in PHP, Laravel, Blockchain, and the MERN stack. He consistently delivered high-quality work and was a key contributor to our project's success. I highly recommend him for any future role.",
        name: 'Pakeeza Sharafat',
        company: 'Maths Specialist @ Upwork '
    },

    {
        id: 7,
        image: '/avatar_2.jpeg',
        text: "I had the pleasure of working with Adeel on AI-related project over the past year, and I can confidently say he is an exceptional software developer. Adeel implemented various AI techniques, including Retrieval-Augmented Generation (RAG) with AI chat history, and built an API integration system that connects multiple AI providers to a single chat interface. His work on the backend with Stripe payment integration and the development of an AI chat and document drafting interface was outstanding.Adeel also set up the Azure infrastructure for our web application, demonstrating his advanced skills in PHP, Laravel, JavaScript, and infrastructure management. His dedication and determination led to significant improvements in our projects throughout the year.Adeel is not only a great team player but also a generous mentor. He shared his knowledge with me, helping me learn JavaScript and web development. It was a fantastic experience working with Adeel, and I highly recommend him for any software development role.",
        name: 'Fadi Ibrahim',
        company: 'MCs Data Science '
    },
    {
        id: 8,
        image: '/avatar_1.jpeg',
        text: "I've had the pleasure of working with Adeel, and can confidently say that he is an outstanding team player. He consistently demonstrates hard work, dedication, and a strong commitment to delivering tasks on time. Not only does he take pride in his work, but he also fosters a collaborative and professional environment with his colleagues. His positive attitude and strong communication skills make him a great asset to any team. I highly recommend Adeel for any project or Team leading role, knowing he will consistently contribute and exceed expectations.",
        name: 'Khansaa Hasan',
        company: 'Software Engineer '
    },
    {
        id: 9,
        image: '/images.jpg',
        text: "I recently hired Adeel for an NFT project, and I must say, I was thoroughly impressed with his technical expertise and professionalism. At the start of our collaboration, Adeel took the time to understand my needs and expectations, and then proceeded to work quickly and efficiently. He kept me updated throughout the entire process, and was able to meet every milestone ahead of schedule. In the end, Adeel was able to deliver exactly what I wanted to the exact specifications.Beyond his technical skills, I also found Adeel to be a pleasure to work with. He is a clear communicator who always seems willing to go the extra mile to ensure my satisfaction. I found him to be reliable and trustworthy, which is essential when it comes to hiring a freelance developer.Overall, I would highly recommend Adeel to anyone in need of high-quality work in this field. He is an excellent choice for anyone seeking a skilled and reliable professional who can deliver exceptional results.",
        name: 'Upwork Client',
        company: 'NFT Autobuy Bot for Blockchain Game'
    },
    {
        id: 10,
        image: '/images.jpg',
        text: "It was the fourth time we worked with Adeel on a smart contract development and again it was a pure pleasure. Adeel gave us professional advices right from the start and implemented all of our ideas. We can recommend working with adeel to anyone looking for a blockchain developer and would hire him again 100%. If you have the opportunity to work with him, you should take it. Thank you again.",
        name: 'Upwork Client',
        company: 'Development of an ERC-721 smart contract on Ethereum Mainnet to mint 8888 NFTs '
    },
    {
        id: 11,
        image: '/images.jpg',
        text: "I recently had the pleasure of working with Adeel for the second time. Having previously hired him for another project, I knew that he was a skilled and professional blockchain developer, but unfortunately he wasn't available for this project initially. I posted the job on a freelance marketplace, but I wasn't able to find any suitable candidates, despite interviewing a number of engineers.Finally, Adeel's availability opened up again, and I was thrilled to hire him for this project. As expected, he did not disappoint. Adeel is a highly competent and experienced blockchain developer who is able to complete projects to the highest standards of quality and efficiency. He communicates effectively, is a proactive problem solver, and is able to work independently.Adeel has a strong technical expertise in blockchain development, and it is evident in the results he produces. He was able to complete the project according to my specifications, and was able to implement features and functionality that exceeded my expectations. He is reliable, trustworthy, and a pleasure to work with.I would highly recommend Adeel for any blockchain development projects. He is one of the best developers I have worked with, and I will definitely be hiring him again in the future.",
        name: 'Upwork Client',
        company: 'Freelance Blockchain Developer for One-Time Project'
    },
    {
        id: 12,
        image: '/images.jpg',
        text: "Adeel was an important part of the project and he executed his duties extremely well. He is very patient and got on several calls with me to make sure I understood what was going on. Adeel has become a good friend to me. I will always use him for any of my smart contract needs. He also works well with other contractors as he had to collaborate with my web developer. Adeel went above and beyond on my project and I am forever grateful",
        name: 'Upwork Client',
        company: 'ERC-721 Smart Contract & IPFS'
    },
    {
        id: 13,
        image: '/images.jpg',
        text: "Adeel was wonderful to work with. He was always timely in his deliverables, and executed on each deliverable effectively. I would highly recommend him for any web development project, particularly involving React.js, Web3, and Moralis.Furthermore, communication with Adeel was friction-less. He always responded to messages in a very timely manner, and was easy to communicate with.Overall, great job! I will definitely work with him in the future when I need more web development help!",
        name: 'Upwork Client',
        company: 'Web3 developer needed to create fullstack NFT Dapp '
    },
    {
        id: 14,
        image: '/images.jpg',
        text: "We are working with Adeel for a few months now and impressed with professionalism, responsibility and reliability. True team player, go 1,000 miles extra for client satisfaction and a robust grasp on blockchain technologies, able to handle heterogeneous tasks efficiently. Highly recommended.",
        name: 'Upwork Client',
        company: 'ERC 20 API '
    },
    {
        id: 15,
        image: '/images.jpg',
        text: "Extremely punctual and willing to go the extra mile for the project at hand! Makes sure everything is done the correct way and knows his stuff! Very trustworthy and would 100% be working with again in the future! Can't go wrong hiring Adeel!",
        name: 'Upwork Client',
        company: 'OpenSea Blockchain Development for NFT project'
    },
    {
        id: 16,
        image: '/images.jpg',
        text: "Adeel is a great guy to work with. He answered tons of questions around our project even before we had a contract. He has deep knowledge of everything related to Blockchain development, was always available, no matter the time of day, it felt like having a co-worker next door although he was a few thousand kilometers away. He delivered the work functional and absolutely flawless, guided us to the whole process. His english is perfect we never had a problem with communication - I highly recommend Adeel for anybody to hire!",
        name: 'Upwork Client',
        company: 'Smart contract for NFT project'
    },
    {
        id: 17,
        image: '/images.jpg',
        text: "Adeel is a very patient and knowledgeable coder. He worked with me closely, at my pace, and gave me relevant assignments for our tutoring sessions. I felt that he really cared about my learning progress and I recommend him both as a tutor and for coding work. Two thumbs up!!",
        name: 'Upwork Client',
        company: 'Tutor to teach programming,blockchain dev'
    },
    {
        id: 18,
        image: '/images.jpg',
        text: "It was the second time we worked with Adeel and again it was great work he delivered. Always reliable, great communication and skills on all levels of work. We highly recommend Adeel to anyone who searches for a skilled dev in his team! We will definitely continue our working relationship with Adeel in the future.",
        name: 'Upwork Client',
        company: 'Smart contract development for NFT project on Ethereum Blockchain'
    },
    {
        id: 19,
        image: '/images.jpg',
        text: "Adeel is one of the best. Was a two month process as it was a big project and he was amazing every step of the way. Very trust worthy and one of the smartest people I have worked with. If you need someone to write a smart contract or help with a token. He is you man. Thank you so much Adeel!",
        name: 'Upwork Client',
        company: 'NFT smart contract developer'
    },
    {
        id: 20,
        image: '/images.jpg',
        text: "Adeel was the perfect developer for this project. He was always there ready to pivot when I would change my mind about something. Where others failed he found solutions. He has a never give up attitude! Skilled in smart contracts and front end integration.",
        name: 'Upwork Client',
        company: 'Front End Web3 Integration and UI design'
    },
    {
        id: 21,
        image: '/images.jpg',
        text: "Adeel is the most professional and efficient developer I have ever worked with. He is great at communicating as well as sticking with you till the job is completed to it's fullest.I cannot recommend Adeel more, I will 100% be returning to him for future work",
        name: 'Upwork Client',
        company: 'Blockchain / Solidity Developer (ERC5050)'
    },
    
    {
        id: 22,
        image: '/images.jpg',
        text: "We repeatedly worked with Adeel and again it was a perfect experience. He is super responsive, always up to date and brings all the skills you need from a good developer. Communication was a pleasure as always and the work was done fast and efficiently throughout the whole project. We highly recommend working with Adeel to anyone out there!",
        name: 'Upwork Client',
        company: 'Development of Web3 social media Dapp'
    },
   
    {
        id: 23,
        image: '/images.jpg',
        text: "Very good knowledge on ZK proof tech. Highly proficient and resourceful. Clear communication and absolutely pleasure working with Adeel. Continuing one more contract with him.",
        name: 'Upwork Client',
        company: 'Rust ZK smart contract deployment'
    },
    {
        id: 24,
        image: '/images.jpg',
        text: "Thanks to Adeel, profits are up 67.4% in the defi area of our corporate portfolio...thanks to his hard work, recommended changes and professional smart contract review and rewriting!",
        name: 'Upwork Client',
        company: 'Smart Ckontract Enginner'
    },
    {
        id: 25,
        image: '/images.jpg',
        text: "He understood requirement correctly before the contract and delivered the fast & qualified work. Highly recommended.",
        name: 'Upwork Client',
        company: 'Looking to hire a lottery game smart contract on bsc'
    },
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
