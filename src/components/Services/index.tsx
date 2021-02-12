import React from 'react'

import { Container, ServicesContainer, TitleContainer } from './styles'

const servicesList: Array<{
  title: string
  imageUrl: string
  description: string
}> = [
  {
    title: 'Identidade Visual',
    description:
      'Combinação de elementos visuais que refletem um nome, ideia, produto, empresa ou serviço. As cores, tipografias, formatos e até frases, como o slogan, possuem o papel de gravar na mente do público, de forma rápida e objetiva.',
    imageUrl: ''
  },
  {
    title: 'Identidade Visual',
    description:
      'Combinação de elementos visuais que refletem um nome, ideia, produto, empresa ou serviço. As cores, tipografias, formatos e até frases, como o slogan, possuem o papel de gravar na mente do público, de forma rápida e objetiva.',
    imageUrl: ''
  },
  {
    title: 'Identidade Visual',
    description:
      'Combinação de elementos visuais que refletem um nome, ideia, produto, empresa ou serviço. As cores, tipografias, formatos e até frases, como o slogan, possuem o papel de gravar na mente do público, de forma rápida e objetiva.',
    imageUrl: ''
  },
  {
    title: 'Identidade Visual',
    description:
      'Combinação de elementos visuais que refletem um nome, ideia, produto, empresa ou serviço. As cores, tipografias, formatos e até frases, como o slogan, possuem o papel de gravar na mente do público, de forma rápida e objetiva.',
    imageUrl: ''
  },
  {
    title: 'Identidade Visual',
    description:
      'Combinação de elementos visuais que refletem um nome, ideia, produto, empresa ou serviço. As cores, tipografias, formatos e até frases, como o slogan, possuem o papel de gravar na mente do público, de forma rápida e objetiva.',
    imageUrl: ''
  },
  {
    title: 'Identidade Visual',
    description:
      'Combinação de elementos visuais que refletem um nome, ideia, produto, empresa ou serviço. As cores, tipografias, formatos e até frases, como o slogan, possuem o papel de gravar na mente do público, de forma rápida e objetiva.',
    imageUrl: ''
  }
]

export const Services = (): JSX.Element => {
  return (
    <Container>
      <TitleContainer>
        <h3>Serviços</h3>
        <hr />
      </TitleContainer>
      <ServicesContainer>
        {servicesList.length > 0 &&
          servicesList.map(({ imageUrl, title, description }) => (
            <ul key={Math.random()}>
              <li>
                <img src={imageUrl} alt={`image - ${title}`} />
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </li>
            </ul>
          ))}
      </ServicesContainer>
    </Container>
  )
}
