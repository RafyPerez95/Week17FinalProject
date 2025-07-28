import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center">
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for doesn't exist.</p>
      <Button as={Link} to="/" variant="primary">
        Go Home
      </Button>
    </div>
  );
}
