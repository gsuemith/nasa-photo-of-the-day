import React from 'react'
import Card from './Card'

const Album = ({apod, images}) => {
    return (
        <div className="album pictures">
            <Card apod={apod} featured={true}/>
            {images && 
                images.map(image => {
                    return <Card key={image.date} apod={image}/>
            })}
        </div>
    )
}

export default Album
