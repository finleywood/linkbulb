import React, { useState, useEffect, useRef } from 'react'
import useStore from '../../store'
import CryptoJS from 'crypto-js'
import { Link } from 'react-router-dom'

function DropdownMenu() {
    const loggedInUser = useStore(state => state.loggedInUser)
    const [dropdownOpen, changeDropdownOpen] = useState(false)
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            changeDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const gravatarUrl = () => {
        const hash = CryptoJS.MD5(loggedInUser.email)
        return `https://www.gravatar.com/avatar/${hash}.jpg`
    }

    return (
        <div ref={ref} className="p-10">
            <div className="dropdown inline-block relative">
                <button onClick={() => changeDropdownOpen(!dropdownOpen)} className="bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <img width="25" height="25" className="rounded-full mr-2" src={gravatarUrl()} />
                    <span className="mr-1">{loggedInUser.firstName} {loggedInUser.lastName}</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                {dropdownOpen ? 
                    (
                        <ul className="dropdown-menu absolute block text-gray-700 border-2 rounded-md">
                            <li className="rounded-t bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"><Link className="pr-24" to="/settings">Profile</Link></li>
                            <li className="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"><Link className="pr-24" to="/logout">Logout</Link></li>
                        </ul>
                    ) : null
                }
            </div>
        </div>
    )
}

export default DropdownMenu
