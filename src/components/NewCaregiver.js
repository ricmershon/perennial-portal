import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Col, Button } from 'react-bootstrap'

class NewCaregiver extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            location: '',
            email: '',
            phone: '',
            webSite: '',
            description: '',
            takingNewClients: false,
            image: '',
            services: [],
            rating: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState ({ [event.currentTarget.id]: event.currentTarget.value })
        if (event.currentTarget.id === 'takingNewClients') {
            if (event.currentTarget.checked) {
                this.setState({ takingNewClients: true })
            } else {
                this.setState({ takingNewClients: false })
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const careGiver = {
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
            phone: this.state.phone,
            email: this.state.email,
            location: this.state.location,
            webSite: this.state.webSite,
            services: this.state.services,
            takingNewClients: this.state.takingNewClients
        }
        console.log(careGiver);
        this.props.handleAddCaregiver(careGiver)
    }

    render () {
        return (
            <Container className="new-form rounded">
                <h4>Add New Caregiver</h4>
                <Form onSubmit={ this.handleSubmit }>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            size="sm"
                            type="text"
                            name="name"
                            value={ this.state.name }
                            onChange={ this.handleChange }
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            size="sm"
                            as="textarea"
                            rows="3"
                            type="text"
                            name="description"
                            value={ this.state.description }
                            onChange={ this.handleChange }
                        />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="phone"
                                value={ this.state.phone }
                                onChange={ this.handleChange }
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                size="sm"
                                type="email"
                                name="email"
                                value={ this.state.email }
                                onChange={ this.handleChange }
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="location"
                                value={ this.state.location }
                                onChange={ this.handleChange }
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="webSite">
                            <Form.Label>Web site</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="webSite"
                                value={ this.state.webSite }
                                onChange={ this.handleChange }
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="image">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="image"
                                value={ this.state.image }
                                onChange={ this.handleChange }
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="services">
                        <Form.Label>Services</Form.Label>
                        <Form.Control
                            size="sm"
                            type="text"
                            name="services"
                            value={ this.state.services }
                            onChange={ this.handleChange }
                        />
                    </Form.Group>
                    <Form.Group controlId="takingNewClients">
                        <Form.Check
                            type="checkbox"
                            name="takingNewClients"
                            checked={ this.state.takingNewClients }
                            onChange={ this.handleChange }
                            label="Taking new clients"
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit">Create New Caregiver</Button>
                </Form>
            </Container>
        )
    }
}
export default NewCaregiver
