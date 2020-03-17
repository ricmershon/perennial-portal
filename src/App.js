import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewCaregiver from './components/NewCaregiver.js'
import ShowCaregivers from './components/ShowCaregivers.js'
import UpdateCaregiver from './components/UpdateCaregiver.js'


let baseURL = process.env.REACT_APP_BASEURL

// Determines baseURL for dev or deployment
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://our-Heroku-app-name.herokuapp.com'
}
console.log('current base URL:', baseURL)


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      caregivers: []
    }
    this.getCaregivers = this.getCaregivers.bind(this)
    this.handleAddCaregiver = this.handleAddCaregiver.bind(this)
    this.handleEditCaregiver = this.handleEditCaregiver.bind(this)
    this.deleteCaregiver = this.deleteCaregiver.bind(this)
  }

    componentDidMount(){ //populates caregivers list on load.
        this.getCaregivers()
      }

// API Connection Functions:

    async getCaregivers (){
        try {
          let response = await fetch(`${baseURL}/perennial-api`)
          let data = await response.json()
          this.setState({caregivers: data})
        }catch(e){
          console.error(e)
        }
      }

    async handleAddCaregiver(caregiver) {
        try {
            let response = await fetch(`${baseURL}/perennial-api`, {
                method: 'POST',
                body: JSON.stringify(caregiver),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let newCaregiver = await response.json()
            const updatedCaregivers = [newCaregiver, ...this.state.caregivers]
              this.setState({
                caregivers: updatedCaregivers,
              })
        } catch(e) {
            console.error(e);
        }
    }

    async handleEditCaregiver(caregiver) {
        try {
            let response = await fetch(`${baseURL}/perennial-api/${caregiver._id}`, {
                method: 'PUT',
                body: JSON.stringify(caregiver),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let updatedCaregiver = response.json()
            let updatedCaregiverIndex = this.state.caregivers.findIndex(caregiver => caregiver._id === updatedCaregiver._id)
            let tempDatabase = this.state.caregivers
            tempDatabase[updatedCaregiverIndex] = updatedCaregiver
            this.setState({
                caregivers: tempDatabase
            })
        } catch(e) {
            console.error(e);
        }
    }

    async deleteCaregiver(caregiver) {
        try {
            let response = await fetch(`${baseURL}/perennial-api/${caregiver._id}`, {
                method: 'DELETE'
            })
            let deletedCaregiver = response.json()
            let deletedCaregiverIndex = this.state.caregivers.findIndex(caregiver => caregiver._id === deletedCaregiver._id)
            let tempDatabase = this.state.caregivers
            tempDatabase.splice(deletedCaregiverIndex, 1)
            this.setState({
                caregivers: tempDatabase
            })
        } catch (e) {
            console.error(e);
        }
    }

render () {
  return (
    <React.Fragment>
    <h1>Main Page</h1>
    <NewCaregiver handleAddCaregiver={this.handleAddCaregiver} />

    <ShowCaregivers caregivers={this.state.caregivers}/>

    <UpdateCaregiver handleEditCaregiver={this.handleEditCaregiver} deleteCaregiver={this.deleteCaregiver}/>
    <h3>Brought to you by Main Pages, llc., a subsidiary of the NRJ (Nathaniel/Ric/Johnny) Corporation.</h3>
    </React.Fragment>
  )
}
}
export default App
