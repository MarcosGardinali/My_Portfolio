import React from 'react'
import styles from './Cards.module.scss'

export default function Cards({projetos}) {
  return (
    <ul className={styles.lista}>
        {projetos.map((projeto) => {
            return(
                <li key={projeto.id} className={styles.cards}>
                    <img src={projeto.imagem} alt={projeto.titulo} className={styles.cards__imagem}/>
                    <p className={styles.cards__titulo}>{projeto.titulo}</p>
                    <div>
                        <p className={styles.cards__creditos}>{projeto.creditos}</p>
                        <a href={projeto.url} target="_blank" className={styles.cards__url}>Acesse aqui</a>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}
