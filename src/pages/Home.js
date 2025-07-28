// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

const Home = () => {
  const [consoles, setConsoles] = useState([]);
  const [filteredConsoles, setFilteredConsoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const navigate = useNavigate();

  const API_URL = 'https://68864d9ff52d34140f6be53c.mockapi.io/Consoles';

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setConsoles(res.data);
        setFilteredConsoles(res.data);
      })
      .catch((err) => console.error('Failed to fetch consoles:', err));
  }, []);

  useEffect(() => {
    const filtered = consoles.filter((console) => {
      const matchesSearch = console.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand ? console.brand === selectedBrand : true;
      return matchesSearch && matchesBrand;
    });
    setFilteredConsoles(filtered);
  }, [searchTerm, selectedBrand, consoles]);

  const uniqueBrands = [...new Set(consoles.map((console) => console.brand))];

  return (
    <Container>
      <h1 className="my-4 text-center">🎮 Game Console Manager</h1>
      <Row className="mb-4">
        <Col md={6}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Col>
        <Col md={6}>
          <FilterDropdown brands={uniqueBrands} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
        </Col>
      </Row>
      <Row>
        {filteredConsoles.map((console) => (
          <Col key={console.id} md={4} className="mb-4">
            <Card onClick={() => navigate(`/view/${console.id}`)} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={console.imageUrl} />
              <Card.Body>
                <Card.Title>{console.name}</Card.Title>
                <Card.Subtitle className="text-muted">{console.brand}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
