import React from 'react'
import { Routes, Route, Link } from "react-router";
import ProductDetail from '../pages/Product';

const ProductCard = () => {
    return (
        <>
            <div className='productCard' >

                <img src="https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg" alt="mobile" />
                <div className='productInfo'>

                    <p>
                        Product name
                    </p>
                    <p>$1000</p>
                </div>
                <div className='productBtn'>
                    <button>Add to cart</button>
                    <button>Buy Now</button>
                </div>
            </div>


        </>
    )
}

export default ProductCard