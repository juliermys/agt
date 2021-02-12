import styled from 'styled-components'

const height = 55

export const ImageBanner = styled.div`
  background: url('miniBanner/miniBanner.png') no-repeat;
  background-size: cover;
  height: ${height}px;
  width: 100%;
  background-color: red;
  z-index: 5;
  margin-bottom: -${height}px;
`
