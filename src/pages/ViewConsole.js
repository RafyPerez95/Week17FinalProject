// src/pages/ViewConsole.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container, Spinner } from "react-bootstrap";

const ViewConsole = () => {
  const { id } = useParams();
  const [console, setConsole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://68864d9ff52d34140f6be53c.mockapi.io/Consoles/${id}`)
      .then((res) => {
        setConsole(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching console:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (!console) {
    return (
      <Container className="text-center mt-5">
        <h4>Console not found</h4>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={console.imageUrl} />
        <Card.Body>
          <Card.Title>{console.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{console.brand}</Card.Subtitle>
          <Card.Text>
            <strong>Release Year:</strong> {console.releaseYear}
          </Card.Text>
          <Card.Text>{console.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ViewConsole;
