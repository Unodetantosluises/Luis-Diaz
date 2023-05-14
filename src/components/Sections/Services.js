import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import ServiceItem from '../ServiceItem/ServiceItem'
import Title from '../Title/Title'
import { code, design, desktop } from '../../utils/icons'


function Services() {
    const theme = useTheme()
    return (
        <ServicesStyled id='services' theme={theme}>
            <Title name={'Servicios'} desc={'Areas donde me especializo'} />
            <div className="services-con">
                <ServiceItem 
                    icon={design} 
                    title={'Diseño de UX'}
                    bg={theme.colorPurple}
                    shadow={theme.shadowPurple}
                    desc={'Me especialioz en crear experiencias de Usuario.'}
                />
                <ServiceItem 
                    icon={desktop}
                    title={'Testing'}
                    bg={theme.colorGreenDark}
                    shadow={theme.shadowGreen}
                    desc={'Experiencia en manejo de Selenium y desarrollo de pruebas unitarias.'}
                />
                <ServiceItem 
                    icon={code}
                    title={'Desarrollo Web'}
                    shadow={theme.shadowPrimary}
                    bg={theme.colorPrimary}
                    desc={'Puedo llevar a cabo esa ide que tienes en mente, enfocado en (React y Nextjs.).'}
                />
            </div>
        </ServicesStyled>
    )
}

const ServicesStyled = styled(SectionLayout)`
    background: ${(props) => props.theme.colorBgGrad};
    .services-con{
        margin-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 2rem;
    }
`;

export default Services