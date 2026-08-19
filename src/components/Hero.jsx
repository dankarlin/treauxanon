import { Container, Row, Col, Button } from 'react-bootstrap'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="text-center">
          <Col lg={8} className="mx-auto">
            <div className="treaux-logo"></div>
            <h1 className="display-3 fw-bold mb-4 text-white">
              TreauxAnon
            </h1>
            <h2 className="h3 mb-4 text-white">
              The ONLY Anti-Francophile Podcast Fighting the Sicko Elite
            </h2>
            <p className="lead mb-4 text-white-50">
              Exposing the croissant industrial complex, one baguette at a time. 
              <span className="french-flag crossed-out"></span>
              Join us in the fight against French hegemony!
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button 
                variant="outline-light" 
                size="lg" 
                href="#episodes"
                className="mb-3"
              >
                🥖 Listen Now
              </Button>
              <Button 
                className="btn-treaux" 
                size="lg"
                href="#conspiracy"
              >
                🇫🇷 Expose the Truth
              </Button>
            </div>
            <div className="mt-4">
              <small className="text-white-50">
                ⚠️ Warning: May contain traces of irony and satire
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero