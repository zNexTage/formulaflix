import React from 'react';
import Logo from '../../assets/img/LogoMain.png'
import './Menu.css'
import Button from './components/Button/'
import { Link } from 'react-router-dom'
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AluraFlix Logo" />
            </Link>
            <Button as={Link} className='ButtonLink' to="/cadastro/video" >
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;