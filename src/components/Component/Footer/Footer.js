import React from 'react';
import './Footer.css';
import logo from '../../../image/logo.png';
import pay from '../../../image/pay.png';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container pb-5">
        <div className="row">
          <div id="about-us" className="col-sm pe-5 pt-3">
            <img src={logo} alt="" className="penguin-logo img-fluid w-50" /><hr />
            <p>The Right Choice For  Bright Future. Imperial college of Engineering is Affilated by Rajshahi University. After Graduation Rajshahi University provide you certificate.</p>
          </div>
          <div id="contact-us" className="col-sm pe-5 pt-3">
            <h5>Contact us</h5><hr />
            <p><i className="fas fa-map-marker fa-1x"> </i> Boikali Jessore Road, Khulna, Khulna-9000</p>
            <p><i className="fa fa-envelope-open"></i> Imperial@gmail.com</p>
            <p><i className="fa fa-phone"></i> +0998866000</p>
          </div>
          <div className="col-sm pe-5 pt-3">
          <h5>Get in Touch</h5><hr />
            <div className='icon-control'>
               <a href=""><i class="fab fa-instagram"></i></a> 
               <a href=""><i class="fas fa-envelope"></i></a> 
               <a href=""><i class="fas fa-phone-alt"></i></a> 
               <a href=""><i class="fab fa-facebook"></i></a> 
            </div>
            <div className="pt-5">
              <h5>Pay with </h5><hr />
              <img src={pay} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <hr />
        <p className="text-center">© Imperial College Of Engineering, all rights reserved</p>
      </footer>
    </section>

  );
};

export default Footer;