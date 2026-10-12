import error from '../../assets/images/error.svg'
function NotFound() {
    return (
        <>
        <section className='container'>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={error} alt="Not Found Page" className="img-fluid w-75 my-0" />
            </div>
        </section>
        </>
    );
}

export default NotFound;