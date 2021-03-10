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
        <a target="blank" href="https://www.instagram.com/agtmidias">
          <InstagramLogo />
        </a>
      </Button>
      <Button>
        <a target="blank" href="https://www.facebook.com/agtmidias">
          <FacebookLogo />
        </a>
      </Button>
      <Button>
        <a target="blank" href="https://www.twitter.com/agtmidias">
          <TwitterLogo />
        </a>
      </Button>
      <Button>
        <a target="blank" href="https://www.behance.net/agtmidias">
          <BehanceLogo />
        </a>
      </Button>
      <Button>
        <a target="blank" href="https://www.linkedin.com/company/agtmidias">
          <LinkedinLogo />
        </a>
      </Button>
    </Container>
  )
}
