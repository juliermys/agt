import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto 4rem auto;

  > h3 {
    margin-bottom: -10px;
    color: ${({ theme }) => theme.text.ligth};
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  > div {
    margin-top: -10px;
    display: flex;
    align-items: center;
    margin-right: -4rem;
  }

  > div > hr {
    border-color: ${({ theme }) => theme.background.secundary};
    background-color: ${({ theme }) => theme.background.secundary};
    height: 10px;
    width: 100%;
    justify-self: end;
  }
  > div > h3 {
    color: ${({ theme }) => theme.text.ligth};
    font-size: 2rem;
    font-weight: 900;
    text-transform: lowercase;
  }
`

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
  width: 100%;
`

export const CardServiceContainer = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem 1rem 6rem 1rem;
`

export const IconService = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.background.default};
  border-radius: 50%;
  overflow: hidden;
  > img {
    flex-shrink: 0;
    max-width: 40%;
    margin: auto;
    background-size: cover;
  }
`

export const ContainerRigth = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 15px;

  > h1 {
    color: ${({ theme }) => theme.text.ligth};
    font-weight: 700;
    margin: 0 0 1rem 0;
    font-size: 1rem;
  }
  > p {
    color: ${({ theme }) => theme.text.ligth};
    font-weight: 400;
    font-size: 0.9rem;
  }
`
