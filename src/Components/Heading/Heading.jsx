import React from 'react'
import { useLocation } from 'react-router-dom'

function Heading({ text }) {
    const { pathname } = useLocation();
    return (
        <>
            <h1 className={`${pathname === "/" || pathname === "/about" ? "text-white" : "text-black"} uppercase text-5xl mt-5 text-white font-bold`}>{text}</h1>
        </>
    )
}

export default Heading