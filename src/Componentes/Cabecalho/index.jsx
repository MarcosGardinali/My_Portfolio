import React from 'react'
import styles from './Cabecalho.module.scss'
import CabecalhoNavegacao from '../CabecalhoNavegacao'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <nav className={styles.menu}>

        <CabecalhoNavegacao to={'/'}>
          Inicio
        </CabecalhoNavegacao>
        
        <CabecalhoNavegacao to={'/sobre'}>
          Sobre Mim
        </CabecalhoNavegacao>
      </nav>
    </header>
  )
}
