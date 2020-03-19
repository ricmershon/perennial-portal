import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

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
    }

    handleSubmit(event) {
        event.preventDefault();
        const careGiver = {
            name: this.state.name,
            description: this.state.description,
            phone: this.state.phone,
            email: this.state.email,
            webSite: this.state.webSite,
            services: this.state.services,
        }
        console.log(careGiver);
        this.props.handleAddCaregiver(careGiver)
    }

    render () {
        return (
            <Container>
                <h4>Add New Caregiver</h4>
                <Form onSubmit={ this.handleSubmit }>
                    <Form.Group controlId="name">
                        <Form.Control
                            type="text"
                            name="name"
                            value={ this.state.name }
                            onChange={ this.handleChange }
                            placeholder="name"
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Control
                            as="textarea"
                            rows="3"
                            type="text"
                            name="description"
                            value={ this.state.description }
                            onChange={ this.handleChange }
                            placeholder="description"
                        />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="phone">
                            <Form.Control
                                type="text"
                                name="phone"
                                value={ this.state.phone }
                                onChange={ this.handleChange }
                                placeholder="phone"
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="email">
                            <Form.Control
                                type="text"
                                name="email"
                                value={ this.state.email }
                                onChange={ this.handleChange }
                                placeholder="email"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="webSite">
                            <Form.Control
                                type="text"
                                name="webSite"
                                value={ this.state.webSite }
                                onChange={ this.handleChange }
                                placeholder="website URL"
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="image">
                            <Form.Control
                                type="text"
                                name="image"
                                value={ this.state.image }
                                onChange={ this.handleChange }
                                placeholder="image URL"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="services">
                        <Form.Control
                            type="text"
                            name="services"
                            value={ this.state.services }
                            onChange={ this.handleChange }
                            placeholder="services"
                        />
                    </Form.Group>
                    <Form.Group controlId="takingNewClients">
                        <Form.Check
                            type="checkbox"
                            name="takingNewClients"
                            value={ this.state.takingNewClients }
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
