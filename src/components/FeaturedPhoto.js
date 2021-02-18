import React from 'react'
import {
    Form, Label, Input, Card, CardImg,
    CardBody, CardTitle, CardSubtitle, 
    CardText
} from 'reactstrap'

const FeaturedPhoto = ({ date, setDate}) => {
    return (
        <Form >
        <div className="w-25" >
            <Label for="pick-date">Astronomy Picture of   </Label>
            <Input type="date" name="pick-date" className="ml-10 mr-10"
            onChange={e => {
                setDate(e.target.value); console.log((new Date()).getUTCDate())
            }}/>
        </div>
        </Form>
    )
}

export default FeaturedPhoto
