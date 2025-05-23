import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const projects = [
    {
        id: 1,
        title: 'Vividly SRL',
        subtitle: 'Web Design & Development',
        image: '/pro_1.png',
        detailImage: '/Pro_1.png',
        description: `Designed scalable and efficient software architectures using PHP, Laravel, Vue.js, Tailwind CSS, and Azure to build robust and maintainable applications. Ensured software reliability by writing comprehensive tests and debugging code thoroughly. Applied machine learning techniques to design, train, and optimize models for real-world applications, while implementing scalable AI solutions seamlessly integrated into existing systems. Managed code effectively through version control tools like Git, SVN, and Mercurial. Provided leadership and mentorship to junior developers, fostering a collaborative and growth-oriented environment. Committed to continuous learning and staying up to date with the latest technologies and methodologies, including agile development practices.`,
        type: 'Website',
        languages: 'PHP,Laravel,Software Development, Git, Devs Ops,LLM,Embading,Agents,Retrieval-Augmented Generation (RAG), Python, Vue.js',
        platform: 'Custom ',
        country: 'Italy',
        liveUrl: 'https://vividly.it/',
    },
    {
        id: 2,
        title: 'Kombo',
        subtitle: 'Chrome Extension',
        image: '/pro_2.png',
        detailImage: '/pro_2.png',
        description: `A chrome extension designed to enhance the productivity of sales professionals by providing AI-powered assistance with calling and emailing prospects. We are committed to protecting the privacy of our users and ensuring the safety of their personal data.`,
        type: 'Chrome Extension',
        languages: 'React.js Python',
        platform: 'Custom ',
        country: 'Barcelona, Catalonia, Spain',
        liveUrl: 'https://getkombo.ai/',
    },
   
    {
        id: 3,
        title: 'DexCheck',
        subtitle: 'B2B Market Network',
        image: '/pro_4.png',
        detailImage: '/pro_4.png',
        description: `DexCheck is a state-of-the-art Crypto and NFT Analytics platform powered by AI, delivering real-time insights, intelligent alerts, and in-depth market analysis.`,
        type: 'Web App',
        languages: 'JavaScript · Node.js · MERN Stack · Smart Contracts · Solidity · Blockchain · Amazon Web Services (AWS)',
        platform: 'Custom ',
        country: '....',
        liveUrl: 'https://dexcheck.ai/app',
    },
    
    {
        id: 4,
        title: 'XANA',
        subtitle: 'AI x Web 3.0 Metaverse',
        image: '/pro_6.png',
        detailImage: '/pro_6.png',
        description: `Worked as a core developer on XANA, a cutting-edge Web 3.0 Metaverse platform that blends AI, social networking, and decentralized finance (SocialFi) to serve billions of users. Leveraged the MERN stack to develop responsive, user-centric web applications and integrated blockchain functionality using Solidity and smart contracts. Contributed to the creation and deployment of Non-Fungible Tokens (NFTs), enabling digital ownership and asset management within the metaverse. Collaborated closely with cross-functional teams to deliver a secure, scalable, and immersive experience, aligning with the project's vision of building a decentralized infrastructure for the next generation of digital interaction.`,
        type: 'Website',
        languages: 'MERN Stack · Smart Contracts · Solidity · Blockchain · Non-Fungible Tokens (NFTs)',
        platform: 'Custom ',
        country: '',
        liveUrl: 'https://xana.net/',
    },
];

const RecentProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalImage, setModalImage] = useState(null);

    const openImageModal = (image) => {
        setModalImage(image);
    };

    const closeImageModal = () => {
        setModalImage(null);
    };
    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="bg-[#05294a] py-10" id="projects">
            <div className="container ml-auto mr-0 lg:w-[95%] w-full xl:w-[95%] px-4 py-8">
                <div className="text-left">
                    <h6 data-aos="fade-up"
                        data-aos-delay="100"><span className='bg-[rgba(7,136,255,0.2)] text-white uppercase text-xs font-normal leading-5 tracking-[4px] py-1 px-3 rounded-md'>My Work</span></h6>
                    <h2 data-aos="fade-up"
                        data-aos-delay="200" className="text-3xl text-white font-bold mt-2">RECENT PROJECT</h2>
                </div>

                <div className="full-width mt-8 " data-aos="fade-up"
                    data-aos-delay="400">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="!pb-20"
                    >
                        {projects.map(project => (
                            <SwiperSlide key={project.id}>
                                <div className="bg-white rounded-xl p-4 overflow-hidden relative">
                                    <div className="project-media group relative">
                                        <img
                                            src={project.image}
                                            alt="Project 1"
                                            className="w-full h-auto  rounded-lg mb-2 transition-transform transform group-hover:scale-110 group-hover:bg-blend-color group-hover:opacity-40"
                                        />

                                        <span
                                            className="gallery-link absolute left-1/2 top-1/2 bg-blue-50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                            onClick={() => openImageModal(project.image)}
                                        >
                                            <i className="text-xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                                                </svg>
                                            </i>
                                        </span>
                                    </div>
                                    <div className="project-body text-left py-2"
                                    >
                                        <h5 className="text-xl font-semibold">{project.title}</h5>
                                        <span className="text-gray-500 whitespace-nowrap lg:text-sm 2xl:text-lg">{project.subtitle}</span>
                                    </div>
                                    <span className="absolute bottom-2 right-2  p-2 rounded-full">
                                        <button
                                            onClick={() => openModal(project)}
                                            className="inline-flex gap-2 items-center font-medium px-5 py-4 bg-blue-500 uppercase text-white rounded-full "
                                        >
                                            <HiOutlineArrowLongRight />
                                        </button>
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent  bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="relative bg-white p-6 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-auto">
                        <button
                            className="absolute top-2 right-2 text-2xl text-gray-700"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <img src={selectedProject.detailImage} alt="Project Full w-full h-auto" className="rounded-md" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">{selectedProject.title}</h4>
                                <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                                <ul className="text-sm space-y-2">
                                    <li><strong>Type:</strong> {selectedProject.type}</li>
                                    <li><strong>Languages:</strong> {selectedProject.languages}</li>
                                    <li><strong>Platform:</strong> {selectedProject.platform}</li>
                                    <li><strong>Live Url: </strong><a href={selectedProject.liveUrl} target='_blank'>{selectedProject.liveUrl}</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {modalImage && (
                <div className="fixed inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent z-0 flex justify-center items-center z-50">
                    <div className="relative bg-white p-9 rounded-lg">
                        <button
                            className="absolute top-2  mb-3 right-2 text-2xl text-gray-700"
                            onClick={closeImageModal}
                        >
                            &times;
                        </button>
                        <img src={modalImage} alt="Project Full" className="w-full h-[90vh]" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default RecentProjects;
