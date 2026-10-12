import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../Services/Api';

function Products() {
        // * States
        const [products, setProducts] = useState([]);
        const [searchProduct, setSearchProduct] = useState('');
    
        useEffect(() => {
            const Data = async () => {
                const data = await getProducts();
                if (data && data.data) {
                    setProducts(data.data);
                }};
            Data();
        }, []);
    
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchProduct.toLowerCase())
        );
    

    return (

        <>
        {/* products */}
            <section>
                <div className="container">
                    <h1 className="text-center py-2 border-bottom border-top fw-bolder text-main">Prodcuts Recommended</h1>

                    <input
                        type="text"
                        placeholder="Search with Name..."
                        className="form-control p-2 mx-auto w-50 my-3"
                        value={searchProduct}
                        onChange={(e) => setSearchProduct(e.target.value)} />

                    <div className="row g-3 my-2">
                        {filteredProducts.map((product) => {
                            const shortTitle = product.title ? product.title.split(' ').slice(0, 2).join(' ') : '';

                            return (
                                <div className="col-md-4 col-lg-3 col-sm-6" key={product._id || product.id}>
                                    <div className="product p-2 rounded-2 cursor-pointer border h-100 d-flex flex-column justify-content-between">
                                        <Link to={`/productdetails/${product.id || product._id}`} className="text-decoration-none text-dark">
                                            <div className="product-image">
                                                <img src={product.imageCover} className="w-100" height="220px" alt={product.title} style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div className="product-caption pt-1">
                                                <h2 className="fs-6 text-main">{product.category?.name?.toUpperCase()}</h2>
                                                <h1 className="fs-6 fw-bold">{shortTitle}</h1>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span>{product.price} GBP</span>
                                                    <div className="rating">
                                                        {Array.from({ length: Math.floor(product.ratingsAverage || 0) }).map((_, i) => (
                                                            <span key={i}><i className="fa-solid fa-star rating-color text-warning"></i></span>
                                                        ))}
                                                        {(product.ratingsAverage % 1 !== 0) && (
                                                            <span><i className="fa-solid fa-star-half-stroke rating-color text-warning"></i></span>
                                                        )}
                                                        <span className="ms-1 text-muted small">{product.ratingsAverage}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            to={`/productdetails/${product.id || product._id}`}
                                            className="btn-main w-100 add mt-2 btn btn-success text-decoration-none text-center d-block">
                                            View Details & Add +
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products