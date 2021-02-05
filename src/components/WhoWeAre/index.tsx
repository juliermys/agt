import React from 'react'

import {
  Container,
  Image,
  WhoWeAreTextContainer,
  WhoWeAreTextHeader,
  WhoWeAreTextBody,
  WhoWeAreTextFooter,
  ImageContainer,
  WhoWeAreFooterIcon
} from './styles'

export const WhoWeAre: React.FC = () => {
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
        <WhoWeAreTextHeader>
          <h1>Quem somos</h1>
          <hr />
        </WhoWeAreTextHeader>
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
          <h3>#vivaodigital</h3>
          <div>
            <WhoWeAreFooterIcon />
            <WhoWeAreFooterIcon />
            <WhoWeAreFooterIcon />
            <WhoWeAreFooterIcon />
            <WhoWeAreFooterIcon />
          </div>
        </WhoWeAreTextFooter>
      </WhoWeAreTextContainer>
    </Container>
  )
}
