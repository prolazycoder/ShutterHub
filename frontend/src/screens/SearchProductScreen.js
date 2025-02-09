import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { SearchBar } from "../components/Common/SearchBar";

export function SearchProductScreen () {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchTerm = searchParams.get("query") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Dummy product data
  const allProducts = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Shoes", category: "Fashion", price: 50, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Phone", category: "Electronics", price: 800, image: "https://via.placeholder.com/150" },
    { id: 4, name: "T-shirt", category: "Fashion", price: 20, image: "https://via.placeholder.com/150" },
  ];

  useEffect(() => {
    let filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filteredProducts = filteredProducts.filter((product) => product.price >= min && product.price <= max);
    }

    setProducts(filteredProducts);
  }, [searchTerm, category, priceRange]);

  const handleSearch = (query) => {
    setSearchTerm(query);
    navigate(`/search?query=${query}`);
  };

  return (
    <div className="container mt-3">
      {/* Search Bar */}
      <div className="search-product-container">
        <SearchBar placeholder="Search all assets..." onSearch={handleSearch} />
      </div>
      <Row>
        {/* Left Sidebar - Filters */}
        <Col md={3}>
          <h5>Filters</h5>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price Range</Form.Label>
            <Form.Select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <option value="">All</option>
              <option value="0-50">Under $50</option>
              <option value="51-200">$51 - $200</option>
              <option value="201-1000">$201 - $1000</option>
            </Form.Select>
          </Form.Group>
        </Col>

        {/* Center - Product Listings */}
        <Col md={9}>
          <Row>
            {products.length > 0 ? (
              products.map((product) => (
                <Col key={product.id} md={4} className="mb-3">
                  <Card>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>${product.price}</Card.Text>
                      <Button variant="primary">View Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No products found</p>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

