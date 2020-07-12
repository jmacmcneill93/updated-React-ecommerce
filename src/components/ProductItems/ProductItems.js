import React from 'react';
import '.././ProductsPage/products.css';


const ProductItems = ({ item }) => (
    <div className="productCard">
        <div className={item.price, item.type}>
            <img className="productImg" src={item.img} alt={item.alt} />
            <div className="productCardInfo">
                <h3>{item.productName}</h3>
                <p className="productPrice">{item.productCost}</p>
                <p className="productCardDescription">{item.productDescription}</p>
                <p className="pick">choose size & color</p>
                <div className="sizes">
                    <div className="size">6</div>
                    <div className="size">7</div>
                    <div className="size">8</div>
                    <div className="size">9</div>
                    <div className="size">10</div>
                    <div className="size">11</div>
                    <div className="size">12</div>
                </div>
                <div className="colors">
                    <div className="colorY"></div>
                    <div className="colorB"></div>
                    <div className="colorG"></div>
                    <div className="colorR"></div>
                    <div className="colorP"></div>
                </div>
                <button className="btn1">Add To Cart</button>
            </div>
        </div>
    </div>

);
export default ProductItems;