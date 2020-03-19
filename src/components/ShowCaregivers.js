import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CardColumns from 'react-bootstrap/CardColumns'


class ShowCaregivers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render () {
    return (
      <div className="container">
      <CardColumns>

      {this.props.caregivers.map((caregiver, index) => {
        return(
          <Card bg="info" border="success" style={{width: '14rem'}} className="overflow-auto">
          <Card.Body>
          <Card.Title>{ caregiver.name }</Card.Title>
          <Card.Text>
          {caregiver.description}
          </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>Phone: {caregiver.phone}</ListGroupItem>
          <ListGroupItem>Email: {caregiver.email}</ListGroupItem>
          <ListGroupItem>Location: {caregiver.location}</ListGroupItem>
          <ListGroupItem>Rating: {caregiver.rating} stars</ListGroupItem>
          </ListGroup>
          <Card.Body>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
          </Card>

        )
      })}
      </CardColumns>

      </div>
    )
  }
}
export default ShowCaregivers
