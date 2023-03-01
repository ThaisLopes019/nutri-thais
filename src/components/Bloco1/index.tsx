import { Container, Wrapper } from './styled'
import logoThaisDesk from '../../assets/logothais.png'
import thaisDesk from '../../assets/thaisdesk.png'
import thaisMobile from '../../assets/thaismobile.png'
import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

export function Bloco1() {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  const navigate = useNavigate()

  function hanbleTMB() {
    navigate('/TMB')
  }

  return (
    <>
      <Container>
        <img
          className="logoMobile"
          src={logoThaisDesk}
          alt=""
          data-aos="flip-left"
        />

        <nav className="navDesk" data-aos="fade-down">
          <a href="">Inicio</a>
          <a href="#sobre">Sobre</a>
          <a href="#especialidade">Especialidades</a>
          <a href="#contato">Contato</a>
          <button onClick={hanbleTMB}>
            <a>Calcule seu GET</a>
          </button>
        </nav>
      </Container>

      <Wrapper>
        <div>
          <img
            className="thaisMobile"
            src={thaisMobile}
            alt=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />

          <img
            className="thaisDesk"
            src={thaisDesk}
            alt=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          ></img>
        </div>
        <aside className="deskAside">
          <img
            className="logoDesk"
            src={logoThaisDesk}
            alt=""
            data-aos="flip-right"
          />
        </aside>
        <nav className="navMobile">
          <a
            href=""
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
          >
            Inicio
          </a>

          <a
            href="#sobre"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            Sobre
          </a>

          <a
            href="#especialidade"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            Especialidades
          </a>
          <a
            href="#contato"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0"
          >
            Contato
          </a>
          <button
            onClick={hanbleTMB}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="700"
            data-aos-offset="0"
          >
            <a>Calcule seu GET</a>
          </button>
        </nav>
      </Wrapper>
    </>
  )
}
