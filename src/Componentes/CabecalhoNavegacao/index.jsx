import React from 'react'
import styles from './CabecalhoNavegacao.module.scss'

export default function CabecalhoNavegacao() {
    return (
        <nav className={styles.menu}>
            <a href="/" className={styles.menu__link}>Home</a>
            <a href="/" className={styles.menu__link}>Sobre Mim</a>
        </nav>
    )
}
