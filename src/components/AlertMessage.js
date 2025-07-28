import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertMessage({ variant = "info", message }) {
  if (!message) return null;

  return (
    <Alert variant={variant} className="text-center">
      {message}
    </Alert>
  );
}

