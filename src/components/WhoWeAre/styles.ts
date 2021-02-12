import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: url('whoWeAre/background/image-background.png');
`

export const ImageContainer = styled.div`
  width: 50%;
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
  width: 50%;
  justify-content: center;
  align-items: flex-start;
`

export const WhoWeAreTextHeader = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.background.secundary};
    font-size: 1.5rem;
    font-weight: bold;
  }

  > hr {
    border: none;
    width: 40%;
    height: 4px;
    background-color: ${({ theme }) => theme.background.primary};
  }
`

export const WhoWeAreTextBody = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  max-width: 35rem;

  > p {
    color: ${({ theme }) => theme.text.default};
    font-weight: inherit;
    font-size: 1.1rem;
  }
`

export const WhoWeAreTextFooter = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    margin-bottom: 20px;
    font-weight: 900;
    font-size: 2rem;
    color: ${({ theme }) => theme.background.secundary};
  }
`

export const WhoWeAreFooterIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background.primary};
  margin-right: 5px;

  :hover {
    background-color: ${({ theme }) => theme.background.secundary};
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.03);
  }
`
