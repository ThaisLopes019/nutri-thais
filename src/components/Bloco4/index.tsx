import { Container, Footer } from './styled'
import wpp from '../../assets/icon/wpp.svg'
import insta from '../../assets/icon/insta.svg'
import email from '../../assets/icon/email.svg'

interface IBloco4 {
  linkWpp: string
  linkInsta: string
  linkEmail: string
}

export function Bloco4({ linkEmail, linkInsta, linkWpp }: IBloco4) {
  return (
    <>
      <Container>
        <div className="div-text">
          <p>Curtiu? Entre em contato para agendar uma consulta</p>
          <span>
            Atendimentos online e presencial em Pedras de Fogo e Itambé.
          </span>
        </div>
        <div className="div-icon">
          <a href={linkWpp}>
            <img src={wpp} alt="logo wpp" />
          </a>
          <a href={linkInsta}>
            <img src={insta} alt="logo insta" />
          </a>
          <a href={linkEmail}>
            <img src={email} alt="logo e-mail" />
          </a>
        </div>
      </Container>
      <Footer>
        <span>©2022</span>
      </Footer>
    </>
  )
}
