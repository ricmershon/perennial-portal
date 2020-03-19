import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Form, Col, Button } from 'react-bootstrap'

class UpdateCaregiver extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: true,
            _id: this.props.caregiver._id,
            name: this.props.caregiver.name,
            location: this.props.caregiver.location,
            email: this.props.caregiver.email,
            phone: this.props.caregiver.phone,
            webSite: this.props.caregiver.webSite,
            description: this.props.caregiver.description,
            takingNewClients: this.props.caregiver.takingNewClients,
            image: this.props.caregiver.image,
            services: this.props.caregiver.services,
            rating: this.props.caregiver.rating
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClose(event) {
        this.setState({ showModal: false })
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
        this.setState({ showModal: false })
        const careGiver = {
            _id: this.state._id,
            name: this.state.name,
            description: this.state.description,
            phone: this.state.phone,
            email: this.state.email,
            webSite: this.state.webSite,
            services: this.state.services,
            takingNewClients: this.state.takingNewClients
        }
        console.log(careGiver);
        this.props.handleEditCaregiver(careGiver)
    }

    render () {
        return (
            <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update: {this.state.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={ this.handleSubmit }>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="name"
                                value={ this.state.name }
                                onChange={ this.handleChange }
                                placeholder="name"
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
                                placeholder="description"
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
                                    placeholder="phone"
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
                                    placeholder="email"
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
                                    placeholder="website URL"
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
                                    placeholder="image URL"
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
                                placeholder="services"
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default UpdateCaregiver
