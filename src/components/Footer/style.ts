import styled from 'styled-components'
import LogoSVG from '../../../public/images/logo.svg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 1.5rem 0;
`

export const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  .divider {
    background-color: ${({ theme }) => theme.background.disable};
    height: 20px;
    margin: 20px;
    width: 1px;
  }

  .author {
    transition: 0.3s ease-in;
    -webkit-transition: 0.3s ease-in;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.background.disable};
    :hover {
      color: ${({ theme }) => theme.background.primary};
      font-weight: 400;
      cursor: pointer;
    }
  }
`

export const LogoGrey = styled(LogoSVG)`
  height: 90px;
  width: 90px;
  * {
    transition: 0.3s ease-in;
    -webkit-transition: 0.3s ease-in;
  }
  .st0 {
    fill: ${({ theme }) => theme.background.disable};
  }
  .st1 {
    fill: ${({ theme }) => theme.background.disable};
  }
  :hover {
    .st0 {
      fill-opacity: 1;
      stroke-dashoffset: 0;
      fill: ${({ theme }) => theme.background.secundary};
    }
    .st1 {
      fill-opacity: 1;
      stroke-dashoffset: 0;
      fill: ${({ theme }) => theme.background.primary};
    }
  }
`

export const Rigth = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  > div {
    display: flex;
    align-items: center;
    width: 33%;
    justify-content: center;
  }
`

export const FooterIcon = styled.div<{ icon: string }>`
  height: 35px;
  width: 35px;
  border: none;
  background: url(${({ icon }) => icon}) no-repeat;
  background-size: cover;
  :hover {
    cursor: pointer;
    transform: scale(1.07);
  }
`
