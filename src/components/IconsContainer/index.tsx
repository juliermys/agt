import React from 'react'

import {
  Container,
  BehanceLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  Button
} from './styles'

export const IconsContainer = (): JSX.Element => {
  return (
    <Container>
      <Button>
        <InstagramLogo />
      </Button>
      <Button>
        <FacebookLogo />
      </Button>
      <Button>
        <TwitterLogo />
      </Button>
      <Button>
        <BehanceLogo />
      </Button>
      <Button>
        <LinkedinLogo />
      </Button>
    </Container>
  )
}
