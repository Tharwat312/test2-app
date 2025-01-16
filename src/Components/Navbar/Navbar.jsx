import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        }
        else setScrolling(false);
    }

    const [isScrolling, setScrolling] = useState(false);
    window.addEventListener("scroll", handleScroll);

    return (
        <nav className={`${isScrolling === false ? "py-10" : "py-6"} transition-[padding] duration-500 fixed top-0 left-0 right-0 z-10 bg-[#2C3E50]`}>
            <div className="container flex justify-between">
                <h2>
                    <Link className='text-white uppercase text-3xl font-bold' to={""}>
                        start framework
                    </Link>
                </h2>
                <ul className='center gap-x-5'>
                    <li>
                        <NavLink className={"uppercase text-white font-bold text-xl p-3"} to={"about"}>
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={"uppercase text-white font-bold text-xl p-3"} to={"portfolio"}>
                            portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={"uppercase text-white font-bold text-xl p-3"} to={"contact"}>
                            contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar