import styles from './NewPaper.module.css'
import Image from "../../assets/imagens/image_01.svg"

const NewPaper = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.news}>Nóticia</h1>
        <div className={styles.container_news}>

            <img src={Image} alt="Image" />
            
            <div className={styles.info_news_container}>
                
                <span>Por Maria Ventura em 15/16/21</span>
                
                <div className={styles.info_news}>
                    <h2>O enigma do maior vulcão ativo da Europa, escondido sob as águas.</h2>
                    <div className={styles.text}>
                        Quando pensamos nos vulcões da Itália, podemos supor que o Etna, na Sicília, e o Vesúvio, que destruiu Pompeia, representam o maior perigo para a população e os turistas da península e suas ilhas.
                        Mas eles são acompanhados de perto por outra ameaça: o Marsili, localizado cerca de 175 km ao sul de Nápoles.
                        Com uma altura de 3 mil metros e uma base de 70 km de comprimento por 30 km de largura, o Marsili é um verdadeiro gigante. É o maior vulcão ativo de toda a Europa.

                        Não se pode avistá-lo, contudo, já que seu cume fica 500 metros debaixo d'água, no mar Tirreno.

                        Os cientistas sabem da existência de Marsili há um século, mas somente na última década começaram a investigar os perigos que ele pode representar — e as descobertas são preocupantes.
                        De acordo com alguns modelos recentes, a atividade do vulcão poderia potencialmente desencadear um enorme tsunami, com uma onda de 30 metros de altura atingindo as costas da Calábria e da Sicília.

                        Pior ainda, não haveria praticamente nenhum alerta de que o desastre é iminente — um fato que está levando alguns cientistas a fazerem apelos por novas tecnologias para monitorar os movimentos do Mediterrâneo.

                        <h2>Uma ameaça antiga</h2>

                        Em termos de tamanho, o Marsili não consegue competir com Tamu Massif, abaixo do noroeste do Oceano Pacífico, que tem cerca de 4.460 metros de altura e pode abrigar um complexo de vários vulcões separados.

                        O Tamu Massif está extinto, no entanto, enquanto o Marsili segue ativo. Ele se encontra próximo da divisa das placas tectônicas da Eurásia e da África — cujo movimento resulta em intensa atividade geológica.

                        É apenas um dos muitos vulcões em um arco ao longo da costa norte da Sicília e da costa oeste do sul da Itália.

                        Alguns deles formaram massas de terra, as ilhas Eólias — Stromboli, Lipari, Salina, Filicudi, Alicudi, Panarea e Vulcano, que recebeu este nome por causa do deus romano do fogo, que deu origem à denominação de todas essas fissuras na crosta terrestre.

                        E para cada uma dessas ilhas visíveis, dez vulcões se escondem sob as águas do mar.

                        Segundo Guido Ventura, vulcanologista do Instituto Nacional de Geofísica e Vulcanologia da Itália, Marsili nasceu há cerca de um milhão de anos.

                        Ao longo dos milênios, chegou a acumular 80 cones vulcânicos, abrangendo desde o norte-nordeste até o sul-sudoeste, junto a várias fissuras e fraturas que poderiam liberar lava.

                        Devido à sua profundidade sob as águas, esta potencial bomba-relógio à espreita no fundo do oceano do sul da Itália foi descoberta apenas 100 anos atrás.

                        "Só no início do século 20 que as pessoas começaram a mapear as bacias marítimas", explica Ventura.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewPaper