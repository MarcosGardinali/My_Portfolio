import React from 'react'
import Foto from 'Componentes/Foto'
import styles from './SobreMim.module.scss'

export default function SobreMim() {
    return (
        <main className={styles.apresentacao}>
            <section className={styles.apresentacao__conteudo}>
                <h1 className={styles.apresentacao__titulo}>Sobre Mim</h1>
                <p className={styles.apresentacao__conteudo__texto}>
                    Olá! Sou o Marcos Gardinali, desenvolvedor Front-end. Sou formado em ensino médio integrado ao técnico pela ETEC, onde aprendi diversas téconologias na área de programação, como C#, HTML, CSS, MYSQL e Java(Android Studio).
                </p>
                <p className={styles.apresentacao__conteudo__texto}>
                    Como trabalho de conclusão deste curso desenvolvi um sistema para controle de estoque, vendas e compras para uma loja de artigos religiosos, as tecnologias utilizadas neste projeto foram C# para desenvolvimento do software desktop, MYSQL para a criação do banco de dados que integrava com o software e Java no android Studio para o app mobile onde o dono da loja poderia cadastrar seus contatos.
                </p>
                <p className={styles.apresentacao__conteudo__texto}>
                    Atualmente estou terminando meu curso superior em Gestão Empresarial (6/6) e ao término desta formação pretendo iniciar o curso de Análise e Desenvolvimento de Sistemas, ambas as formações da faculdade Fatec.
                </p>
            </section>
            <Foto />
        </main>
    )
}
