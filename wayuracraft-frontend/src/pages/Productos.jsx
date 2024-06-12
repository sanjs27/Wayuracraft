import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import "../styles/Productos.css";

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);
  const [sortOrder, setSortOrder] = useState('random');

  useEffect(() => {
    fetchProducts();
  }, [currentPage, sortOrder]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/productos`, {
        params: {
          sort: sortOrder,
          page: currentPage,
          limit: productsPerPage,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="productos-container">
      <div className="filter-options">
        <label>Ordenar por precio: </label>
        <select onChange={handleSortChange} value={sortOrder}>
          <option value="random">Aleatorio</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id_producto} product={product} />
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && <button onClick={handlePreviousPage}>Anterior</button>}
        {products.length === productsPerPage && <button onClick={handleNextPage}>Siguiente</button>}
      </div>
    </div>
  );
};

export default Productos;
