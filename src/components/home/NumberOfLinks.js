import React from 'react'

function NumberOfLinks() {
    return (
        <div className="rounded-md bg-gray-100 shadow-sm m-4 w-2/4 p-10 flex flex-col items-center justify-between">
            <h1 className="font-bold text-lg">Total number of links</h1>
            <br />
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h2 className="font-semibold text-base">0</h2>
            </div>
        </div>
    )
}

export default NumberOfLinks
