import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Productdetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch products');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <div className="product-details">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default Productdetails;