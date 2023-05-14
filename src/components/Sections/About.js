import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import about from '../../img/about.jpg'
import Title from '../Title/Title'
import Button from '../Button/Button'
import { brief, download, flame, medal, mug } from '../../utils/icons'
import Progressbar from '../Progressbar/Progressbar'
import Stats from '../Stats/Stats.js'
import shape1 from '../../img/shape1.png'
import shape2 from '../../img/shape2.png'

function About() {
    const theme = useTheme()
    return (
        <AboutStyled id='about' theme={theme}>
            <div className="about-info">
                <div className="about-image">
                    <img src={about} alt="" />
                </div>
                <div className="about-content">
                    <Title name={'Sobre Mi'} />
                    <p>
                    Me apasiona resolver problemas complejos y crear soluciones que sean estéticamente agradables y funcionales. Creo que
                    comprender al usuario es la clave para crear productos exitosos que satisfagan sus necesidades y superen sus expectativas. En general, soy una persona motivada y creativa que siempre busca mejorar sus habilidades y conocimientos en el campo del diseño de UX.
                    </p>
                    <div className="progress-bars">
                        <Progressbar
                            bg={theme.colorPrimary}
                            service={'Desarrollo Web'}
                            progress={'70'}
                        />
                        <Progressbar bg={theme.colorPurple} service="Diseño UI/UX" progress="85" />
                        <Progressbar bg={theme.colorGreen} service="Testing" progress="50" />
                        
                    </div>
                    <div className="btn-con">
                        <Button 
                            name="Descargar CV"
                            blob="blob"
                            icon={download}
                            bg={theme.colorPrimary}
                            color={theme.colorWhite}
                            bFw={'600'}
                            onClick="onClick"
                            bRad={'30px'}
                            bPad={theme.bPad1}
                        />
                    </div>
                </div>
            </div>
            <div className="stats-container">
                <Stats
                    icon={flame}
                    number="3+" 
                    desc="Proyectos Terminados" 
                />
                <Stats icon={mug} number="50+" desc="Tasa de Cafe" />
                <Stats icon={brief} number="5" desc="Años de Experiencia" />
                <Stats icon={medal} number="2" desc="Certificaciones" />
            </div>
            <img alt='shape' src={shape1} className="shape1" />
            <img alt='shape' src={shape2} className="shape2" />
        </AboutStyled>
    )
}

const AboutStyled = styled(SectionLayout)`
    background-color: ${props => props.theme.aboutBg};
    position: relative;
    overflow: hidden;
    .stats-container{
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .about-info{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        z-index: 5;
        @media screen and (max-width: 1150px){
            grid-template-columns: repeat(1, 1fr);
        }
        .about-image{
            padding: 1.5rem;
            background: ${(props) => props.theme.colorBg3};
            border-radius: 5px;
            width: 80%;
            @media screen and (max-width: 1150px){
                width: 100%;
            }
            img{
                width: 100%;
            }
        }

        .about-content{
            .progress-bars{
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .btn-con{
                margin-top: 2rem;
                @media screen and (max-width: 1150px){
                    margin-bottom: 2rem;
                }
            }
        }
    }

    .shape1{
        position: absolute;
        left: -7px;
        top: -7px;
        z-index: 1;
        opacity: 0.05;
        pointer-events: none;
    }
    .shape2{
        position: absolute;
        right: -7px;
        top: -7px;
        z-index: 1;
        opacity: 0.05;
        pointer-events: none;
    }
`;

export default About