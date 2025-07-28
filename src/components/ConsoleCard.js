import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ConsoleCard({ console, onDelete }) {
  const navigate = useNavigate();

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{console.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{console.brand}</Card.Subtitle>
        <Card.Text>Release Year: {console.releaseYear}</Card.Text>
        <Button
          variant="primary"
          className="me-2"
          onClick={() => navigate(`/view/${console.id}`)}
        >
          View
        </Button>
        <Button
          variant="warning"
          className="me-2"
          onClick={() => navigate(`/edit/${console.id}`)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(console.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}


