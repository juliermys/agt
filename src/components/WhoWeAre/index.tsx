import { IconsContainer } from '../IconsContainer'

import {
  Container,
  Image,
  WhoWeAreTextContainer,
  WhoWeAreTextHeader,
  WhoWeAreTextBody,
  WhoWeAreTextFooter,
  ImageContainer,
  WhoWeAreTextHeaderSecond,
  TextHeaer
} from './styles'

export const WhoWeAre = (): JSX.Element => {
  return (
    <Container>
      <ImageContainer>
        <Image
          alt="image-who-we-are"
          draggable={false}
          src="whoWeAre/image/tshirt/tshirt-cell.png"
        />
      </ImageContainer>
      <WhoWeAreTextContainer>
        <TextHeaer>
          <WhoWeAreTextHeader>
            <h1>Quem</h1>
            <hr />
          </WhoWeAreTextHeader>
          <WhoWeAreTextHeaderSecond>
            <h4>somos</h4>
          </WhoWeAreTextHeaderSecond>
        </TextHeaer>
        <WhoWeAreTextBody>
          <p>
            Somos uma agência de marketing e publicidade focada em soluções
            criativas. Utilizamos a criação para diversas mídias para que sua
            marca chegue ao seu cliente de forma rápida e prática. Unindo a
            nossa criatividade e a tecnologia para desenvolver o visual do seu
            negócio.
          </p>
        </WhoWeAreTextBody>
        <WhoWeAreTextFooter>
          <section>
            <h6>o</h6>
            <h6 className="color-blue">futuro</h6>
            <h6>chegou</h6>
          </section>
          <div className="container-icon">
            <IconsContainer />
          </div>
        </WhoWeAreTextFooter>
      </WhoWeAreTextContainer>
    </Container>
  )
}
