import axios from 'axios'
import React, { useEffect } from 'react'
import useStore from '../store'
import { useHistory } from 'react-router-dom'

function Logout() {
    const changeLoggedIn = useStore(state => state.changeLoggedIn)
    const changeLoggedInUser = useStore(state => state.changeLoggedInUser)

    const history = useHistory()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/v1/users/auth/logout`, { withCredentials: true }).then(response => {
            changeLoggedIn(false)
            changeLoggedInUser({})
            history.push("/login")
        }).catch((error) => {
            changeLoggedIn(false)
            changeLoggedInUser({})
            history.push("/login")
        })
    }, [])

    return (
        <div className="w-full h-screen flex flex-col items-center justify-start">
            <h1 className="mt-14 text-3xl font-bold">Logging you out, just a moment!</h1>
        </div>
    )
}

export default Logout
