import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditConsole = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [consoleData, setConsoleData] = useState({
    name: '',
    brand: '',
    description: '',
    releaseYear: '',
    imageUrl: '',
  });

  useEffect(() => {
    axios.get(`https://68864d9ff52d34140f6be53c.mockapi.io/consoles/${id}`)
      .then((res) => setConsoleData(res.data))
      .catch((err) => console.error('Failed to fetch console:', err));
  }, [id]);

  const handleChange = (e) => {
    setConsoleData({ ...consoleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://68864d9ff52d34140f6be53c.mockapi.io/consoles/${id}`, consoleData);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Edit Console</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Console Name</Form.Label>
          <Form.Control type="text" name="name" value={consoleData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="brand" className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" name="brand" value={consoleData.brand} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={consoleData.description} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="releaseYear" className="mb-3">
          <Form.Label>Release Year</Form.Label>
          <Form.Control type="number" name="releaseYear" value={consoleData.releaseYear} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="imageUrl" className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name="imageUrl" value={consoleData.imageUrl} onChange={handleChange} required />
        </Form.Group>

        <Button variant="success" type="submit">Update Console</Button>
      </Form>
    </div>
  );
};

export default EditConsole;
