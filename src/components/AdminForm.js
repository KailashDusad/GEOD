import React, { useState } from 'react';
import MyNavbar from './Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../styles/AdminForm.css';

const AdminForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [experienceCount, setExperienceCount] = useState(1); // State to keep track of the number of experiences
  const [educationCount, setEducationCount] = useState(1); 

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setFormData({});
    setImageFile(null);
    setExperienceCount(1); // Reset experience count when content type changes
    setEducationCount(1); // Reset experience count when content type changes
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('type', selectedOption);
    data.append('data', JSON.stringify(formData));
    if (imageFile) {
      data.append('image', imageFile);
    }

    // Debug: Log the FormData contents
    for (const pair of data.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      await axios.post('http://localhost:5000/api/add-content', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Content added successfully');
      setSelectedOption('');
      setFormData({});
      setImageFile(null);
      setExperienceCount(1); // Reset experience count after submission
      setEducationCount(1); // Reset experience count after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to add content');
    }
  };

  const addExperienceField = () => {
    setExperienceCount(experienceCount + 1);
  };
  const addEducationField = () => {
    setEducationCount(educationCount + 1);
  };

  const renderExperienceFields = () => {
    let fields = [];
    for (let i = 2; i <= experienceCount; i++) {
      fields.push(
        <Form.Group controlId={`formExp${i}`} key={i}>
          <Form.Label>Experience {i}</Form.Label>
          <Form.Control
            type="text"
            name={`experience${i}`}
            value={formData[`experience${i}`] || ''}
            onChange={handleInputChange}
          />
        </Form.Group>
      );
    }
    return fields;
  };
  const renderEducationFields = () => {
    let fields = [];
    for (let i = 2; i <= educationCount; i++) {
      fields.push(
        <Form.Group controlId={`formEdu${i}`} key={i}>
          <Form.Label>Education {i}</Form.Label>
          <Form.Control
            type="text"
            name={`education${i}`}
            value={formData[`education${i}`] || ''}
            onChange={handleInputChange}
          />
        </Form.Group>
      );
    }
    return fields;
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
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formRole">
              <Form.Label>Position (Exa: PhD Student, Masters)</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={formData.position || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEdu1">
              <Form.Label>Education strarting from Graduation(Ex: Masters in Earth Science (2020-2022))..then Phd and so on</Form.Label>
              <Form.Control
                type="text"
                name="education1"
                value={formData.education1 || ''}
                onChange={handleInputChange}
              />
              {renderEducationFields()}
              <Button variant="secondary" onClick={addEducationField} className="mt-2">
                Add More Education
              </Button>
            </Form.Group>
            <Form.Group controlId="formExp1">
              <Form.Label>Experience and Internship (If any)</Form.Label>
              <Form.Control
                type="text"
                name="experience1"
                value={formData.experience1 || ''}
                onChange={handleInputChange}
              />
            {renderExperienceFields()}
            <Button variant="secondary" onClick={addExperienceField} className="mt-2">
              Add More Experience
            </Button>
            </Form.Group>
            <Form.Group controlId="formLinkdin">
              <Form.Label>Linkdin Account Link</Form.Label>
              <Form.Control
                type="text"
                name="linkdin"
                value={formData.linkdin || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGate">
              <Form.Label>Gate Account Link</Form.Label>
              <Form.Control
                type="text"
                name="gate"
                value={formData.gate || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
              />
            </Form.Group>
            
            <Form.Group controlId="formBio">
              <Form.Label>Research Interests (Ex. Geodynamics, Numerecial Mode ing, Statistical or engineering seismology etc.)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description || ''}
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
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
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
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
              />
            </Form.Group>
              <Form.Group controlId="formLink">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  name="link"
                  value={formData.link || ''}
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
                <Form.Label>Type of Publication(Book, Journal etc.)</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  value={formData.type || ''}
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
              <Form.Group controlId="formLink">
                <Form.Label>Link where published(example:- Google Scholar)</Form.Label>
                <Form.Control
                  type="text"
                  name="link"
                  value={formData.link || ''}
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
