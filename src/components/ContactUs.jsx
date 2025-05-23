import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaSquareUpwork } from "react-icons/fa6";

const ContactUs = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setMessage('');

        emailjs.sendForm(
            'service_68s635a',
            'template_sqk1gfe',
            formRef.current,
            'xXn1aiv_qHXKGOjfs'
        )
            .then(() => {
                setMessage(' Message sent successfully!');

                formRef.current.reset();
                setTimeout(() => setMessage(''), 2000);

            }, (error) => {
                console.error(error.text);
                setMessage(' Failed to send message. Please try again.');
                setTimeout(() => setMessage(''), 2000);

            })
            .finally(() => setIsSending(false));
    };

    return (
        <section id="contact" className="py-16 rounded-xl">
            <div className="container mx-auto rounded-xl px-4">
                <div className="text-white rounded-xl overflow-visible shadow-lg">
                    <div className="flex bg-[#05294a] rounded-t-xl flex-col lg:flex-row gap-8 p-6 lg:p-16 relative">
                        <div className="lg:w-1/3 flex justify-center items-center overflow-visible relative">
                            <img
                                src="/banner-image.jpeg"
                                alt="Contact Banner"
                                className="w-full h-auto rounded-xl lg:block hidden object-contain absolute top-0 left-0"
                                style={{
                                    maxHeight: "400px",
                                    width: "100%",
                                    objectFit: "cover",
                                    zIndex: 1,
                                }}
                            />
                        </div>
                        <div className="lg:w-2/3 flex flex-col justify-center relative z-10">
                            <div>
                                <h5 className="text-2xl font-semibold mb-2">Let’s Discuss Your Project</h5>
                                <p className="text-white">Always available for freelancing if the right project comes along. Feel free to contact me.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse bg-[#06335d] lg:flex-row gap-8 p-6 lg:p-16 relative">
                        <div className="lg:w-1/3">
                            <div className="space-y-4 lg:pt-40 xl:pt-[60%]">
                                <div>
                                    <label className="block text-sm text-gray-100"> E-mail</label>
                                    <a href="mailto:javedadeel52@gmail.com" className="text-blue-600 hover:underline">javedadeel52@gmail.com</a>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-100">Call us</label>
                                    <a href="tel:+923224218770" className="text-blue-600 hover:underline">+92 322 4218770</a>
                                </div>
                                <div className="flex space-x-4 pt-4">
                                    <a href="https://www.linkedin.com/in/adeeljaved-/" target="_blank" className="w-12 h-12 rounded-full border-2 border-white flex justify-center items-center hover:bg-blue-600">
                                        <FaLinkedin className="text-white text-xl" />
                                    </a>
                                    <a href="https://www.upwork.com/freelancers/~01d08a841e5935f0f8?companyReference=1116069956964913153&mp_source=share" target="_blank" className="w-12 h-12 rounded-full border-2 border-white flex justify-center items-center hover:bg-blue-600">
                                        <FaSquareUpwork className="text-white text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-100 mb-1">Your Name</label>
                                        <input name="name" type="text" required placeholder="Name *" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-100 mb-1">Your Email</label>
                                        <input name="email" type="email" required placeholder="Email *" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-100 mb-1">Subject</label>
                                    <input name="subject" type="text" required placeholder="Subject *" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-100 mb-1">Your Message</label>
                                    <textarea name="message" rows="4" required placeholder="Your message *" className="w-full border border-gray-300 rounded-lg px-4 py-2"></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSending}
                                        className={`w-full rounded-lg px-4 py-2 transition duration-300 ${isSending ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 text-white'
                                            }`}
                                    >
                                        {isSending ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                                {message && <p className="text-white mt-2">{message}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
