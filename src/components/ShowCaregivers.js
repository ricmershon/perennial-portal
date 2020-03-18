import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CardColumns from 'react-bootstrap/CardColumns'


class ShowCaregivers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showAbout: false
    }
    this.toggleShowAbout = this.toggleShowAbout.bind(this)
  }

  toggleShowAbout () {
    this.setState({showAbout: !this.state.showAbout})
}

  render () {
    return (
      <div className="container">
      <CardColumns>

      {this.props.caregivers.map((caregiver, index) => {
        return(
          <Card bg="info" border="success" style={{width: '14rem'}} className="overflow-auto">
          <Card.Body>
          <Card.Title>Name: {caregiver.contact.firstName} {caregiver.contact.lastName}</Card.Title>
          <Card.Text>
          <button onClick={this.toggleShowAbout}>More info</button>
          {
            this.state.showAbout
            ? (caregiver.description)
            : ("")
          }

          </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>Phone: {caregiver.phone}</ListGroupItem>
          <ListGroupItem>Email: {caregiver.email}</ListGroupItem>
          <ListGroupItem>Location: {caregiver.location}</ListGroupItem>
          <ListGroupItem>Rating: {caregiver.rating} stars</ListGroupItem>
          </ListGroup>
          <Card.Footer>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
          </Card.Footer>
          </Card>

        )
      })}
      </CardColumns>

      </div>
    )
  }
}
export default ShowCaregivers
