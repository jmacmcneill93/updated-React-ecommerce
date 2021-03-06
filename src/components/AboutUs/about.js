import React from 'react';
import './about.css';
import '../../../src/App.css';
import Carousel from './slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar/Nav';
import Footer from '../Footer/Footer';


class about extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel />
                <section className="about-us">
                    <div className="aboutbody">
                        <h1 className="aboutHeader">About SneakerHead</h1>
                        <p>SneakerHead is an online shoe retail company that provides high quality and fashionable sneakers to all of the worlds shoe connoiseurs who have a taste for the more upscale and rare shoes. We provide only the upmost premium and finest quality shoes and accessories to our customers to guarantee satisfaction. SneakerHead was founded in Charlotte, North Carolina March 22, 2020. </p>
                    </div>
                    <div className="owner">
                        <h1 className="aboutHeader">Joshua McNeill</h1>
                        <img className="owner-image" src="../images/josh_mcneill.jpg" alt="sneakerHead owner"></img>

                    </div>
                    <div className="weeklyshoe">
                        <h1 className="shoeWeekHeader">SneakerHead pick of the week goes to </h1>
                        <img className="shoeOfWeek" src="../images/shoes-ofweek.jpeg" alt="shoes of week"></img>
                        <p>'Nike Air Mag Back To The Future', Marty McFly replicas</p>
                        <p>Price: $10,000</p>
                        <button className="btn2">Add To Cart</button>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

export default about;