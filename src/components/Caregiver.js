import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import { Card, ListGroup, ListGroupItem, Col, Button } from 'react-bootstrap'


class Caregiver extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
    showAbout: false
  }
  this.toggleShowAbout = this.toggleShowAbout.bind(this)
}

toggleShowAbout() {
  this.setState({showAbout: !this.state.showAbout})
}

  render () {
    return (
        <>
            <Card bg="info" border="success" style={{width: '14rem'}} className="overflow-auto">
            <Card.Body>
            <Card.Title>Name: {this.props.caregiver.name}</Card.Title>
            <Card.Text>
            <button onClick={this.toggleShowAbout}>More info</button>
            {
              this.state.showAbout
              ? (this.props.caregiver.description)
              : ("")
            }

            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>Phone: {this.props.caregiver.phone}</ListGroupItem>
            <ListGroupItem>Email: {this.props.caregiver.email}</ListGroupItem>
            <ListGroupItem>Location: {this.props.caregiver.location}</ListGroupItem>
            <ListGroupItem>Rating: {this.props.caregiver.rating} stars</ListGroupItem>
            </ListGroup>
            <Card.Footer>
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
            </Card.Footer>
            </Card>
        </>
    )
  }
}

export default Caregiver
