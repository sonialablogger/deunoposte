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
          <img width="100%" src="/resultado-do-jogo-do-bicho.JPG" alt="resultados do jogo do bicho" />
        </p>

        <div className={styles.grid}>
            <h2>Como o Jogo do Bicho começou</h2>
            <p>Em 1892, o Barão João Batista Vianna de Drummond projetou o jogo para seu zoológico. Quando foi nomeado barão pelo próprio Imperador Pedro II, este nobre abriu um zoológico no mesmo bairro da Vila Isabel, localizado na cidade do Rio de Janeiro.</p>
            <p>Após a proclamação da República em 1889, o barão deixou de receber apoio financeiro do governo e seu zoológico foi comprometido. A fim de aliviar a situação, o barão criou um jogo parecido com uma loteria para estimular as visitas ao zoológico.</p>
            <p>Cada dia ele colocava um desenho de um dos 25 animais em uma tábua e o colocava no topo de um poste. Esta é a origem da expressão "<a href="https://www.eojogodobicho.com/deu-no-poste.html">Deu no Poste</a>".</p>
            <p>Cada visitante que comprou um bilhete recebeu um bilhete com um dos animais e, no final do dia, os clientes que tinham o mesmo animal que o do quadro receberam um prêmio de 20 vezes o preço do bilhete.</p>
            <p>Este jogo rapidamente se tornou popular, e este conceito de jogo começou a ser usado fora do zoológico apenas para jogos de azar. Foi colocado em diferentes empresas em toda a cidade sob o controle de poucas pessoas que garantiram o pagamento de prêmios e resultados.</p>

            <h2>Jogo do Bicho online</h2>
            <p>Atualmente, todo o desenvolvimento do jogo do bicho tem ocorrido nas ruas do Brasil. Os bicheiros controlam os bairros ou áreas das cidades e os cambistas são os que vendem as cédulas para um determinado banco.</p>
            <p>Mas e o mundo on-line? Bem, neste momento podemos dizer que até recentemente não havia um site de apostas do jogo do bicho que realmente atendesse às demandas dos usuários, até que a Lotodobicho saiu.</p>
            <p><a href="https://lotodobicho.com">Lotodobicho</a> é uma aplicação web profissional que opera como um banco universal para todo o Brasil e utiliza seus próprios resultados para avaliar as apostas dos jogadores.</p>
            <p>Esta incrível plataforma de apostas tem tudo o que um apostador precisa. Isto significa que um jogador pode se concentrar exclusivamente no desenvolvimento de sua estratégia de apostas sem ter que ir de um lado para outros sites para ver os resultados do sorteio e do outro para verificar se seus boletos de apostas foram premiados.</p>
            <p>O jogador tem na mesma aplicação a tabela de resultados em tempo real e tudo é completamente automático. Isto significa que, uma vez concluído um sorteio, todas as apostas são automaticamente avaliadas.</p>
            <p>Os ganhos são depositados na conta do jogador e o jogador pode decidir se continua jogando ou se retira seus ganhos.</p>

            <iframe width="100%" src="https://www.youtube.com/embed/OP9faX4_l7o" title="apostar no jogo do bicho online" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by JogodoBicho Team
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
