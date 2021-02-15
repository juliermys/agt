/* eslint-disable multiline-ternary */
import React, { useCallback, useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../public/lottie/loading.json'
import {
  Container,
  Wrapper,
  ContentLeft,
  ContentRight,
  InputGroup,
  Row,
  Input,
  ButtonRegister
} from './styles'

const Contact = (): JSX.Element => {
  const defaultOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const [valueInputEmail, setValueInputEmail] = useState('')
  const [valueInputName, setValueInputName] = useState('')
  const [valueInputWhatsApp, setValueInputWhatsApp] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handlerSetValueInputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueInputEmail(event.target.value)
    },
    [valueInputEmail]
  )

  const handlerSetValueInputName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueInputName(event.target.value)
    },
    [valueInputEmail]
  )

  const handlerSetValueInputWhatsApp = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueInputWhatsApp(event.target.value)
    },
    [valueInputEmail]
  )

  const handlerClickButtonRegister = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [isLoading])

  return (
    <Wrapper>
      <Container>
        <ContentLeft>
          <h2>Fique atento as nossas novidades</h2>
          <p>
            Você gostaria de receber algumas dicas e novidades que preparamos
            especialmente pra você? Deixe aqui seu contato que iremos enviar com
            exclusividade pra você!
          </p>
        </ContentLeft>
        <ContentRight>
          <label htmlFor="label-form">Digite sua informações:</label>
          <InputGroup>
            <Row>
              <Input
                mask={''}
                placeholder="E-mail"
                type={'email'}
                value={valueInputEmail}
                onChange={handlerSetValueInputEmail}
              />
              <Input
                mask={''}
                placeholder="Nome"
                type="text"
                value={valueInputName}
                onChange={handlerSetValueInputName}
              />
            </Row>
            <Row>
              <Input
                mask={'(99) 99999-9999'}
                placeholder="whatsapp"
                type="text"
                value={valueInputWhatsApp}
                onChange={handlerSetValueInputWhatsApp}
              />
              <ButtonRegister onClick={handlerClickButtonRegister}>
                {!isLoading ? (
                  'cadastrar'
                ) : (
                  <Lottie
                    options={defaultOptionsLottie}
                    height={40}
                    width={40}
                  />
                )}
              </ButtonRegister>
            </Row>
          </InputGroup>
        </ContentRight>
      </Container>
      <hr />
    </Wrapper>
  )
}

export default Contact
