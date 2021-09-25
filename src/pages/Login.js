import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm'
import useStore from '../store'
import axios from 'axios'

function Login() {
    const isLoggedIn = useStore(state => state.loggedIn)
    const changeLoggedIn = useStore(state => state.changeLoggedIn)
    const changeLoggedInUser = useStore(state => state.changeLoggedInUser)
    const history = useHistory()

    useEffect(() => {
        if(!isLoggedIn) {
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/v1/users/user`, { withCredentials: true }).then(response => {
                if(response.status === 200) {
                    const loggedInUser = {
                        id: response.data.ID,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                        tier: response.data.tier
                    }
                    changeLoggedInUser(loggedInUser)
                    changeLoggedIn(true)
                    history.push("/")
                }
            }).catch(error => {})
        } else {
            history.push("/")
        }
    }, [])

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-green-100">
            <img src="/assets/png/LinkBulb.png" alt="LinkBulb" height="150" width="150" className="hover:shadow-md rounded-md cursor-pointer" />
            <br />
            <LoginForm />
        </div>
    )
}

export default Login
