import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

export default function SortButtonGroup({ sortBy, setSortBy }) {
  return (
    <div className="mb-3">
      <strong>Sort By:</strong>
      <ButtonGroup className="ms-2">
        <Button
          variant={sortBy === "name" ? "primary" : "outline-primary"}
          onClick={() => setSortBy("name")}
        >
          Name
        </Button>
        <Button
          variant={sortBy === "year" ? "primary" : "outline-primary"}
          onClick={() => setSortBy("year")}
        >
          Year
        </Button>
      </ButtonGroup>
    </div>
  );
}
