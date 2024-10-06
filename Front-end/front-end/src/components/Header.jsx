import NasaLogo from '../assets/img/nasaLogo.jpg'
import DynamicLogo from '../assets/img/dynamicLogo.jpg'

const Header = () => 
    <header class="section-logo">
        <div class="logo-dynamic">
            <img src={DynamicLogo} alt="Dynamic Logo" />
        </div>
        <div class="burger-menu">
            <button class="menu-btn" onclick="toggleMenu()">Integrantes</button>
            <ul class="menu" id="menu">
                <li><a href="#">Alvaro</a></li>
                <li><a href="#">Ivan</a></li>
                <li><a href="#">Ricardo de</a></li>
                <li><a href="#">Sergio</a></li>
            </ul>
            <img src={NasaLogo} alt="NASA Logo" class="logo-nasa" />
        </div>
    </header>

export default Header