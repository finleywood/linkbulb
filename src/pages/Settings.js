import React from 'react'
import Navbar from '../components/main/Navbar'
import SideBar from '../components/main/SideBar'

function Settings() {
    return (
        <div className="w-full h-screen flex flex-row items-start justify-start">
            <SideBar />
            <div className="w-full h-screen">
                <Navbar currentPage="Settings" />
            </div>
        </div>
    )
}

export default Settings
