import React from 'react';
import Navbar from '../Navbar/Nav';
import Filter from '../Filter/Filter';
import Footer from '../Footer/Footer';
import './products.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

 class Products extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Filter />
                <Footer />
            </div>
        )
    }
}
export default Products;