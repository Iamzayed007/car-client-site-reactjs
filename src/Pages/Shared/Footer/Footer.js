import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './Footer.css';



const Footer = () => {

    return (
        <footer className="bg text-white font-small  pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <hr className=" w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">OUR LATEST BLOG</h5>
                        <ul className="list-unstyled ">
                            <li><HashLink className="footer-link " to="#!">Latest Brand</HashLink></li>
                            <li><HashLink className="footer-link" to="#!">All Cars</HashLink></li>
                            <li><HashLink className="footer-link" to="#!">Book Cars</HashLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Our Services</h5>
                        <ul className="list-unstyled ">
                            <li><HashLink className="footer-link " to="#!">STEERING</HashLink></li>
                            <li><HashLink className="footer-link" to="#!">TIRE</HashLink></li>
                            <li><HashLink className="footer-link" to="#!">CHECK LIGHTS</HashLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">SPECIAL FACILITIES</h5>
                        <ul className="list-unstyled ">
                            <li><HashLink className="footer-link " to="#!">MEGA MENU</HashLink></li>
                            <li><HashLink className="footer-link" to="#!">USED VEHICLES</HashLink></li>
                            <li><HashLink className="footer-link" to="#!">CERTIFIED USED CARS</HashLink></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <ul className="list-unstyled footer-link">
                            <li><p> <span className="icon-color"> </span > 56/8, Uttara, Sector-7 Banglagesh </p></li>
                            <li><p><span className="icon-color"></span> 012-6532-568-9746 </p></li>
                            <li><p><span className="icon-color "></span> 012-6532-568-8900 </p></li>
                        </ul>

                    </div>



                    {/* <div className="col-md-6 mt-3 ">
                        <h5 className="text ">We Care For Your Health</h5>
                        <h7 className="mb-5 ">Email Us by </h7>
                        <h8 className="texts"><span className="icon">   </span>medicarehelpline@gmail.com </h8>
                        <div className="d-flex justify-content-center">
                            <div class="form-group mt-5">
                                <div class="col-sm-10 w-100 ">
                                    <input type="email" className="form-control " id="email" placeholder="Enter Your Email" />
                                </div>
                            </div>
                            <div className="mx-3">
                                <button type="button" className="btn btn-success mt-5">Submit</button>
                            </div>
                        </div>

                    </div> */}



                </div>
            </div>

            <div className="footer-copyright text-center py-3">
                <h6 className=" me-end">© 2021 copyright:
                    <Link href="#" className="footer-link ">cargallery.com </Link>

                </h6>

            </div>
           


        </footer>
    )
}

export default Footer