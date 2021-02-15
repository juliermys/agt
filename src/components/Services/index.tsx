import React from 'react'

import {
  Container,
  ServicesContainer,
  TitleContainer,
  CardServiceContainer,
  IconService,
  ContainerRigth
} from './styles'

import { servicesList } from './data'

export const Services = (): JSX.Element => {
  return (
    <Container>
      <TitleContainer>
        <h3>Nossos</h3>
        <div>
          <hr />
          <h3>Serviços</h3>
        </div>
      </TitleContainer>
      <ServicesContainer>
        {servicesList.length >= 1 &&
          servicesList.map(({ description, title, imageUrl }) => (
            <CardServiceContainer key={Math.random()}>
              <IconService>
                <img src={imageUrl} />
              </IconService>
              <ContainerRigth>
                <h1>{title}</h1>
                <p>{description}</p>
              </ContainerRigth>
            </CardServiceContainer>
          ))}
      </ServicesContainer>
    </Container>
  )
}
