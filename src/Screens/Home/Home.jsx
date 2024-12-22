import React from 'react'
import logo from '../../assets/foto.jpeg'
import './Home.scss';
import 'swiper/css';

export const Home = () => {
    return (
        <section id='Home' className='section'>
            <div className='photo'>
                <img src={logo} alt="Fran Ortega Portrait" />
            </div>
            <p>Hey there! I'm Fran, <span>Full Stack Dev</span></p>
        </section>
    )
}
