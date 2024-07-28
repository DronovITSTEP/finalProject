import React, { useEffect, useState } from "react";
import ReactDom from 'react-dom';
import AddProduct from "./AddProduct";

const Product = ({product}) => {
    if (!product) {
        return <div>Product not exist</div>
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>Status: {product.availability}</h3>
            <h3>Price: {product.price}</h3>
        </div>
    );
}


export default function Main() {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        fetch('/api/products')
        .then(response=>response.json())
        .then(products => setProducts(products));
    }, []);

    function handlerClick(product) {
        setCurrentProduct(product);
    }
    function renderProducts() {
        return products.map(product => (
            <li key={product.id} onClick={() => handlerClick(product)}>
                {product.title}
                </li>
        ));
    }
    function handleAddProduct(product) {
        product.price = Number(product.price);
        fetch('api/products/', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setProducts(products.concat(data)),
            setCurrentProduct(data)
        })
    }

    return (
        <div>
        <div>
            <h3>All products</h3>
            <ul>
                {renderProducts()}
            </ul>
        </div>
        <Product product={currentProduct}/>
        <AddProduct onAdd={handleAddProduct} />
        </div>
    );
}

ReactDOM.render(<Main/>, document.getElementById('root'));