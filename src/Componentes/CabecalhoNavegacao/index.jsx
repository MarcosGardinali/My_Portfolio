import React from 'react'
import styles from './CabecalhoNavegacao.module.scss'
import { Link, useLocation } from 'react-router-dom'

export default function CabecalhoNavegacao({ children, to }) {
    const localizacao = useLocation();

    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}`} 
            to={to}>
            {children}
        </Link>
    )
}
