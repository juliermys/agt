import { NavBar } from '../../../components/NavBar'
import { Services } from '../../../components/Services'
import { Slider } from '../../../components/Slider'
import { WhoWeAre } from '../../../components/WhoWeAre'
import { Container } from './styles'

export const HomeScreen = (): JSX.Element => {
  return (
    <Container>
      <NavBar />
      <Slider />
      <WhoWeAre />
      <Services />
    </Container>
  )
}
