import "./styles.css"


import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <div className="footer--principal-text"><Link to="/">Adventure Trails FD</Link></div>
            <div className="footer-link">
                <Link to="https://github.com/magas1507" target="_blank"><img src={"public/assets/github.svg"} alt="gitHub" /></Link>
                <Link to="https://www.linkedin.com/in/maria-gabriela-acosta-salvatierra-583102133/" ><img src={"public/assets/linkedin-in.svg"} alt="linkedin" /></Link>
                <Link to='https://www.instagram.com/ma_gabyas/' target="_blank"><img src={"public/assets/instagram.svg"} alt="instagram" /></Link>
            </div>
        </footer>
    );
}

export default Footer;
