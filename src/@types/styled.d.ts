/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { theme } from '../styles/theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    color: string
    text: {
      ligth: string
      secundary: string
      default: string
      strong: string
      bigStrong: string
    }
    background: {
      default: string
      primary: string
      secundary: string
      card: string
      table: string
    }
  }
}
