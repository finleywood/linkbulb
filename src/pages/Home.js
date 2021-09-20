import React from 'react'
import Navbar from '../components/main/Navbar'
import SideBar from '../components/main/SideBar'

function Home() {
    return (
        <div className="w-full h-screen flex flex-row items-start justify-start">
            <SideBar />
            <div className="w-full h-screen">
                <Navbar currentPage="Home" />
            </div>
        </div>
    )
}

export default Home
