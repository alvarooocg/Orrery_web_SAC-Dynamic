import NasaLogo from '../assets/img/nasaLogo.jpg'
import DynamicLogo from '../assets/img/dynamicLogo.jpg'

const Header = () => 
    <header class="section-logo">
        <div class="logo-dynamic">
            <a href="#"><img src={DynamicLogo} alt="Dynamic Logo" /></a>
        </div>
        <div class="burger-menu">
            <ul class="menu" id="menu">
                <li><a href="#">Alvaro</a></li>
                <li><a href="#">Ivan</a></li>
                <li><a href="#">Ricardo de</a></li>
                <li><a href="#">Sergio</a></li>
            </ul>
            <a href="https://www.nasa.gov/" target="_blank"><img src={NasaLogo} alt="NASA Logo" class="logo-nasa" /></a>
        </div>
    </header>

export default Header