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
                        <h2>{caregiver.name}</h2>
                    )
                })}
            </div>
        </div>
    )
  }
}
export default ShowCaregivers
