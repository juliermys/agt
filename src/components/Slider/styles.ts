import styled from 'styled-components'
import AwesomeSlider from 'react-awesome-slider'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const AwesomeSliderStyled = styled(AwesomeSlider)`
  max-height: 90vh;
  z-index: 9;

  > nav > button {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.background.secundary};
    width: 10px;
    height: 10px;
    z-index: 10;
    margin-top: -10%;
  }

  .awssld__bullets--active {
    background-color: ${({ theme }) => theme.background.secundary};
  }
`

export const BulletsContainer = styled.div`
  background-color: red;
  height: 20px;
  width: 100%;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Bullet = styled.button``
