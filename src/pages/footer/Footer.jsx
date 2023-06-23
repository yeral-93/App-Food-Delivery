import React from 'react'
import { FooterHome, SectionBuscar, SectionHome, SectionTiempo, SectionUsuario } from './StyledFooter';
import casa from '../../asset/home.png'
import buscar from '../../asset/shearch.png'
import reloj from '../../asset/clock.png'
import usuario from '../../asset/users.png'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navegar = useNavigate()
    const onClikHome = () => {
        navegar('/home')
      }
  const onClikBuscar = () => {
    navegar('/platesearch')
  }
 
  const onClikTiempo = () => {
    navegar('/order')
  }
  const onClikUsuario = () => {
    navegar('/User')
  }
  return (
    <FooterHome>
             <SectionHome onClick={onClikHome}>
        <figure>
                <img src={casa} alt="libro" />
            </figure>
            
        </SectionHome>
        <SectionBuscar onClick={onClikBuscar}>
        <figure>
                <img src={buscar} alt="canasta" />
            </figure>
        </SectionBuscar>
        <SectionTiempo onClick={onClikTiempo}>
        <figure>
                <img src={reloj} alt="buscar" />
            </figure>
        </SectionTiempo>
        <SectionUsuario onClick={onClikUsuario}>
        <figure>
                <img src={usuario} alt="buscar" />
            </figure>
        </SectionUsuario>

        </FooterHome>
  )
}

export default Footer