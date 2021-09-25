import React, { useEffect } from 'react'
import Navbar from '../components/main/Navbar'
import SideBar from '../components/main/SideBar'
import useStore from '../store'

function Analytics() {

    const changeCurrentPage = useStore(state => state.changeCurrentPage)

    useEffect(() => {
        changeCurrentPage("/analytics")
    }, [])

    return (
        <div className="w-full h-screen flex flex-row items-start justify-start">
            <SideBar />
            <div className="w-full h-screen">
                <Navbar currentPage="Analytics" />
            </div>
        </div>
    )
}

export default Analytics
