import React from 'react'
import Card from './Card'

const Album = ({apod}) => {
    return (
        <div>
            <Card apod={apod}/>
        </div>
    )
}

export default Album
