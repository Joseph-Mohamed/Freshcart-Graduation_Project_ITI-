//! imports for Images for slider
import sliderImg1 from '../../assets/images/slider-image-1.jpeg';
import slider2 from '../../assets/images/slider-2.jpeg';
import sliderImg3 from '../../assets/images/slider-image-3.jpeg';
import banner4 from '../../assets/images/banner-4.jpeg';
import blogImg1 from '../../assets/images/blog-img-1.jpeg';
import groceryBanner2 from '../../assets/images/grocery-banner-2.jpeg';
import groceryBanner from '../../assets/images/grocery-banner.png';
//! imports 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// !Imports API Data
import { getProducts} from '../../services/api.js';

function Home() {
    // * States
    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState('');

    useEffect(() => {
        const Data = async () => {
            const data = await getProducts();
            if (data && data.data) {
                setProducts(data.data);
            }
        };
        Data();
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase())
    );

    return (
        <>
            {/* categorys slider static */}
            <section className="my-3">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-12 col-md-10">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                autoplay={{ delay: 3000 }}
                                pagination={{ clickable: true }}
                                spaceBetween={0}
                                slidesPerView={1}>
                                <SwiperSlide>
                                    <img src={sliderImg1} className="w-100" height="300px" alt="slider" style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slider2} className="w-100" height="300px" alt="slider" style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={sliderImg3} className="w-100" height="300px" alt="slider" style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={banner4} className="w-100" height="300px" alt="banner" style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={blogImg1} className="w-100" height="300px" alt="blog" style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={groceryBanner2} className="w-100" height="300px" alt="grocery" style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={groceryBanner} className="w-100" height="300px" alt="grocery" style={{ objectFit: 'cover' }} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-12 col-md-2 d-none d-md-block">
                            <img src={sliderImg1} className="w-100" height="150px" alt="banner" style={{ objectFit: 'cover' }} />
                            <img src={groceryBanner2} className="w-100" height="150px" alt="banner" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* products */}
            <section className="py-2">
                <div className="container py-3">
                    <h1 className="text-center py-2 border-bottom border-top fw-bolder text-main">Popular Recommended</h1>

                    <input
                        type="text"
                        placeholder="Search with Name..."
                        className="form-control p-2 mx-auto w-50 my-3"
                        value={searchProduct}
                        onChange={(e) => setSearchProduct(e.target.value)} />

                    <div className="row g-3 my-2">
                        {filteredProducts.slice(0, 10).map((product) => {
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

export default Home;