import React from 'react'
import SideBarItem from './SideBarItem'
import { faHome, faLink, faChartBar, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import useStore from '../../store'
import { useHistory } from 'react-router-dom'

function SideBar() {
    const history = useHistory()
    const currentPage = useStore(state => state.currentPage)
    const changeCurrentPage = useStore(state => state.changeCurrentPage)

    const clickLogo = () => {
        changeCurrentPage("/")
            history.push("/")
    }

    return (
        <div className="w-28 h-full sticky bg-gray-800 flex flex-col align-center justify-between p-5">
            <img onClick={clickLogo} className="hover:shadow-lg cursor-pointer" src="/assets/png/LinkBulbInverted.png" alt="LinkBulb" />
            <SideBarItem route="/" selected={currentPage === "/"} icon={faHome} />
            <SideBarItem route="/links" selected={currentPage === "/links"} icon={faLink} />
            <SideBarItem route="/analytics" selected={currentPage === "/analytics"} icon={faChartBar} />
            <SideBarItem route="/settings" selected={currentPage === "/settings"} icon={faCog} />
            <SideBarItem route="/logout" selected={currentPage === "/logout"} icon={faSignOutAlt} />
        </div>
    )
}

export default SideBar
