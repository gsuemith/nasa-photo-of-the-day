import React, { useState } from 'react'
import {
    Card as CardStrap, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse
  } from 'reactstrap';
import styled, { keyframes } from 'styled-components'

// const kf = styled.keyframes`
  
// `
const Card = ({apod, featured}) => {
    const [more, setMore] = useState(false);
    const toggle = () => {
        setMore(!more);
    }

    return (
        apod && 
        <CardStrap 
        className="shadow m-3 bg-light rounded-0"
        style={{width: featured ? 630: 300, transition: 'height 1s ease-in-out'}}>
            
            <a 
                href={`https://apod.nasa.gov/apod/ap${apod.date.split('-').join('').substring(2,8)}.html`}
                target={"_blank"}>
                <CardImg 
                    src={apod.media_type === 'image' 
                        ? apod.url       //vvv Placeholder image for videos vvv
                        : 'https://apod.nasa.gov/apod/image/9805/ladder_a11.jpg'} 
                    alt={apod.title} 
                    style={{width: '100%', height:(featured ? 630: 300), borderRadius: 0}}
                />
            </a>
            
            <CardBody>
                <CardSubtitle tag="h7" className="text-muted">
                    {(new Date(apod.date)).toLocaleDateString('en-US', {month: 'short', day:'numeric', year: 'numeric'})}
                </CardSubtitle>
                <CardTitle tag="h4" style={{minHeight: featured ? '2em': '4em'}}>
                    {apod.title}
                </CardTitle>
                <CardSubtitle tag="h6" className="text-muted" style={{minHeight: featured ? '1em': '2.5em'}}>
                    &copy; {apod.copyright}
                </CardSubtitle>
                
                <CardText className="text-justify py-0 px-3 h-30" style={{minHeight: featured ? '3em': '12em'}}>
                    {!more && apod.explanation.substring(0,200) + ' . . .'}
                    <Collapse isOpen={more}>
                        {apod.explanation}
                    </Collapse>
                </CardText>
                
                
                <Button onClick={toggle} color={more ? "warning":"info"}>
                    {more ? '-':'+'}
                </Button>
              
            </CardBody>
            
        </CardStrap>
        
    )
}
// Example APOD data
//   data:
// date: "2021-02-13"
// explanation: "Get out your red/blue glasses and float next to asteroid 433 Eros. Orbiting the Sun once every 1.8 years, the near-Earth asteroid is named for the Greek god of love. Still, its shape more closely resembles a lumpy potato than a heart. Eros is a diminutive 40 x 14 x 14 kilometer world of undulating horizons, craters, boulders and valleys. Its unsettling scale and unromantic shape are emphasized in this mosaic of images from the NEAR Shoemaker spacecraft processed to yield a stereo anaglyphic view.  Along with dramatic chiaroscuro, NEAR Shoemaker's 3-D imaging provided important measurements of the asteroid's landforms and structures, and clues to the origin of this city-sized chunk of Solar System. The smallest features visible here are about 30 meters across. Beginning on February 14, 2000, historic NEAR Shoemaker spent a year in orbit around Eros, the first spacecraft to orbit an asteroid. Twenty years ago, on February 12 2001, it landed on Eros, the first ever landing on an asteroid's surface. NEAR Shoemaker's final transmission from the surface of Eros was on February 28, 2001."
// hdurl: "https://apod.nasa.gov/apod/image/2102/PIA02471_800.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Stereo Eros"
// url: "https://apod.nasa.gov/apod/image/2102/PIA02471_800.jpg"

export default Card
