import React, { useCallback, useState } from 'react'

import { Container, Left, LogoGrey, Rigth, FooterIcon } from './style'

const Footer = (): JSX.Element => {
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
      <Left>
        <LogoGrey />
        <div className="divider" />
        <div className="author">por Juliermys Auaci Gomes</div>
      </Left>
      <Rigth>
        <FooterIcon
          icon={iconInsta}
          onMouseEnter={handlerHoverIconInsta}
          onMouseOut={handlerDownHoverIconInsta}
        />
        <FooterIcon
          icon={iconFacebook}
          onMouseEnter={handlerHoverIconFacebook}
          onMouseOut={handlerDownHoverIconFacebook}
        />
        <FooterIcon
          icon={iconTwiter}
          onMouseEnter={handlerHoverIconTwiter}
          onMouseOut={handlerDownHoverIconTwiter}
        />
        <FooterIcon
          icon={iconBehance}
          onMouseEnter={handlerHoverIconBehance}
          onMouseOut={handlerDownHoverIconBehance}
        />
        <FooterIcon
          icon={iconLinkedin}
          onMouseEnter={handlerHoverIconLinkedin}
          onMouseOut={handlerDownHoverIconLinkedin}
        />
      </Rigth>
    </Container>
  )
}

export default Footer
