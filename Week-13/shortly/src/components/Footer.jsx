import { Link } from "react-router-dom";



const Footer = () => {

    return (
        <footer>
            <div class="container">
                <ul>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Terms of Use</Link></li>
                    <li><Link to="#">Sitemap</Link></li>
                </ul>
            </div>
        </footer>

    )
}
export default Footer;