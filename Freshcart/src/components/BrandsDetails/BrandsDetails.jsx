import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { getBrandDetails } from '../../Services/Api'; 
// import { getBrandDetails } from '../../Services/Api'; 
import { getBrandsDetails } from '../../Services/Api';


function BrandDetails() {
    const { id } = useParams();
    const [brandDetails, setBrandDetails] = useState(null);

    useEffect(() => {
        const fetchBrandDetails = async () => {
            const data = await getBrandsDetails(id);
            if (data && data.data) {
                setBrandDetails(data.data);
            }
        };
        fetchBrandDetails();
    }, [id]);

    if (!brandDetails) {
        return null;
    }

    const formattedDate = brandDetails.createdAt ? new Date(brandDetails.createdAt).toLocaleDateString() : '';

    return (

        <>
            <section className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 bg-light border rounded shadow-sm p-4 my-5">
                        <div className="row align-items-center g-4">
                            <div className="col-12 col-md-4 text-center">
                                <img
                                    src={brandDetails.image}
                                    className="img-fluid rounded shadow-sm"
                                    alt={brandDetails.name || brandDetails.slug}
                                    style={{ maxHeight: '180px', objectFit: 'contain' }}
                                />
                            </div>

                            <div className="col-12 col-md-8 text-center text-md-start">
                                <p className="text-muted py-1 small">
                                    Last Update Product installing In {formattedDate}
                                </p>
                                <h1 className="fw-bold h3 py-1 text-main text-capitalize">
                                    {brandDetails.slug}
                                </h1>
                            </div>
                        </div>

                        <div className="mt-4 pt-3 border-top">
                            <Link
                                to="/brands"
                                className="btn-main w-100 add py-2 btn btn-success text-decoration-none text-center d-block">
                                Close
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BrandDetails;