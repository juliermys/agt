import { Container, Wrapper } from './styles'
import LogoSVG from '../../../public/images/logo.svg'

export const NavBar = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <LogoSVG />
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">quem somos</a>
          </li>
          <li>
            <a href="">serviços</a>
          </li>
          <li>
            <a href="">portfólio</a>
          </li>
          <li>
            <a href="">blog</a>
          </li>
          <li>
            <a href="">contato</a>
          </li>
        </ul>
      </Container>
    </Wrapper>
  )
}
