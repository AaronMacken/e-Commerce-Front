import React, { useState, useEffect } from "react";
import './Products.css';
import Title from '../../components/Title/Title';
import axios from 'axios';
import Items from './Items';
import Pagination from './Pagination';


const Products = () => {
  // create state values using useState
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // call useEffect to get json from api - aka componentDidMount
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('/products');
      setItems(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, [])

  // get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="products-page">
      <Title text={'Products'} />
      <Items items={currentItems} loading={loading} />
      <Pagination itemsPerPage={itemsPerPage} totalItems={items.length}
      paginate={paginate}
      />
    </div>
  );

}


export default Products;