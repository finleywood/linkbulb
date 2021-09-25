import React, { useEffect } from 'react'
import Navbar from '../components/main/Navbar'
import SideBar from '../components/main/SideBar'
import UserInfo from '../components/settings/UserInfo'
import useStore from '../store'

function Settings() {
    const changeCurrentPage = useStore(state => state.changeCurrentPage)

    useEffect(() => {
        changeCurrentPage("/settings")
    }, [])

    return (
        <div className="w-full h-screen flex flex-row items-start justify-start">
            <SideBar />
            <div className="w-full h-screen flex flex-col items-start justify-start">
                <Navbar currentPage="Settings" />
                <div className="w-full h-full flex flex-col items-center justify-start p-16">
                    <UserInfo />
                </div>
            </div>
        </div>
    )
}

export default Settings
