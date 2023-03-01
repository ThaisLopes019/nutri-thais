import { Container } from './styled'
import imagem2 from '../../assets/image2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export function Bloco3() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Container id="especialidade">
      <h2>Especialidades</h2>
      <span>Fique em forma com uma alimentação saudável e balanceada.</span>

      <div>
        <img src={imagem2} alt="Alimentos" data-aos="flip-left" />
        <div className="txt">
          <ul>
            <li
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="0"
              data-aos-offset="0"
            >
              <a href="">hipertrofia</a>
            </li>
            <li
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <a href="">reeducação alimentar</a>
            </li>
            <li
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="500"
              data-aos-offset="0"
            >
              <a href="">emagrecimento</a>
            </li>
            <li
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="700"
              data-aos-offset="0"
            >
              <a href="">prevenção de doenças</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
