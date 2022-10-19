import { Container } from './styled'
import imagem1 from '../../assets/image1.png'

export function Bloco2() {
  return (
    <Container>
      <h2>Sobre a nutrição</h2>
      <span>A nutrição é a arte de alimentar vidas.</span>

      <div className="content">
        <div className="txt">
          <p>
            A nutrição faz parte da vida de todo ser humano, com a ingestão de
            alimentos saudáveis e necessários o corpo recebe os nutrientes,
            vitaminas e minerais que são essenciais para manter o funcionamento
            adequado, inclusive prevenindo doenças.
          </p>
        </div>
        <img className="img1" src={imagem1} alt="Foto alimentos saudáveis" />
      </div>
    </Container>
  )
}
