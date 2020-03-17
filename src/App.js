import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NewCaregiver from './components/NewCaregiver.js'
import ShowCaregivers from './components/ShowCaregivers.js'
import UpdateCaregiver from './components/UpdateCaregiver.js'


let baseURL = process.env.REACT_APP_BASEURL

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
  }
    componentDidMount(){
        this.getCaregivers()
      }
    async getCaregivers (){
        try {
          let response = await fetch(`${baseURL}/caregivers`)
          let data = await response.json()
          this.setState({caregivers: data})
        }catch(e){
          console.error(e)
        }
      }

handleAddCaregiver(caregiver) {
  const copyCaregivers = [caregiver, ...this.state.caregivers]
    this.setState({
      caregivers: copyCaregivers,
    })
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
     <Nav.Link href="#link">New</Nav.Link>
     <Nav.Link href="#link">Edit</Nav.Link>
     </Nav>
     </Navbar.Collapse>

        </Navbar>
        <Jumbotron>
          <h1>Big Box at Top</h1>
          <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Click to learn the answer to Life, The Universe, and Everything</Button>
  </p>
        </Jumbotron>
      </Container>

    <ShowCaregivers />


    </React.Fragment>
  )
}
}
export default App
