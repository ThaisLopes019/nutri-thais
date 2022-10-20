import { Container } from './styled'
import imagem2 from '../../assets/image2.png'

export function Bloco3() {
  return (
    <Container>
      <h2>Especialidades</h2>
      <span>Fique em forma com uma alimentação saudável e balanceada.</span>

      <div>
        <img src={imagem2} alt="Alimentos" />
        <div className="txt">
          <ul>
            <li>
              <a href="">hipertrofia</a>
            </li>
            <li>
              <a href="">reeducação alimentar</a>
            </li>
            <li>
              <a href="">emagrecimento</a>
            </li>
            <li>
              <a href="">prevenção de doenças</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
