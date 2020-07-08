import React from 'react';
import './footer.css';
import { SocialIcon } from 'react-social-icons';




class Footer extends React.Component {
    render() {
        return (
            <div>
            <footer className="mainFooter">
                <img className="footerLogo" src="../images/sneakerhead2.jpg" alt="SneakerHead Logo"></img>
                <p className="copyRight">©SneakerHead JM; 2020, All Rights Reserved</p>
                <SocialIcon url="https://www.facebook.com/" className="facebook" />
                <SocialIcon url="http://twitter.com/" className="twitter" />
                <SocialIcon url="https://www.instagram.com/" className="instagram" />
                <SocialIcon url="https://www.youtube.com/" className="youtube" />
            </footer>

            </div>
        );
    }
}
export default Footer;


