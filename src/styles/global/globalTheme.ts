import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font: 400 16px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    background: transparent;
  }
  div, section {
    display: flex;
  }
  body, button, input{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    height: 100vh;
  }
  
  body { 
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.background.default}
     }
  h1, h2, h3, h4, h5, h6, p, strong{ 
    font-weight: 500;
    font-size: clamp(1em, 0em + 0.4vw, 1.5em); 
  }
  button{ cursor: pointer; }
  a { text-decoration: none; }
  li { list-style: none; }
`
