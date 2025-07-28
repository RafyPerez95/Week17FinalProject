import React from "react";
import { Form } from "react-bootstrap";

const FilterDropdown = ({ filterBrand, setFilterBrand }) => {
  return (
    <Form.Group controlId="filterBrand" className="mb-3">
      <Form.Label>Filter by Brand</Form.Label>
      <Form.Select
        value={filterBrand}
        onChange={(e) => setFilterBrand(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Sony">Sony</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Nintendo">Nintendo</option>
        <option value="Atari">Atari</option>
        <option value="Sega">Sega</option>
      </Form.Select>
    </Form.Group>
  );
};

export default FilterDropdown;
