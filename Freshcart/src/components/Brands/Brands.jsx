import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBrands } from "../../services/api";

function Brands() {
    // * States
    const [allBrands, setAllBrands] = useState([]);
    const [searchBrand, setSearchBrand] = useState('');

    useEffect(() => {
        const Brands = async () => {
            const data = await getBrands();
            if (data && data.data) {
                setAllBrands(data.data);
            }
        };
        Brands();
    }, []);

    const filteredBrands = allBrands.filter((brand) =>
        brand.name.toLowerCase().includes(searchBrand.toLowerCase())
    );

    return (
        <section>
            <div className="container">
                <h1 className="text-center py-2 border-bottom border-top fw-bolder text-main">All Brands</h1>
                
                <input 
                    type="text" 
                    placeholder="Search with Name..." 
                    className="form-control p-2 mx-auto w-50 my-3" 
                    value={searchBrand}
                    onChange={(e) => setSearchBrand(e.target.value)}/>

                <div className="row g-3 my-2">
                    {filteredBrands.map((brand) => (
                        <div className="col-md-6 col-lg-4 col-sm-12" key={brand._id}>
                            <div className="product p-2 rounded-2 cursor-pointer border h-100">
                                <Link to={`/brandDetails/${brand._id}`} className="text-decoration-none text-dark">
                                    <div className="product-image">
                                        <img src={brand.image} className="w-100" height="220px" alt={brand.slug} style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="product-caption pt-1 text-center">
                                        <h1 className="fs-6 fw-bolder text-main">{brand.name?.toUpperCase()}</h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Brands;