import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: url('whoWeAre/background/image-background.png');
`

export const ImageContainer = styled.div`
  width: 40%;
  z-index: 6;
`

export const Image = styled.img`
  height: 37rem;
  background-size: 10px;
  margin: auto;
`

export const WhoWeAreTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 2.5rem;
  justify-content: center;
  align-items: flex-start;
`

export const TextHeaer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`

export const WhoWeAreTextHeader = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.background.primary};
    font-size: 5rem;
    letter-spacing: -5px;
    text-transform: uppercase;
    font-weight: 900;
    align-self: center;
    height: 100%;
  }

  > hr {
    width: 75%;
    margin-top: -30px;
    height: 10px;
    background-color: ${({ theme }) => theme.background.primary};
  }
`

export const WhoWeAreTextHeaderSecond = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  > h4 {
    margin-top: 15px;
    transform: translate(-10%);
    margin-bottom: 30%;
    color: ${({ theme }) => theme.background.secundary};
    font-size: 3rem;
    font-weight: 900;
  }
`

export const WhoWeAreTextBody = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 35rem;

  > p {
    color: ${({ theme }) => theme.text.secundary};
    font-weight: 700;
    font-size: 1.1rem;
  }
`

export const WhoWeAreTextFooter = styled.div`
  display: flex;
  flex-direction: column;
  .color-blue {
    color: ${({ theme }) => theme.background.primary};
  }
  > section,
  p {
    color: ${({ theme }) => theme.text.secundary};
    font-size: 2rem;
    margin-bottom: 20px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const WhoWeAreFooterIcon = styled.div<{ icon: string }>`
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
