import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const handleClick = (item) => {
        if (item === 'Home') {
            navigate('/')
        }
        else if (item === 'Work') {
            navigate('/work')
        }
        else if (item === 'Services') {
            navigate('/services')
        }
        else if (item === 'About') {
            navigate('/about')
        }
        else if (item === 'Contact') {
            navigate('/contact')
        }
    }
    return (
        <>
            <header>
                <div className="navbar flex items-center p-1 bg-opacity-30 backdrop-blur-lg 
                     text-white text-xl fixed top-0 left-0 w-full z-50  anim1"  style={{ animationDelay: "1s" }}>
                    {/* Logo */}
                    <div className="logo pr-[4rem]">
                        <img
                            className="h-[4rem] hover:scale-110 transition-all duration-300"
                            src="cars_logo.png"
                            alt="logo"
                        />
                    </div>

                    {/* Pages */}
                    <div className="">
                        <ul className="flex  gap-8 hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex">
                            {['Home', 'Work', 'Services', 'About', 'Contact'].map((item) => (
                                <li
                                    onClick={() => handleClick(item)}
                                    key={item}
                                    className="relative cursor-pointer transition-all duration-300 text-black hover:text-black 
                         after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 
                         after:h-[2px] after:bg-blue-100 after:transition-all after:duration-300 
                         hover:after:w-full font-hero4 md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[20px]
                        "


                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="justify-end ms-auto">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
        bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span onClick={() => navigate("/cart")} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                Cart
                            </span>
                        </button>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Navbar
