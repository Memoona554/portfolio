import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
    {
        role: "Senior Full Stack & AI Engineer",
        company: "Vividly SRL",
        duration: "Jan 2024 - Present · 1 yr 4 mos",
        location: "Italy · Remote",
        about:
            "Designing scalable and efficient software architecture using PHP, Laravel, Vue.js, Tailwind CSS, and Azure. Writing tests and debugging code to ensure robustness. Designing, training, and optimizing machine learning models for real-world applications. Implementing scalable AI solutions. Version control with Git, SVN, and Mercurial. Providing leadership and mentorship to junior developers."
        , type: "Contract"
    },
    {
        role: "Blockchain Instructor",
        company: "Blockchain & AI Technology Center (BAITC)",
        duration: "Mar 2024 - Jul 2024 · 5 mos",
        location: "Astana, Kazakhstan · Remote",
        about:
            "As a Blockchain Instructor at the Blockchain & AI Technology Center (BAITC), I worked on a freelance basis from March 2024 to July 2024, providing specialized training in blockchain technology. During my time with BAITC, I was responsible for delivering high-quality, engaging lessons on blockchain concepts, implementation, and real-world applications. My role allowed me to help students understand complex topics related to blockchain development, smart contracts, and decentralized applications. The position was remote, offering the flexibility to interact with a global audience, and was based out of Astana, Kazakhstan. This experience not only enhanced my teaching skills but also deepened my expertise in blockchain technology, making me an integral part of the team."
        , type: "Remote"
    },
    {
        role: "Full Stack Developer",
        company: "Upwork",
        duration: "May 2019 - Apr 2024 · 5 yrs",
        location: "Remote",
        about:
            "As a Full Stack Developer on Upwork from May 2019 to April 2024, I specialized in blockchain-based application development and deployment. My responsibilities included developing and deploying smart contracts on EVM-compatible blockchains such as Ethereum and Binance Smart Chain (BSC). I integrated Web3 functionalities and hot wallet solutions like MetaMask and Trust Wallet to create seamless user experiences in decentralized applications. Additionally, I implemented real-time functionalities using WebSockets and Binance APIs with JavaScript. A critical part of my role involved troubleshooting, debugging, and upgrading existing blockchain systems to ensure robust performance. My work leveraged technologies such as Solidity, Rust, WebSocket, Web3.js, and NFT integration."
        , type: "Remote"
    },
    {
        role: "Senior Software Engineer",
        company: "KomboAI",
        duration: "Dec 2023 - Feb 2024 · 3 mos",
        location: "Barcelona, Spain · Remote",
        about:
            "As a Senior Software Engineer at KomboAI (Dec 2023 – Feb 2024), I worked remotely with a dynamic team based in Barcelona, Catalonia, Spain. My primary focus was on developing and optimizing features using Python and React.js, contributing to both backend logic and frontend components of AI-driven applications. I collaborated closely with cross-functional teams to ensure smooth integration of services and maintain high code quality. This role emphasized agile development, quick iterations, and a deep understanding of scalable software architecture within a fast-paced AI startup environment."
        , type: "Part Time"
    },
    {
        role: "Head of Engineering",
        company: "Blendgate",
        duration: "Apr 2023 - Jan 2024 · 10 mos",
        location: "Dublin, Ireland · Remote",
        about:
            "In this role, I identified and resolved technical bottlenecks by leveraging expertise in .NET, MERN stack (MongoDB, Express, React, Node.js), MySQL, Leaflet, Mapbox, and React Hooks. I actively participated in architectural and design discussions to enhance system scalability and performance. Additionally, I documented software designs and procedures, provided technical mentorship to junior developers, and conducted thorough code reviews to ensure adherence to best practices and coding standards."
        , type: "Contract"
    },
    {
        role: "Senior Full-Stack Engineer",
        company: "IntelDevs",
        duration: "Jun 2021 - May 2023 · 2 yrs",
        location: "Lahore, Pakistan",
        about:
            "Worked closely with stakeholders to gather user requirements, define system functionality, and develop robust solutions using Node.js, React, Rust, and C# (ASP.NET). Developed and deployed smart contracts using Solidity and Rust, while ensuring secure and efficient database operations through indexing in MongoDB and SQL. Integrated third-party APIs and SDKs into web applications and built RESTful APIs using Kafka clusters for high-performance messaging. Followed the MVC architectural pattern to deliver maintainable and scalable software solutions."
        , type: "Full Time"
    },
    {
        role: "Project Lead Developer/CTO",
        company: "Psyche Coin",
        duration: "Sep 2020 - Aug 2021 · 1 yr",
        location: "Mexico City, Mexico · Remote",
        about:
            "Designed scalable web application architectures and developed detailed flowcharts, layouts, and technical documentation to define system requirements and solutions. Deployed APIs and front-end applications using CI/CD pipelines on AWS, ensuring smooth and efficient release cycles. Set up Swagger for API testing and documentation, and implemented robust security layers and quality assurance protocols for microservices-based systems. Configured and managed test environments on Heroku and Vercel, supporting streamlined development and deployment workflows in a DevOps-focused environment."
        , type: "Part Time"
    },
    {
        role: "Software Engineer",
        company: "Vaival Technologies",
        duration: "Apr 2021 - May 2021 · 2 mos",
        location: "Lahore, Pakistan · Remote",
        about:
            "Worked remotely as a Software Engineer at Vaival Technologies, contributing to the development of innovative blockchain-based and web applications. Utilized technologies such as PHP, Python, Next.js, and the MERN stack to build scalable and secure solutions. Played an active role in integrating decentralized technologies with modern frontend frameworks, enhancing both performance and user experience."
        , type: "Full Time"
    },
    {
        role: "Software Engineer",
        company: "NOBORDER.z INNOVATIONS",
        duration: "Sep 2019 - Apr 2021 · 1 yr 8 mos",
        location: "Lahore, Pakistan",
        about:
            "As a Software Engineer at NOBORDER.z INNOVATIONS, I was responsible for developing and maintaining scalable web applications using the MEAN stack. I worked extensively with centralized exchanges, DeFi applications, and NFT marketplaces, ensuring seamless user experiences and platform stability. My role also involved integrating Web3 technologies and hot wallets like MetaMask and Trust Wallet, deploying smart contracts on EVM-compatible blockchains, and managing node setups on AWS servers, particularly for Avalanche Subnets. Additionally, I implemented server-level optimizations and security enhancements to ensure robust and secure deployments."
        , type: "Full Time"
    },
    {
        role: "Software Engineer",
        company: "Miranz Technologies (Pvt.) Limited",
        duration: "Sep 2018 - Sep 2019 · 1 yr 1 mo",
        location: "Lahore, Pakistan · On-site",
        about:
            "As a Software Engineer at Miranz Technologies (Pvt.) Limited, I contributed to the development of smart contracts on Ethereum and Binance Smart Chain (BSC), playing a key role in blockchain-based application architecture. I implemented WebSocket connections and integrated Binance APIs using JavaScript to enable real-time data handling. My responsibilities included creating Twitter and Discord bots, setting up NFT, ICO, staking, and vesting applications, and developing CRON jobs for automated ENS domain trading. I also focused on writing comprehensive unit and integration tests to ensure code quality and system reliability."
        , type: "Full Time"
    },
    {
        role: "Game Developer",
        company: "Appricot Studio",
        duration: "Nov 2017 - Jul 2018 · 9 mos",
        location: "Lahore, Pakistan",
        about:
            "As a Game Developer at Appricot Studio, I collaborated closely with the design team to bring innovative game concepts to life. I contributed to various aspects of game development, including storyline, audio, and animation design. My role involved translating creative design ideas into functional game code, ensuring the seamless development of milestones, checkpoints, and levels within the games. Additionally, I was responsible for publishing the games on platforms like the Google Play Store and Apple App Store, ensuring they met the required guidelines and performance standards."
        , type: "Full Time"
    }
];


const ExperienceSection = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section  className="py-16 bg-[#05294a]" id="experience">
            <div className="container mx-auto px-4">
                <div className="mb-12 ">
                    <h6
                        className="text-blue-600 font-semibold mb-2"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                    >
                        <span className="bg-[rgba(7,136,255,0.2)] text-white uppercase text-xs font-normal leading-5 tracking-[4px] py-1 px-3 rounded-md">Experience</span>

                    </h6>
                    <h2 className="text-3xl uppercase font-space text-white md:text-4xl font-bold">
                        My Work <span className="text-[#0788ff]">Experience</span>
                    </h2>
                </div>

                <div className="space-y-8">
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="ex-box  shadow-md  bg-[#041c33] p-6 rounded-xl  bg-opacity-10 hover:shadow-lg transition duration-300"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay={exp.delay}
                            >
                                <div className="grid md:grid-cols-12 gap-6">
                                    <div className="md:col-span-4  rounded-xl p-4  bg-blue-500 lg:col-span-3">
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                                            <span className="block text-sm text-white">{exp.company} | {exp.location}</span>
                                            <p className="text-sm text-gray-100">{exp.duration}</p>
                                            <label className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                                                {exp.type}
                                            </label>
                                        </div>
                                    </div>

                                    <div className="md:col-span-8 lg:col-span-9">
                                        <div>
                                            <p className="text-sm text-gray-100 text-justify">{exp.about}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
