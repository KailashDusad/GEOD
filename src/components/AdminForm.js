import React, { useState } from 'react';
import MyNavbar from './Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../styles/AdminForm.css';

const AdminForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({});

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/add-content', {
        type: selectedOption,
        data: formData,
      });
      alert('Content added successfully');
      setSelectedOption('');
      setFormData({});
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to add content');
    }
  };

  const renderFormFields = () => {
    switch (selectedOption) {
      case 'team':
        return (
          <>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={formData.role || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formData.image || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="bio"
                value={formData.bio || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
          </>
        );
      case 'research':
        return (
          <>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formSummary">
              <Form.Label>Summary</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="summary"
                value={formData.summary || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formLead">
              <Form.Label>Lead</Form.Label>
              <Form.Control
                type="text"
                name="lead"
                value={formData.lead || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formData.image || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
          </>
        );
      case 'dataset':
        return (
          <>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formLead">
              <Form.Label>Lead</Form.Label>
              <Form.Control
                type="text"
                name="lead"
                value={formData.lead || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formData.image || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
          </>
        );
      case 'publication':
        return (
          <>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formAuthors">
              <Form.Label>Authors</Form.Label>
              <Form.Control
                type="text"
                name="authors"
                value={formData.authors || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formJournal">
              <Form.Label>Journal</Form.Label>
              <Form.Control
                type="text"
                name="journal"
                value={formData.journal || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year"
                value={formData.year || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formDOI">
              <Form.Label>DOI</Form.Label>
              <Form.Control
                type="text"
                name="doi"
                value={formData.doi || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <MyNavbar />
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>Add New Content</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formContentType">
                <Form.Label>Select Content Type</Form.Label>
                <Form.Control as="select" value={selectedOption} onChange={handleOptionChange}>
                  <option value="">Select...</option>
                  <option value="team">Team Member</option>
                  <option value="research">Research</option>
                  <option value="dataset">Dataset</option>
                  <option value="publication">Publication</option>
                </Form.Control>
              </Form.Group>
              {renderFormFields()}
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminForm;
