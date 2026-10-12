function Footer() {
    return (
    <>
        <section className="bg-body-tertiary py-5">
            <footer>
            <div className="container">
                <h2 className="m-0 h4">Get The FreshCart App</h2>
                <p className="text-muted small">
                    We Will Send You a Link, Open it on Your Phone to download the app
                </p>
                {/* inputs design  */}
                <div className="d-flex align-items-center gap-3 text-nowrap">
                    <input type="text" className="form-control" placeholder="Email" />
                    <button className="btn-main">Share App Link</button>
                </div>
                <hr />
                {/* footer payment Details Design  */}
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <h3 className="h6 m-0">Payment partners</h3>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Amazon_Pay_logo.svg' width="45px" alt='amazon logo for payment' />
                        <img src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' width="45px" alt='Mastercard logo for payment' />
                        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' width="45px" alt='Paypal logo for Payment' />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <h3 className="h6 m-0">Get Deliveries with FreshCart</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" width="75px" alt='App Store Badge' />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" width="75px" alt='Google Play Badge' />
                    </div>
                </div>
                <hr />

            </div>
        </footer>
        </section>

    </>
    );
}

export default Footer