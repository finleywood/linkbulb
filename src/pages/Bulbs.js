import React, { useEffect } from 'react'
import Navbar from '../components/main/Navbar'
import SideBar from '../components/main/SideBar'
import useStore from '../store'

function Bulbs() {

    const changeCurrentPage = useStore(state => state.changeCurrentPage)

    useEffect(() => {
        changeCurrentPage("/bulbs")
    }, [])

    return (
        <div className="w-full h-screen flex flex-row items-start justify-start">
            <SideBar />
            <div className="w-full h-screen">
                <Navbar currentPage="My Bulbs" />
            </div>
        </div>
    )
}

export default Bulbs
