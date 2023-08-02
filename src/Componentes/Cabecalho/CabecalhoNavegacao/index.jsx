import React from 'react'
import styles from './CabecalhoNavegacao.scss'

export default function CabecalhoNavegacao() {
    return (
        <nav className={styles.cabecalho__menu}>
            <a href="/" className={styles.cabecalho__menu__link}>Home</a>
            <a href="/" className={styles.cabecalho__menu__link}>Sobre Mim</a>
        </nav>
    )
}
