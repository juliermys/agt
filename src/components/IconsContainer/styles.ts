import styled from 'styled-components'
import LogoBehance from '../../../public/icons/svg/behance.svg'
import LogoFacebook from '../../../public/icons/svg/facebook.svg'
import LogoInstagram from '../../../public/icons/svg/instagram.svg'
import LogoLinkedin from '../../../public/icons/svg/linkedin.svg'
import LogoTwitter from '../../../public/icons/svg/twitter.svg'

export const Container = styled.div`
  height: 20px;
  width: 15%;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  border: none;
  height: 20px;
  width: 100%;
  :hover {
    transform: scale(1.05);
  }
  * {
    transition: 0.2s ease-in;
    -webkit-transition: 0.2s ease-in;
  }
`

export const FacebookLogo = styled(LogoFacebook)`
  height: 100%;
  width: 100%;
  cursor: pointer;
  * {
    fill: ${({ theme }) => theme.background.disable};
  }

  :hover {
    * {
      fill: #1976d2;
    }
  }
`

export const BehanceLogo = styled(LogoBehance)`
  height: 100%;
  width: 100%;
  cursor: pointer;
  * {
    fill: ${({ theme }) => theme.background.disable};
  }

  :hover {
    * {
      fill: #0067ff;
    }
  }
`
export const InstagramLogo = styled(LogoInstagram)`
  height: 100%;
  width: 100%;

  cursor: pointer;
  * {
    fill: ${({ theme }) => theme.background.disable};
  }
  :hover {
    * {
      fill: url(#a);
    }
  }
`
export const LinkedinLogo = styled(LogoLinkedin)`
  height: 100%;
  width: 100%;
  cursor: pointer;
  * {
    fill: ${({ theme }) => theme.background.disable};
  }

  :hover {
    * {
      fill: #0077b5;
    }
  }
`
export const TwitterLogo = styled(LogoTwitter)`
  height: 100%;
  width: 100%;
  cursor: pointer;
  * {
    fill: ${({ theme }) => theme.background.disable};
  }

  :hover {
    * {
      fill: #03a9f4;
    }
  }
`
