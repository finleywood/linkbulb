import React from 'react'
import DropdownMenu from './DropdownMenu'

function Navbar({ currentPage }) {
    return (
        <nav className="w-full h-14 sticky flex flex-row items-center justify-between shadow-md bg-white px-7 py-5">
            <h1 className="text-2xl font-light font-default">{currentPage}</h1>
            <DropdownMenu />
        </nav>
    )
}

export default Navbar
