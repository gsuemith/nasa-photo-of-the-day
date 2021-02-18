import React from 'react'
import {
    Form, Label, Input, Card, CardImg,
    CardBody, CardTitle, CardSubtitle, 
    CardText
} from 'reactstrap'

const FeaturedPhoto = ({apod}) => {
    return (
        <Form >
        <div className="w-25" >
            <Label for="pick-date">Astronomy Picture of   </Label>
            <Input type="date" name="pick-date" className="ml-10 mr-10"/>
            {/* <Card 
        className="shadow"
        style={{width: 600, display: 'block', overflow: 'auto', margin: '1em', backgroundColor: 'white', borderRadius: 0}}>
            
            <a 
                href={`https://apod.nasa.gov/apod/ap${apod.date.split('-').join('').substring(2,8)}.html`}
                target={"_blank"}>
                <CardImg src={apod.url} alt={apod.title} style={{width: '100%', height:300, borderRadius: 0}}/>
            </a>
            
            <CardBody>
                <CardTitle tag="h4" style={{minHeight: '4em'}}>{apod.title}</CardTitle>
                <CardSubtitle tag="h6" className="text-muted" style={{minHeight: '2.5em'}}>&copy; {apod.copyright}</CardSubtitle>
                <CardText style={{textAlign: 'justify', padding: '0 1em', minHeight: '12em'}}>
                    {apod.explanation}
                </CardText>
              
            </CardBody>
            
        </Card> */}
        </div>
        </Form>
    )
}

export default FeaturedPhoto
