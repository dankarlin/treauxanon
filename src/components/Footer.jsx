import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="py-5" style={{backgroundColor: '#000'}}>
      <Container>
        <Row>
          <Col lg={6} className="mb-4">
            <h5 className="text-white mb-3">TreauxAnon</h5>
            <p className="text-white-50 mb-3">
              The ONLY podcast brave enough to expose the French conspiracy. 
              Join the resistance against croissant imperialism.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50">📱 Apple Podcasts</a>
              <a href="#" className="text-white-50">🎵 Spotify</a>
              <a href="#" className="text-white-50">📺 YouTube</a>
            </div>
          </Col>
          
          <Col lg={3} className="mb-4">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#episodes" className="text-white-50 text-decoration-none">Episodes</a></li>
              <li><a href="#about" className="text-white-50 text-decoration-none">About</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">RSS Feed</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Newsletter</a></li>
            </ul>
          </Col>
          
          <Col lg={3} className="mb-4">
            <h6 className="text-white mb-3">Support the Resistance</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">☕ Buy us coffee (not French press)</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">📧 Report French Activity</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">🛡️ Join Patreon</a></li>
            </ul>
          </Col>
        </Row>
        
        <hr className="border-secondary my-4" />
        
        <Row>
          <Col lg={6}>
            <p className="text-white-50 mb-0">
              © 2024 TreauxAnon. All rights reserved. 
              <span className="french-flag crossed-out ms-2"></span>
            </p>
          </Col>
          <Col lg={6} className="text-lg-end">
            <small className="text-white-50">
              Parody content. No actual conspiracies detected.
              <br />
              Made with ❤️ and zero French ingredients.
            </small>
          </Col>
        </Row>
        
        <Row className="mt-3">
          <Col className="text-center">
            <small className="text-white-50">
              🥖⚔️ Vive la Résistance! ⚔️🥖
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer