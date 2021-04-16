import { Container, Logo } from './styles'
import { IconsContainer } from '../../components/IconsContainer'

export const Build = (): JSX.Element => (
  <Container>
    <Logo />
    <div className="text">
      <h1>Estamos em construção</h1>
      <p>ah, aproveita e faz uma visita a nossas redes sociais!</p>
    </div>
    <IconsContainer />
  </Container>
)
