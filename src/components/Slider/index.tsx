import 'react-awesome-slider/dist/styles.css'
import AutoplayHoc from 'react-awesome-slider/dist/autoplay'
import { Container, AwesomeSliderStyled } from './styles'

export const Slider = (): JSX.Element => {
  const AutoplaySlider = AutoplayHoc(AwesomeSliderStyled)

  const data: Array<{ source: string; slug: string }> = [
    { source: '/slider/desktop/01.png', slug: 'this-is-zero' },
    { source: '/slider/desktop/02.png', slug: 'this-is-one' },
    { source: '/slider/desktop/03.png', slug: 'this-is-two' }
  ]

  return (
    <Container>
      <AutoplaySlider
        play
        name="images-slider"
        startup={true}
        activityColor={'green'}
        animation="scaleOutAnimation"
      >
        {data.length > 0 &&
          data.map(({ source, slug }) => (
            <div key={source} data-slug={slug} data-src={source} />
          ))}
      </AutoplaySlider>
    </Container>
  )
}
