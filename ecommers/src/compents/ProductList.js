import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './productlist.css';
function Productlist(){
    const [products,setproducts]=useState([]);
    const [loading,setloading]=useState([true]);
    const [error,seterror]=useState(null);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setproducts(data);
            setloading(false);
        })
        .catch(err => {
            seterror('Failed to fetch products');
            setloading(false);
        });
    }, []);


    if(loading) return <p>Loading....</p>;
    if(error) return <p>{error}</p>;
    return(
        <div className="product-list">
            <h1>Products</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title}/>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productlist;