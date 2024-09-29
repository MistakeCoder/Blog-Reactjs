import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (<Fragment>
        <footer className="text-center bg-body-tertiary">
            <div className="container pt-4">
                <section className="mb-4">
                    <Link
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark">
                        <i className="bi bi-facebook"></i></Link>

                    <Link
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className='bi bi-google'></i></Link>


                    <Link
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className='bi bi-instagram' ></i></Link>

                </section>
            </div>

            <div className="text-center p-3" >
                © 2020 Copyright:
                <Link className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
            </div>
        </footer>
    </Fragment>)
}

export default Footer;