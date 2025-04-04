import React, { useState, useEffect } from 'react';

function Header() {
    const [activeLink, setActiveLink] = useState("#home");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            setScrolled(scrollTop > 50);

            sections.forEach((section) => {
                const offset = section.offsetTop - 80;
                const height = section.offsetHeight;
                const id = section.getAttribute("id");

                if (scrollTop >= offset && scrollTop < offset + height) {
                    setActiveLink(`#${id}`);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (href) => {
        setActiveLink(href);
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 uppercase transition-all duration-500 ${scrolled ? "bg-black shadow-md" : "bg-[#041c33]"
                }`}
        >
            <div className="lg:container lg:mx-auto px-4 py-4 flex lg:justify-around justify-between items-center">
                <div>
                    <a href="/">
                        <h1 className='text-[2rem] tracking-[0.0625em] font-space text-white font-bold'>ADEEL JAVED</h1>
                    </a>
                </div>

                <nav className="hidden lg:flex text-white tracking-[0.0625em] space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(item.href);
                            }}
                            className={`relative font-medium pb-1
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300
        ${activeLink === item.href ? 'after:scale-x-100' : ''}
      `}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center space-x-3">
                    <a
                        href="#contact"
                        className="hidden tracking-[0.0625em] cursor-pointer font-medium lg:inline-block px-9 py-4 bg-[rgb(var(--px-theme-rgb))] text-white rounded-[40px] transition"
                    >
                        Let's Talk
                    </a>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden flex flex-col justify-center items-center space-y-1 ml-4 h-10 px-4 border border-white/20 rounded-md text-white bg-transparent"
                    >
                        <span className="w-6 h-0.5 bg-white transition"></span>
                        <span className="w-6 h-0.5 bg-white transition"></span>
                        <span className="w-6 h-0.5 bg-white transition"></span>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 flex flex-col bg-[#040c16] border-t border-white/20 shadow-md px-5 py-4 z-40 text-white space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(item.href);
                                setMenuOpen(false);
                            }}
                            className={`relative font-medium pb-1
                                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:max-w-fit after:origin-left after:scale-x-0 after:transition-transform after:duration-500
                                ${activeLink === item.href ? 'after:scale-x-100' : ''}
                              `}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Header;
