import React from 'react'
import Card from './Card'

const Album = ({apod, images}) => {
    return (
        <div className="album">
            <Card apod={apod}/>
            {images && 
                images.map(image => {
                    return <Card key={image.date} apod={image}/>
            })}
        </div>
    )
}

export default Album
