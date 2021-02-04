import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: transparent;
  height: 98px;
  width: 100%;
  margin: auto;
  border-bottom: 2px solid ${({ theme }) => theme.background.primary};
`

export const Container = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 190px;
    height: 61px;
  }

  > ul {
    display: flex;
  }

  > ul > li {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.background.primary};
    padding-right: 30px;

    :last-child {
      padding-right: 0px;
    }
  }

  > ul > li > a {
    :hover {
      color: ${({ theme }) => theme.background.secundary};
    }
  }
`
