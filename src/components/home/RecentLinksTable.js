import React from 'react'

function RecentLinksTable() {
    return (
            <table className="rounded-lg w-full bg-gray-50">
                <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">Link</th>
                        <th className="px-4 py-3">Clicks</th>
                        <th className="px-4 py-3">Created</th>
                    </tr>
                </thead>
            </table>
    )
}

export default RecentLinksTable
