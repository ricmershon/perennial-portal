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
  }


  render () {
    return (
      <div className="container">
      <CardColumns>

      {this.props.caregivers.map((caregiver, index) => {
        return(
          <Caregiver caregiver={caregiver} index={index}/>
        )
      })}
      </CardColumns>

      </div>
    )
  }
}
export default ShowCaregivers
