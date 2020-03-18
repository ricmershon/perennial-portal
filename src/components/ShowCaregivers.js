import React from 'react'

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
            <h1>Caregiver cards</h1>
            <div>
                {this.props.caregivers.map((caregiver, index) => {
                    return(
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>{caregiver.firstName}{caregiver.lastName}</Card.Title>
                        <Card.Text>
                        {caregiver.description}
                        </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroupItem>{caregiver.phone}</ListGroupItem>
                        <ListGroupItem>{caregiver.email}</ListGroupItem>
                        <ListGroupItem>{caregiver.location}</ListGroupItem>
                        <ListGroupItem>{caregiver.rating}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                        <Card.Link href="#">Edit</Card.Link>
                        <Card.Link href="#">Delete</Card.Link>
                        </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
  }
}
export default ShowCaregivers
