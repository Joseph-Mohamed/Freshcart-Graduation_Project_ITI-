import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { getProductDetails } from '../../Services/Api';
import 'swiper/css';
import 'swiper/css/pagination';

function ProductDetails() {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const data = await getProductDetails(id);
            if (data && data.data) {
                setProductDetails(data.data);
            }
        };
        fetchDetails();
    }, [id]);

    if (!productDetails) {
        return null;
    }

    return (
        <section className="mx-auto py-3">
            <div className="container py-3">
                <div className="row align-items-center">
                    
                    <div className="col-12 col-md-4">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: true }}
                            spaceBetween={10}
                            slidesPerView={1}>
                            {productDetails.images?.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} className="w-75 mx-auto d-block rounded" alt={productDetails.title} style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="col-12 col-md-8">
                        <p className="text-muted py-2">{productDetails.description}</p>
                        <h1 className="fw-bold h2 py-2">
                            {productDetails.title}
                        </h1>
                        <h3 className="text-main fw-bolder h4 py-2">
                            {productDetails.category?.name?.toUpperCase()}
                        </h3>
                        
                        <div className="d-flex justify-content-between align-items-center py-lg-3">
                            <span>{productDetails.price} GBP</span>
                            <div className="rating">
                                {Array.from({ length: Math.floor(productDetails.ratingsAverage || 0) }).map((_, i) => (
                                    <span key={i}><i className="fa-solid fa-star rating-color text-warning"></i></span>
                                ))}
                                {(productDetails.ratingsAverage % 1 !== 0) && (
                                    <span><i className="fa-solid fa-star-half-stroke rating-color text-warning"></i></span>
                                )}
                                <span className="ms-1">{productDetails.ratingsAverage}</span>
                            </div>
                        </div>

                        
                        <Link className="btn-main w-100 add py-2 btn btn-success my-2">Add to cart +</Link>

                        <Link to="/products" className="btn-main w-100 add py-2 btn btn-transparent border mt-1 text-decoration-none text-center d-block">
                        Back to Products</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;