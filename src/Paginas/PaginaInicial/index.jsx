import React from 'react'
import styles from './PaginaInicial.module.scss'
import Cabecalho from '../../Componentes/Cabecalho'
import Rodape from '../../Componentes/Rodape'
import Foto from '../../Componentes/Foto'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import Projetos from '../../Componentes/Projetos'


export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main className={styles.conteudo}>
        <section className={styles.apresentacao}>
          <h1 className={styles.apresentacao__titulo}>Marcos Gardinali - <strong className={styles.apresentacao__titulo__destaque}>Desenvolvedor Front-end</strong></h1>
          <p className={styles.apresentacao__conteudo__texto}>Olá! Sou o Marcos Gardinali, desenvolvedor Front-end com especialidade em React, Javascript, HTML e CSS. Sou um intusiasta por tecnologia e tudo o que ela já fez e ainda pode fazer!! </p>
          <div className={styles.apresentacao__links}>
            <h2 className={styles.apresentacao__links__subtitulo}>Acesse minhas redes</h2>
            <a href="https://github.com/MarcosGardinali" target="_blank" className={styles.apresentacao__botao}>
              <img src={github} alt="Logo do Github" />
                Github
            </a>
            <a href="https://linkedin.com/in/marcos-gardinali" target="_blank" className={styles.apresentacao__botao}>
              <img src={linkedin} alt="Logo do Linkedin" />
                LinkedIn
            </a>
            <a href="https://instagram.com/m_gardinali.21" target="_blank" className={styles.apresentacao__botao}>
              <img src={instagram} alt="Logo do Instagram" />
                Instagram
            </a>
          </div>
        </section>
        <Foto />
      </main>
      <hr></hr>
      <section className={styles.meusProjetos}>
        <h1 className={styles.meusProjetos__h1}>Meus projetos</h1>
        <Projetos />
      </section>
      <Rodape />
    </>
  )
}
