import React from 'react'

function TextInput({ placeholder, changed, ...rest }) {
    return (
        <input type="text" {...rest} placeholder={placeholder} onChange={e => changed(e.target.value)} className="w-5/6 h-12 border-2 border-black outline-none rounded-md text-lg p-3 bg-gray-200 hover:bg-gray-100 focus:bg-gray-100" />
    )
}

export default TextInput
