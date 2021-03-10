import styled from 'styled-components'
import LogoSVG from '../../../public/images/logo.svg'

export const Logo = styled(LogoSVG)`
  width: 350px;
`

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 3% 10%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('build/background.png') no-repeat;
  background-size: cover;
  > div > button > a > svg {
    * {
      fill: #53565a;
    }
  }
  .text {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    > h1 {
      font-size: 5rem;
      color: ${({ theme }) => theme.text.primary};
      font-weight: bold;
    }
    > p {
      color: ${({ theme }) => theme.text.primary};
      font-weight: 400;
      font-size: 2.5rem;
    }
    display: flex;
    flex-direction: column;
  }
`
