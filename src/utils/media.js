import { css } from 'styled-components'

export const mobile = inner => css`
  @media (max-width: ${720 / 16}em) {
    ${inner}
  }
`

export const tablet = inner => css`
  @media (max-width: ${1024}px) {
    ${inner}
  }
`
