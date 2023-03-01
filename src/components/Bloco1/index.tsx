import { Container, Wrapper } from './styled'
import logoThaisDesk from '../../assets/logothais.png'
import thaisDesk from '../../assets/thaisdesk.png'
import thaisMobile from '../../assets/thaismobile.png'
import { useNavigate } from 'react-router-dom'

export function Bloco1() {
  const navigate = useNavigate()

  function hanbleTMB() {
    navigate('/TMB')
  }

  return (
    <>
      <Container>
        <img className="logoMobile" src={logoThaisDesk} alt="" />
        <nav className="navDesk">
          <a href="">inicio</a>
          <a href="#sobre">sobre</a>
          <a href="#especialidade">especialidades</a>
          <a href="#contato">contato</a>
          <button onClick={hanbleTMB}>
            <a>TMB</a>
          </button>
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
          <a href="#especialidade">especialidades</a>
          <a href="#contato">contato</a>
        </nav>
      </Wrapper>
    </>
  )
}
