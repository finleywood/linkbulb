import React, { useState } from 'react'
import TextInput from './TextInput'
import PasswordInput from './PasswordInput'
import Button from './Button'
import axios from 'axios'
import useStore from '../../store'
import { useHistory } from 'react-router-dom'

function LoginForm() {
    const [email, changeEmail] = useState("")
    const [password, changePassword] = useState("")
    const [loading, changeLoading] = useState(false)
    const [error, changeError] = useState("")

    const changeLoggedIn = useStore(state => state.changeLoggedIn)
    const changeLoggedInUser = useStore(state => state.changeLoggedInUser)

    const history = useHistory()

    const loginClicked = () => {
        if(email !== "" && password !== "") {
            changeLoading(true)
            const user = {
                email: email,
                password: password
            }
            axios.post(`${process.env.REACT_APP_API_BASE_URL}/v1/users/auth/login`, user).then((response) => {
                if(response.status === 200) {
                    axios.get(`${process.env.REACT_APP_API_BASE_URL}/v1/users/user`).then((response) => {
                        const loggedInUser = {
                            id: response.data.ID,
                            firstName: response.data.firstName,
                            lastName: response.data.lastName,
                            email: response.data.email,
                            tier: response.data.tier
                        }
                        changeLoggedInUser(loggedInUser)
                    }).catch(error => {})
                    changeLoggedIn(true)
                    history.push("/")
                }
            }).catch(error => {
                if(error.response.status === 404) {
                    changeError("Email or password incorrect!")
                    changeLoading(false)
                }
            })
        }
    }

    return (
        <div className="h-3/5 md:w-2/6 w-4/6 rounded-xl bg-green-200 hover:shadow-lg flex flex-col items-center justify-evenly">
            <TextInput placeholder="Email Address" changed={changeEmail} />
            <PasswordInput placeholder="Password" changed={changePassword}  />
            {error === "" ? null : <span className="text-md text-red-600">{error}</span>}
            <Button text="Login" clicked={loginClicked} loading={loading} />
        </div>
    )
}

export default LoginForm
