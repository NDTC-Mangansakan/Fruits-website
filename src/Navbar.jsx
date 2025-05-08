import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [lightDarkBtn, setLightDarkBtn] = useState(false);
    const [openSmallNav, setOpenSmallNav] = useState(false)

    useEffect(() => {
        const bodyElement = document.body;

        if (lightDarkBtn) {
            bodyElement.classList.add("dark");
        } else {
            bodyElement.classList.remove("dark");

        }
        console.log(lightDarkBtn)
    }, [lightDarkBtn]);


    return (
        <nav className="fixed top-0 right-0 left-0 h-[10vh] flex items-center px-[10%] bg-transparent backdrop-blur-sm z-100">
            <div className="w-full flex justify-between">
                <a
                    href="#"
                    className="font-bold text-2xl italic flex items-center gap-x-1"
                >
                    <img src="./src/assets/img/logo.png" alt="" className="w-8" />
                    Fruit
                </a>

                <div className=" hidden lg:flex items-center gap-x-10">
                    <NavLink to="/" className="link">
                        Home
                    </NavLink>
                    <NavLink to="about" className="link">
                        About Us
                    </NavLink>
                    <NavLink to="popular" className="link">
                        Popular
                    </NavLink>
                    <NavLink to="join" className="link">
                        Join Us
                    </NavLink>
                    {lightDarkBtn ? <span 
                                        className="link" 
                                        onClick={() => setLightDarkBtn((prev) => !prev)}
                                    >
                                        <svg className="w-5" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 24 24" 
                                            fill="currentColor"
                                        >
                                            <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                                        </svg>
                                    </span> :
                                    
                                    <span
                                        className="link"
                                        onClick={() => setLightDarkBtn((prev) => !prev)}
                                    >
                                        <svg
                                            className="w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
                                        </svg>
                                    </span>
                    }
                </div>

                <span className="link lg:hidden" onClick={() => setOpenSmallNav(prev => !prev)}>
                    <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                </span>

                {/*For medium and below screen sizes navlinks */}
                <div className={`small-nav fixed ${openSmallNav ? "top-0" : "top-[-300px]"} right-0 left-0 h-[300px] flex flex-col items-center justify-center gap-y-5 ${lightDarkBtn ? "bg-black" : "bg-white"} lg:hidden transition-all duration-300`}>
                    <NavLink to="/" className="link" >
                        <span onClick={() => setOpenSmallNav(prev => !prev)}>Home</span>
                    </NavLink>
                    <NavLink to="about" className="link" >
                        <span onClick={() => setOpenSmallNav(prev => !prev)}>About Us</span>
                    </NavLink>
                    <NavLink to="popular" className="link" >
                        <span onClick={() => setOpenSmallNav(prev => !prev)}>Popular</span>
                    </NavLink>
                    <NavLink to="join" className="link" >
                        <span onClick={() => setOpenSmallNav(prev => !prev)}>Join Us</span>
                    </NavLink>

                    {lightDarkBtn ? <span
                        className="link"
                        onClick={() => setLightDarkBtn((prev) => !prev)}
                    >
                        <svg className="w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                        </svg>
                    </span> :

                        <span
                            className="link"
                            onClick={() => setLightDarkBtn((prev) => !prev)}
                        >
                            <svg
                                className="w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
                            </svg>
                        </span>
                    }

                    <span className="link absolute top-5 right-10" onClick={() => setOpenSmallNav(prev => !prev)}>
                        <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
