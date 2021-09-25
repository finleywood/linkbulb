import React, { useEffect } from 'react'
import NumberOfLinks from '../components/home/NumberOfLinks'
import PopularLink from '../components/home/PopularLink'
import RecentLinksTable from '../components/home/RecentLinksTable'
import Navbar from '../components/main/Navbar'
import SideBar from '../components/main/SideBar'
import useStore from '../store'

function Home() {

    const changeCurrentPage = useStore(state => state.changeCurrentPage)

    useEffect(() => {
        changeCurrentPage("/")
    }, [])

    return (
        <div className="w-full h-screen flex flex-row items-start justify-start">
            <SideBar />
            <div className="w-full h-screen">
                <Navbar currentPage="Home" />
                <div className="w-full h-full p-10 flex flex-col items-start justify-start">
                    <div className="w-full flex flex-row items-center justify-center">
                        <NumberOfLinks />
                        <PopularLink />
                    </div>
                    <br />
                    <RecentLinksTable />
                </div>
            </div>
        </div>
    )
}

export default Home
