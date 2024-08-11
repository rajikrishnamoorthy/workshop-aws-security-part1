import React, { useEffect, useState } from 'react';
import 'isomorphic-fetch';

function App() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://3.237.3.107:5000/api/products/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '80%',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
    };

    const thStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '8px',
        textAlign: 'left',
    };

    const tdStyle = {
        padding: '8px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
    };

    const trOdd = {
        backgroundColor: '#f2f2f2',
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Product List</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Product ID</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.product_id} style={index % 2 === 0 ? trOdd : null}>
                            <td style={tdStyle}>{product.product_id}</td>
                            <td style={tdStyle}>{product.Name}</td>
                            <td style={tdStyle}>{product.Price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
