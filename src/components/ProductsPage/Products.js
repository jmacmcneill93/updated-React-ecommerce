import React from 'react';
import Navbar from '../Navbar/Nav';
import Filter from '../Filter/Filter';
import Footer from '../Footer/Footer';
import './products.css';


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