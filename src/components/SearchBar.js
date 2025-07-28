import React from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Form.Group className="mb-3" controlId="searchConsoles">
      <Form.Label>Search Consoles</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search by name or brand"
        value={searchTerm}
        onChange={handleSearch}
      />
    </Form.Group>
  );
};

export default SearchBar;
