import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Jumbotron, Navbar, Nav } from 'react-bootstrap'
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
      caregivers: [],
      caregiver: {},
      showNewForm: false,
      showUpdateModal: false
    }
    this.getCaregivers = this.getCaregivers.bind(this)
    this.handleAddCaregiver = this.handleAddCaregiver.bind(this)
    this.handleEditCaregiver = this.handleEditCaregiver.bind(this)
    this.deleteCaregiver = this.deleteCaregiver.bind(this)
    this.toggleNewForm = this.toggleNewForm.bind(this)
    this.toggleUpdateModal = this.toggleUpdateModal.bind(this)
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
        this.setState({ showNewForm: false })
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
        console.log('inside handlecaregiver with', caregiver);
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

    toggleNewForm() {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    toggleUpdateModal(caregiverData) {
        this.setState({ showUpdateModal: !this.state.showUpdateModal })
        this.setState({ caregiver: caregiverData })
    }

    render () {
        return (
            <React.Fragment>
                <Container>
                    <Navbar bg="primary" expand="lg" variant="dark">
                        <Navbar.Brand href="#home">Perennial Portal</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto text-right">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link onSelect={ this.toggleNewForm } href="#link">New</Nav.Link>
                                <Nav.Link href="#link">Edit</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                    <Jumbotron>
                        <h1>Big Box at Top</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Click to learn the answer to Life, The Universe, and Everything</Button>
                        </p>
                    </Jumbotron>
                </Container>

                {
                    this.state.showNewForm ?
                    (<NewCaregiver
                        handleAddCaregiver={ this.handleAddCaregiver }
                    />) : ''
                }

                {
                    this.state.showUpdateModal ?
                    (<UpdateCaregiver
                        caregiver={ this.state.caregiver }
                        handleEditCaregiver={ this.handleEditCaregiver }
                    />) : ''
                }

                <ShowCaregivers
                    caregivers={this.state.caregivers}
                    toggleUpdateModal={this.toggleUpdateModal}
                />


            </React.Fragment>
        )
    }
}

export default App
