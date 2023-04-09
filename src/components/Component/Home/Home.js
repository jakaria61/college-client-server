import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div id="carouselExampleCaptions" class="carousel slide mb-5" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active slide-bg1 row">
                        <div className='col-md-8 slide-text'>
                            <br /><br /><br />
                            <h1>The Right Choice for Bright Future</h1> <br />
                            <p>Rajshahi University Affiliated Engineering College.</p> <br />
                            
                        </div>
                    </div> 
                </div>
             
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;