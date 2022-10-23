import React from 'react'
import { Link } from 'react-router-dom'

import { ProfilBox, Post, Footer } from '../../components'

import { Container, Sidebar, Timeline } from './styles'

function Home() {
  return (
    <Container>
      <Sidebar>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Sidebar>
      <Timeline>
        <div style={{ position: 'sticky', top: '100px' }}>
          <div>
            <ProfilBox size={56} />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div className="Timeline-suggestions">
              <span>prueba</span>
              <Link to="/" className="small">
              prueba
              </Link>
            </div>

            <ProfilBox icon="prueba" />
            <ProfilBox gradient icon="prueba" />
            <ProfilBox icon="prueba" />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </Timeline>
    </Container>
  )
}

export default Home
