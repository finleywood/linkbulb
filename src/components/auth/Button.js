import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button({ text, clicked, loading }) {
    return (
        <button disabled={loading} onClick={clicked} className="w-5/6 h-10 rounded-sm bg-green-500 hover:shadow-md">
            {loading ? <FontAwesomeIcon icon={faSpinner} spin={true} /> : text}
        </button>
    )
}

export default Button
