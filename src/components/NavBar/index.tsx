import { Container, Wrapper } from './styles'

export const NavBar = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <img src="/images/logo.png" alt="Logo Image - AGT Mídias" />
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
