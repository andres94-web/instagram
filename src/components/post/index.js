import React from 'react'

import { More, Like, Comment, Save, Direct } from '../icons'
import { ProfilBox, Dropdown } from '../'
import { DropdownItem } from '../dropdown/profileItem'

import { Container, Body, Footer } from './styles'
import { Link } from 'react-router-dom'

function Post({
  name = 'selçuk özdemir',
  alt = '',
  img = 'https://gazetekarinca.com/wp-content/uploads/2020/01/Picasso.jpg'
}) {
  return (
    <Container>
      <ProfilBox
        icon={
          <Dropdown DropButton={<More />}>
            <DropdownItem to="/">prueba prueba prueba</DropdownItem>
            <DropdownItem to="/">prueba prueba</DropdownItem>
            <DropdownItem to="/">prueba prueba</DropdownItem>
            <DropdownItem to="/">prueba</DropdownItem>
          </Dropdown>
        }
        gradient
      />

      <Body>
        <img src={img} alt={alt} />
      </Body>

      <Footer>
        <div>
          <section className="Post-footer-actions">
            <button>
              <Like />
            </button>
            <button>
              <Comment />
            </button>
            <button>
              <Direct />
            </button>
            <button>
              <Save />
            </button>
          </section>
          <section className="Post-footer-viewcount">
            <button>
              <span>19.000</span>
              <span>prueba</span>
            </button>
          </section>
          <section className="Post-footer-comment">
            <Link className="Post-footer-comment-link" to="/selcuk">
            prueba
            </Link>
            <span>prueba prueba prueba prueba</span>
            <Link to="/" className="Post-footer-comment-tag">
              #prueba
            </Link>
            <Link to="/" className="Post-footer-comment-tag">
              #prueba
            </Link>
            <Link to="/" className="Post-footer-comment-tag">
              #prueba
            </Link>
          </section>
        </div>
        <form className="Post-footer-form">
          <textarea placeholder="prueba..."></textarea>
          <button>prueba</button>
        </form>
      </Footer>
    </Container>
  )
}

export default Post
