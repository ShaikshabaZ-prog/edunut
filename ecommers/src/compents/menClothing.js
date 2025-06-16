import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MenProducts = () => {
  const [menClothing, setMenClothing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      'https://fakestoreapi.com/products/category/men%27s%20clothing'
    )
      .then(res => res.json())
      .then(data => {
        setMenClothing(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch products');
        setLoading(false);
      });

  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='product-list'>
      <h2>Men's Clothing</h2>
      <div className='product-grid'>
        {menClothing.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>

        ))}
      </div>

    </div>
  );
};

export default MenProducts;