import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function SearchForm({ params, handleParamChange }) {
    return (
        <Form className="mb-3">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        onChange={handleParamChange}
                        value={params.description}
                        name="description"
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        onChange={handleParamChange}
                        value={params.location}
                        name="location"
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col} className="ml-3" xs="auto">
                    <Form.Check
                        onChange={handleParamChange}
                        value={params.full_time}
                        name="full-time"
                        id="full-time"
                        label="Only Full Time"
                        type="checkbox"
                        className="mb-2"
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
}
