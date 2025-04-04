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
            "Teaching blockchain technologies, smart contracts, and decentralized application development. Engaging with students through hands-on projects and tutorials."
        , type: "Remote"
    },
    {
        role: "Full Stack Developer",
        company: "Upwork",
        duration: "May 2019 - Apr 2024 · 5 yrs",
        location: "Remote",
        about:
            "Developed and deployed smart contracts on Ethereum and BSC blockchains. Implemented WebSocket’s and Binance APIs. Integrated Web3 and hot wallets like MetaMask and Trust Wallet. Troubleshot, debugged, and upgraded existing systems."
        , type: "Remote"
    },
    {
        role: "Senior Software Engineer",
        company: "KomboAI",
        duration: "Dec 2023 - Feb 2024 · 3 mos",
        location: "Barcelona, Spain · Remote",
        about:
            "Worked on AI solutions, focusing on Python, React.js, and machine learning models. Contributed to designing scalable software architectures."
        , type: "Part Time"
    },
    {
        role: "Head of Engineering",
        company: "Blendgate",
        duration: "Apr 2023 - Jan 2024 · 10 mos",
        location: "Dublin, Ireland · Remote",
        about:
            "Led a team in resolving technical issues using .NET, MERN stack, and MySQL. Provided mentorship to junior engineers and contributed to architectural decisions."
        , type: "Contract"
    },
    {
        role: "Senior Full-Stack Engineer",
        company: "IntelDevs",
        duration: "Jun 2021 - May 2023 · 2 yrs",
        location: "Lahore, Pakistan",
        about:
            "Worked with Node.js, React, Rust, and C# to deliver full-stack solutions. Developed smart contracts, maintained databases, and integrated APIs. Used the MVC approach for development."
        , type: "Full Time"
    },
    {
        role: "Project Lead Developer/CTO",
        company: "Psyche Coin",
        duration: "Sep 2020 - Aug 2021 · 1 yr",
        location: "Mexico City, Mexico · Remote",
        about:
            "Designed web application architecture, developed flowcharts, and deployed APIs. Managed CI/CD pipelines and set up application security layers. Worked with AWS and microservices."
        , type: "Part Time"
    },
    {
        role: "Software Engineer",
        company: "Vaival Technologies",
        duration: "Apr 2021 - May 2021 · 2 mos",
        location: "Lahore, Pakistan · Remote",
        about:
            "Worked with PHP, Python, and the MERN stack to develop web applications. Participated in blockchain and full-stack development projects."
        , type: "Full Time"
    },
    {
        role: "Software Engineer",
        company: "NOBORDER.z INNOVATIONS",
        duration: "Sep 2019 - Apr 2021 · 1 yr 8 mos",
        location: "Lahore, Pakistan",
        about:
            "Developed web applications using the MEAN stack. Worked on centralized exchanges, DeFi applications, and NFT marketplaces. Integrated Web3 and hot wallets."
        , type: "Full Time"
    },
    {
        role: "Software Engineer",
        company: "Miranz Technologies (Pvt.) Limited",
        duration: "Sep 2018 - Sep 2019 · 1 yr 1 mo",
        location: "Lahore, Pakistan · On-site",
        about:
            "Worked on Ethereum smart contracts, implemented WebSocket and Binance APIs, and developed bots for Twitter and Discord. Set up NFT, ICO, and Staking applications."
        , type: "Full Time"
    },
    {
        role: "Game Developer",
        company: "Appricot Studio",
        duration: "Nov 2017 - Jul 2018 · 9 mos",
        location: "Lahore, Pakistan",
        about:
            "Collaborated with the design team to create game concepts and contributed to game development, audio, animation, and publishing on app stores."
        , type: "Full Time"
    }
];


const ExperienceSection = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section className="py-16 bg-[#05294a]" id="experience">
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
                                    {/* Left Column */}
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

                                    {/* Right Column */}
                                    <div className="md:col-span-8 lg:col-span-9">
                                        <div>
                                            <h5 className="text-lg font-semibold text-white mb-2">About Company</h5>
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
