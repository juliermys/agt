import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.default};
  height: 50px;
  margin-bottom: 98px;
  max-height: 80vh;
  width: 100%;
  margin: auto;
  border-bottom: 4px solid ${({ theme }) => theme.background.primary};
  position: -webkit-sticky;
  position: fixed;
  box-shadow: ${({ theme }) => theme.background.primary} 0px 5px 50px;
  top: 0;
  z-index: 100;
`

export const Container = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    height: 100%;
    width: 10%;
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
    font-weight: 600;
    color: ${({ theme }) => theme.background.primary};
    :hover {
      color: ${({ theme }) => theme.background.secundary};
    }
  }
`
