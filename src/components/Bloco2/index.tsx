import { Container } from './styled'
import imagem1 from '../../assets/image1.png'
import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

export function Bloco2() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Container id="sobre">
      <h2>Sobre a nutrição</h2>
      <span>A nutrição é a arte de alimentar vidas.</span>

      <div className="content">
        <div className="txt" data-aos="fade-right">
          <p>
            A nutrição faz parte da vida de todo ser humano, com a ingestão de
            alimentos saudáveis e necessários o corpo recebe os nutrientes,
            vitaminas e minerais que são essenciais para manter o funcionamento
            adequado, inclusive prevenindo doenças.
          </p>
        </div>
        <img
          className="img1"
          src={imagem1}
          alt="Foto alimentos saudáveis"
          data-aos="fade-left"
        />
      </div>
    </Container>
  )
}
