import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <h1>Main Page</h1>
    <NewCaregiver />

    <ShowCaregivers />

    <UpdateCaregiver />
    <h3>Brought to you by Main Pages, llc., a subsidiary of the NRJ (Nathaniel/Ric/Johnny) Corporation.</h3>
    </React.Fragment>
  )
}
}
export default App
