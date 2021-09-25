import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom';
import useStore from '../store'

function PrivateRoute({ component: Component, ...rest }) {
    const isLoggedIn = useStore(state => state.loggedIn)
    const changeLoggedIn = useStore(state => state.changeLoggedIn)
    const changeLoggedInUser = useStore(state => state.changeLoggedInUser)

    const [loading, changeLoading] = useState(true)

    useEffect(() => {
        if(!isLoggedIn) {
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/v1/users/user`).then(response => {
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
                    changeLoading(false)
                } else {
                    changeLoading(false)
                }
            }).catch(error => {
                console.log(error.response)
                changeLoading(false)
            })
        } else {
            changeLoading(false)
        }
    }, [])


    return loading ? (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faSpinner} spin={true} />
        </div>
    ) : (
        <Route 
            {...rest}
            render={props => 
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location }}} />
                )
            }
        />
    )
}

export default PrivateRoute
