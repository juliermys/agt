import React, { useCallback, useState } from 'react'

import {
  Container,
  Image,
  WhoWeAreTextContainer,
  WhoWeAreTextHeader,
  WhoWeAreTextBody,
  WhoWeAreTextFooter,
  ImageContainer,
  WhoWeAreFooterIcon,
  WhoWeAreTextHeaderSecond,
  TextHeaer
} from './styles'

export const WhoWeAre = (): JSX.Element => {
  const [iconInsta, setIconIsta] = useState('icons/instagram/icon-default.png')
  const [iconFacebook, setIconFacebook] = useState(
    'icons/facebook/icon-default.png'
  )
  const [iconTwiter, setIconTwiter] = useState('icons/twiter/icon-default.png')
  const [iconBehance, setIconBehance] = useState(
    'icons/behance/icon-default.png'
  )
  const [iconLinkedin, setIconLinkedin] = useState(
    'icons/linkedin/icon-default.png'
  )

  const handlerHoverIconInsta = useCallback(() => {
    setIconIsta('icons/instagram/icon-active.png')
  }, [iconInsta])

  const handlerDownHoverIconInsta = useCallback(() => {
    setIconIsta('icons/instagram/icon-default.png')
  }, [iconInsta])

  const handlerHoverIconFacebook = useCallback(() => {
    setIconFacebook('icons/facebook/icon-active.png')
  }, [iconFacebook])

  const handlerDownHoverIconFacebook = useCallback(() => {
    setIconFacebook('icons/facebook/icon-default.png')
  }, [iconFacebook])

  const handlerHoverIconTwiter = useCallback(() => {
    setIconTwiter('icons/twiter/icon-active.png')
  }, [iconTwiter])

  const handlerDownHoverIconTwiter = useCallback(() => {
    setIconTwiter('icons/twiter/icon-default.png')
  }, [iconTwiter])

  const handlerHoverIconBehance = useCallback(() => {
    setIconBehance('icons/behance/icon-active.png')
  }, [iconBehance])

  const handlerDownHoverIconBehance = useCallback(() => {
    setIconBehance('icons/behance/icon-default.png')
  }, [iconBehance])

  const handlerHoverIconLinkedin = useCallback(() => {
    setIconLinkedin('icons/linkedin/icon-active.png')
  }, [iconBehance])

  const handlerDownHoverIconLinkedin = useCallback(() => {
    setIconLinkedin('icons/linkedin/icon-default.png')
  }, [iconBehance])

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
          <div>
            <WhoWeAreFooterIcon
              icon={iconInsta}
              onMouseEnter={handlerHoverIconInsta}
              onMouseOut={handlerDownHoverIconInsta}
            />
            <WhoWeAreFooterIcon
              icon={iconFacebook}
              onMouseEnter={handlerHoverIconFacebook}
              onMouseOut={handlerDownHoverIconFacebook}
            />
            <WhoWeAreFooterIcon
              icon={iconTwiter}
              onMouseEnter={handlerHoverIconTwiter}
              onMouseOut={handlerDownHoverIconTwiter}
            />
            <WhoWeAreFooterIcon
              icon={iconBehance}
              onMouseEnter={handlerHoverIconBehance}
              onMouseOut={handlerDownHoverIconBehance}
            />
            <WhoWeAreFooterIcon
              icon={iconLinkedin}
              onMouseEnter={handlerHoverIconLinkedin}
              onMouseOut={handlerDownHoverIconLinkedin}
            />
          </div>
        </WhoWeAreTextFooter>
      </WhoWeAreTextContainer>
    </Container>
  )
}
