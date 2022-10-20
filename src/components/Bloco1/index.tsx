import { Container, Wrapper } from './styled'
import logoThaisDesk from '../../assets/logothais.png'
import thaisDesk from '../../assets/thaisdesk.png'
import thaisMobile from '../../assets/thaismobile.png'

export function Bloco1() {
  return (
    <>
      <Container>
        <img className="logoMobile" src={logoThaisDesk} alt="" />
        <nav className="navDesk">
          <a href="">inicio</a>
          <a href="#sobre">sobre</a>
          <a href="">especialidades</a>
          <a href="#contato">contato</a>
        </nav>
      </Container>

      <Wrapper>
        <div>
          <img className="thaisMobile" src={thaisMobile} alt="" />
          <img className="thaisDesk" src={thaisDesk} alt="" />
        </div>
        <aside className="deskAside">
          <img className="logoDesk" src={logoThaisDesk} alt="" />
        </aside>
        <nav className="navMobile">
          <a href="">inicio</a>
          <a href="#sobre">sobre</a>
          <a href="">especialidades</a>
          <a href="#contato">contato</a>
        </nav>
      </Wrapper>
    </>
  )
}
