import React, { useState, useEffect } from "react";
import './Products.css';
import Title from '../../components/Title/Title';
import axios from 'axios';
import Items from './Items';


const Products = (props) => {
  // create state values using useState
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

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

  console.log(items);

  return (
    <div className="products-page">
      <Title text={'Products'} />
      <Items items={items} loading={loading} />
    </div>
  );

}


export default Products;