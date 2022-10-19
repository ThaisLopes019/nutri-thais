import { Container } from './styled'
import logoThaisDesk from '../../assets/logothais.png'
import logoThaisMobile from '../../assets/logomobile.png'
import thaisDesk from '../../assets/thaisdesk.png'
import thaisMobile from '../../assets/thaismobile.png'

export function Bloco1() {
  return (
    <Container>
      <img className="logoThaisDesk" src={thaisDesk} alt="Thais Lopes" />
      <img className="thaismobile" src={thaisMobile} alt="Thais Lopes" />
      <section>
        <img className="logoThaisMobile" src={logoThaisMobile} alt="" />
      </section>
      <div className="div-desk">
        <nav>
          <a href="">inicio</a>
          <a href="">sobre</a>
          <a href="">especialidades</a>
          <a href="">contato</a>
        </nav>
        <img
          className="logoThaisDesk"
          src={logoThaisDesk}
          alt="logo Thaís Lopes"
        />
      </div>
    </Container>
  )
}
