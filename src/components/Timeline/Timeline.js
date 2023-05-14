import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { brief, education } from '../../utils/icons';
import TimelineItem from '../TimelineItem/TimelineItem';

function Timeline() {
    const theme= useTheme()
    return (
        <TimelineStyled theme={theme}>
            <div className="education-timeline timeline">
                <TimelineItem 
                    duration={'2016 - 2023'}
                    title={'Licenciatura en Ciencias de la Informatica'}
                    desc={'Tuve el placer de Estudia en la unidad UPIICSA perteneciente al IPN en la cual adquiri varios conocimientos tecnicos, hice amistades y decubri a lo que me queria dedicar profesionalmente .'}
                    icon={education}
                />
                <TimelineItem
                    duration={'2022 - 2023'}
                    title={'Google UX Certification'}
                    desc={'Certificacion de Google enfocada en el desarrollo de la experiencia de usuario.'}
                    icon={education}
                />
                <TimelineItem
                    duration={'2022 - Actualmente'}
                    title={'Microformas'}
                    desc={'Actualmente laboro para la empresa Microformas.'}
                    icon={brief}
                />
            </div>
            <div className="jobs-timeline timeline">
                <TimelineItem
                    duration={'2022 - 2022'}
                    title={'Fullstack Developer'}
                    desc={'Participe en el programa generation en el cual tuve la oportunidad de colaborar con un pequeño equipo en el desarrollo de un sito web para un consultorio dental.'}
                    icon={education}
                />
                <TimelineItem
                    duration={'2020 - 2021'}
                    title={'Fronted Developer'}
                    desc={'Colabore como Desarrollador Freelance para un emprendiemiento, tuve la oportunidad de diseñar le UI y la UX.'}
                    icon={brief}
                />
                <TimelineItem
                    duration={'2018 - 2019'}
                    title={'Agente Telefonico'}
                    desc={'Laboré como agente telefónico para la empresa telefónica América Móvil ofreciendo asistencia y contratación de servicios y planes relacionados a la telefonía móvil.'}
                    icon={brief}
                />
            </div>
        </TimelineStyled>
    )
}

const TimelineStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 2rem;
    .timeline{
        background-color: ${(props) => props.theme.colorBg5};
        padding: 2rem;
        border-radius: 10px;
    }

    .jobs-timeline{
        .icon{
            left: -10px;
        }
    }
`;

export default Timeline