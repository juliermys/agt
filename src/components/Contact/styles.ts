import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Wrapper = styled.div`
  width: 100%;
  background: url('contact/contact-background.jpg') no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  > hr {
    height: 3px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    background-color: ${({ theme }) => theme.background.secundary};
    border: none;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 60px;
  flex-wrap: wrap;
`

export const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;
  > h2 {
    color: ${({ theme }) => theme.text.ligth};
    font-weight: 700;
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }

  > p {
    color: ${({ theme }) => theme.text.ligth};
    font-weight: 400;
    font-size: 0.8rem;
  }
`

export const ContentRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  > label {
    font-weight: 400;
    color: ${({ theme }) => theme.text.ligth};
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
`

export const Input = styled(InputMask)`
  font-weight: 400;
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  height: 40px;
  width: 300px;
  max-height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  color: ${({ theme }) => theme.text.secundary};
  background-color: ${({ theme }) => theme.background.default};
  :hover {
    cursor: text;
    border: 2px solid ${({ theme }) => theme.background.secundary};
  }
`

export const ButtonRegister = styled.button`
  border: 2px solid ${({ theme }) => theme.background.secundary};
  max-height: 40px;
  width: 300px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.background.secundary};
  color: ${({ theme }) => theme.text.ligth};
  text-transform: uppercase;
  :hover {
    background-color: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.background.secundary};
    transition: 0.3s ease-in;
    filter: drop-shadow(5px 7px 3px rgba(0, 0, 0, 0.5));
    transform: scale(1.01);
    -webkit-transform: scale(1.01);
    -webkit-transition: 0.3s ease-in;
    -webkit-filter: drop-shadow(5px 7px 3px rgba(0, 0, 0, 0.5));
  }
`
