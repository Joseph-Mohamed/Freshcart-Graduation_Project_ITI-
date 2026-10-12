import { Link,NavLink } from 'react-router-dom';
import logo from '../../assets/images/freshcart-logo.svg';

function Navbar() {
    
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <Link className="navbar-brand">
            <img src={logo} alt="Logo freshcart" to={'../Home/Home.jsx'}/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" to={'/home'}>Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to={'/products'}>Products</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to={'/brands'}>Brands</NavLink>
                </li>
            </ul>
            
            <div className="d-flex flex-column flex-lg-row align-items-center gap-2">
                {/* Social Icons */}
                <div className="d-flex flex-wrap justify-content-center gap-2 gap-lg-3 text-dark">
                <a className="text-decoration-none" href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook fs-5 text-dark" /></a>
                <a className="text-decoration-none" href="https://x.com/" target="_blank">
                <i className="fa-brands fa-twitter fs-5 text-dark" /></a>
                <a className="text-decoration-none" href="https://linkedin.com" target="_blank">
                <i className="fa-brands fa-linkedin fs-5 text-dark" /></a>
                <a className="text-decoration-none" href="https://www.tiktok.com/" target="_blank">
                <i className="fa-brands fa-tiktok fs-5 text-dark" /></a>
                <a className="text-decoration-none" href="https://youtube.com" target="_blank">
                <i className="fa-brands fa-youtube fs-5 text-dark" /></a>
                <a className="text-decoration-none" href="https://www.instagram.com" target="_blank">
                <i className="fa-brands fa-instagram fs-5 text-dark" /></a>
                </div>
            </div>
            </div>
        </div>
        </nav>

        </>
    );
}

export default Navbar