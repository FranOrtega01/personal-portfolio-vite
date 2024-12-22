import React from 'react'
import './About.scss'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import html from '../../assets/carousel/html.png';
import css from '../../assets/carousel/css.png';
import js from '../../assets/carousel/js.png';
import responsive from '../../assets/carousel/responsive.png';
import react from '../../assets/carousel/react.png';
import git from '../../assets/carousel/git.png';
import gh from '../../assets/carousel/github.png';
import node from '../../assets/carousel/node.png';
import express from '../../assets/carousel/express.png';
import mongo from '../../assets/carousel/mongo.png';
import sql from '../../assets/carousel/sql.png';
import { SquareArrowOutUpRight } from 'lucide-react';

const techStack = [{
    img: html,
    desc: "HTML",
}, {
    img: css,
    desc: "CSS",
}, {
    img: js,
    desc: "JS",
}, {
    img: responsive,
    desc: "Responsive",
}, {
    img: react,
    desc: "React.js",
}, {
    img: git,
    desc: "Git",
}, {
    img: gh,
    desc: "Github",
}, {
    img: node,
    desc: "Node.js",
}, {
    img: express,
    desc: "Express.js",
}, {
    img: mongo,
    desc: "MongoDB",
}, {
    img: sql,
    desc: "SQL",
},
];


const education = [
    {
        title: "Full Stack Development",
        at: "Coderhouse",
        begin: "2022",
        end: "2023",
        certificate: "https://www.coderhouse.com/ar/certificados/648f523c332dc40002bc1acf?lang=en"
    },
    {
        title: "Higher Technician in Programming",
        at: "Universidad Tecnológica Nacional",
        begin: "2022",
        end: "Present",
    },
]


export const About = () => {
    return (
        <>
            <section id='About'>
                <div className='studyCont'>
                    <h2>Education:</h2>
                    {education.map(e =>
                        <div key={e.title} className='study'>
                            <h3>{e.title}
                                {e.certificate && <a title='See certificate' target='_blank' href={e.certificate}>
                                    <SquareArrowOutUpRight size={18} color='#d6d6d6' />
                                </a>}
                            </h3>
                            <p><i>{e.at}</i></p>
                            <i><span>{e.begin} - {e.end}</span></i>
                        </div>
                    )}
                </div>

                <div className='techStackCont'>
                    <h2>Tech Stack:</h2>
                    <Swiper
                        modules={[Navigation, EffectCoverflow, Autoplay, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={5}
                        loop={true}
                        centeredSlides={true}
                        speed={400}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 20, // Reduce espacio en pantallas pequeñas
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 60, // Ajusta el espacio en pantallas grandes
                            }
                        }}
                    >
                        {[...techStack, ...techStack].map((tech, index) => (
                            <SwiperSlide key={index}>
                                <div className="tech">
                                    <img src={tech.img} alt={tech.desc} />
                                    <p>{tech.desc}</p> {/* Puedes agregar una descripción si es necesario */}
                                </div>
                            </SwiperSlide>))}
                    </Swiper>

                </div>

            </section>
        </>
    )
}