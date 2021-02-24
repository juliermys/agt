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
  ButtonRegister,
  InputRow
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
  const [errorInputEmail, setErrorInputEmail] = useState('')
  const [errorInputName, setErrorInputName] = useState('')
  const [errorInputWhatsApp, setErrorInputWhatsApp] = useState('')
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

  const handlerClickButtonRegister = useCallback(async () => {
    setIsLoading(true)

    if (valueInputEmail === '') setErrorInputEmail('Campo email é obrigatorio')

    if (valueInputName === '') setErrorInputName('Campo nome é obrigatorio')

    if (valueInputWhatsApp === '') {
      setErrorInputWhatsApp('Campo WhatsApp é obrigatorio')
    }

    if (valueInputWhatsApp.length < 17) {
      setErrorInputWhatsApp('Campo WhatsApp mal formatado')
    }
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
              <InputRow error={errorInputEmail !== ''}>
                <Input
                  error={errorInputEmail !== ''}
                  mask={''}
                  placeholder="E-mail"
                  type={'email'}
                  value={valueInputEmail}
                  onChange={handlerSetValueInputEmail}
                />
                <span>{errorInputEmail}</span>
              </InputRow>
              <InputRow error={errorInputName !== ''}>
                <Input
                  error={errorInputName !== ''}
                  mask={''}
                  placeholder="Nome"
                  type="text"
                  value={valueInputName}
                  onChange={handlerSetValueInputName}
                />
                <span>{errorInputName}</span>
              </InputRow>
            </Row>
            <Row>
              <InputRow error={errorInputWhatsApp !== ''}>
                <Input
                  error={errorInputWhatsApp !== ''}
                  mask={'(99) 99999-9999'}
                  placeholder="whatsapp"
                  type="text"
                  value={valueInputWhatsApp}
                  onChange={handlerSetValueInputWhatsApp}
                />
                <span>{errorInputWhatsApp}</span>
              </InputRow>
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
