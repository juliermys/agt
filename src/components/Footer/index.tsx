import { IconsContainer } from '../IconsContainer'

import { Container, Left, LogoGrey, Rigth } from './style'

const Footer = (): JSX.Element => {
  return (
    <Container>
      <Left>
        <LogoGrey />
        <div className="divider" />
        <div className="author">por Juliermys Auaci Gomes</div>
      </Left>
      <Rigth>
        <IconsContainer />
      </Rigth>
    </Container>
  )
}

export default Footer
