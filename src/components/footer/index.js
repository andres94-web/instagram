import React from 'react'

import { Container } from './styles'

function Footer({ color, ...props }) {
  return (
    <Container color={color} {...props}>
      <ul>
        <li>
          <span>prueba</span>
        </li>
        <li>
          <span>prueba</span>
        </li>
        <li>
          <span>prueba</span>
        </li>
        <li>
          <span>prueba</span>
        </li>
        <li>
          <span>prueba</span>
        </li>
        <li>
          <span>prueba</span>
        </li>
        <li>
          <span>prueba</span>
        </li>
        <li>
          <span>prueba</span>
        </li>
        <li>
          <span>prueba prueba</span>
        </li>
        <li>
          <span>prueba prueba</span>
        </li>
        <li>
          <span>prueba</span>
        </li>
      </ul>

      <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
    </Container>
  )
}

export default Footer
