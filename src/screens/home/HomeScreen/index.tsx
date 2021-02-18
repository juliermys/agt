import Contact from '../../../components/Contact'
import Footer from '../../../components/Footer'
import { MiniBanner } from '../../../components/MiniBanner'
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
      <MiniBanner />
      <WhoWeAre />
      <Services />
      <Contact />
      <Footer />
    </Container>
  )
}
