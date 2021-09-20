import React from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useStore from '../../store'

function SideBarItem({ route, icon, selected, routeName }) {
    const history = useHistory()
    const changeCurrentPage = useStore(state => state.changeCurrentPage)

    const navigate = () => {
        changeCurrentPage(route)
        history.push(route)
    }

    return selected ? (
        <div onClick={navigate} className="h-16 w-full cursor-pointer rounded-md hover:shadow-lg bg-gray-900 flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={icon} size='3x' style={{ color: '#e3e3e3'}} />
            <p className="text-base">{routeName}</p>
        </div>
    ) : (
        <div onClick={navigate} className="h-16 w-full cursor-pointer rounded-md hover:shadow-lg hover:bg-gray-900 flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={icon} size='3x' style={{ color: '#c7c7c7'}} />
            <p className="text-base">{routeName}</p>
        </div>
    )
}

export default SideBarItem
