import React, { useState } from 'react'
import styles from './Projetos.module.scss'
import Cards from '../Cards'
import projetos from './projetos.json'

export default function Projetos() {

  const [listaProjetos, setListaProjetos] = useState(projetos)

  return (
    <section className={styles.projetos}>
        <Cards 
          projetos={listaProjetos}
        />
    </section>
  )
}
