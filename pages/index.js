import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resultados do Jogo do Bicho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo aos resultados do Jogo do Bicho
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
            <h2>Como o Jogo do Bicho começou</h2>
            <p>Em 1892, o Barão João Batista Vianna de Drummond projetou o jogo para seu zoológico. Quando foi nomeado barão pelo próprio Imperador Pedro II, este nobre abriu um zoológico no mesmo bairro da Vila Isabel, localizado na cidade do Rio de Janeiro.</p>
            <p>Após a proclamação da República em 1889, o barão deixou de receber apoio financeiro do governo e seu zoológico foi comprometido. A fim de aliviar a situação, o barão criou um jogo parecido com uma loteria para estimular as visitas ao zoológico.</p>
            <p>Cada dia ele colocava um desenho de um dos 25 animais em uma tábua e o colocava no topo de um poste. Esta é a origem da expressão "Deu no Poste".</p>
            <p>Cada visitante que comprou um bilhete recebeu um bilhete com um dos animais e, no final do dia, os clientes que tinham o mesmo animal que o do quadro receberam um prêmio de 20 vezes o preço do bilhete.</p>
            <p>Este jogo rapidamente se tornou popular, e este conceito de jogo começou a ser usado fora do zoológico apenas para jogos de azar. Foi colocado em diferentes empresas em toda a cidade sob o controle de poucas pessoas que garantiram o pagamento de prêmios e resultados.</p>

          
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by JogodoBicho Team
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
