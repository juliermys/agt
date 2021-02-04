/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { theme } from '../styles/theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    color: string
    text: {
      secundary: string
      default: string
      strong: string
      bigStrong: string
    }
    background: {
      primary: string
      secundary: string
      card: string
    }
  }
}
