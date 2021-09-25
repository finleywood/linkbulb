import React from 'react'
import useStore from '../../store'
import TextInput from '../auth/TextInput'

function UserInfo() {
    const loggedInUser = useStore(state => state.loggedInUser)

    const getTier = () => {
        switch(loggedInUser.tier) {
            case 0:
                return "Free"
            case 1:
                return "Pro"
            default:
                return "Free"
        }
    }

    return (
        <div className="w-full p-10 rounded-sm bg-gray-100 shadow-sm">
            <span>First Name: <TextInput placeholder="First Name" disabled={true} value={loggedInUser.firstName} /></span><br /><br />
            <span>Last Name: <TextInput placeholder="Last Name" disabled={true} value={loggedInUser.lastName} /></span><br /><br />
            <span>Email: <TextInput placeholder="Email" disabled={true} value={loggedInUser.email} /></span><br /><br />
            <span>Plan: {getTier()}</span>
        </div>
    )
}

export default UserInfo
