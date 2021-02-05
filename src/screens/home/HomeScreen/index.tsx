import { NavBar } from '../../../components/NavBar'
import { Slider } from '../../../components/Slider'
import { Container } from './styles'

export const HomeScreen = (): JSX.Element => {
  return (
    <Container>
      <NavBar />
      <Slider />
    </Container>
  )
}
