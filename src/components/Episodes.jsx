import React from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'

function Episodes() {
  const episodes = [
    {
      id: 1,
      title: "The Croissant Conspiracy",
      description: "We dive deep into how Big Pastry controls the breakfast industrial complex. Why are croissants curved? It's not an accident.",
      duration: "69:42",
      date: "2024-12-01",
      tags: ["URGENT", "PASTRY GATE"],
      warning: "⚠️ Contains graphic descriptions of buttery layers"
    },
    {
      id: 2,
      title: "Baguette Bourgeoisie: The Bread Elite",
      description: "An exposé on how French bread makers control global carb distribution. Plus: Is sourdough starter actually a CIA psyop?",
      duration: "73:16",
      date: "2024-11-24",
      tags: ["BREAD GATE", "CARB CONTROL"],
      warning: "🥖 May cause sudden urges to avoid French bakeries"
    },
    {
      id: 3,
      title: "Mime Surveillance State",
      description: "Those silent performers aren't just entertaining tourists - they're gathering intelligence! We break down the invisible box industrial complex.",
      duration: "58:33",
      date: "2024-11-17",
      tags: ["MIME GATE", "INVISIBLE WALLS"],
      warning: "🤐 Listening may result in temporary muteness"
    },
    {
      id: 4,
      title: "Champagne Psyops & Sparkling Lies",
      description: "Why does champagne only come from one region? We investigate the fizzy monopoly and its connection to mind control bubbles.",
      duration: "65:24",
      date: "2024-11-10",
      tags: ["BUBBLE GATE", "FIZZ CONSPIRACY"],
      warning: "🍾 Side effects may include excessive celebration"
    },
    {
      id: 5,
      title: "The French Connection: Escargot Edition",
      description: "They want you to eat SNAILS. We connect the dots between garden gastropods and global domination plans.",
      duration: "71:11",
      date: "2024-11-03",
      tags: ["SNAIL GATE", "GARDEN INFILTRATION"],
      warning: "🐌 Not recommended for malacophobic listeners"
    },
    {
      id: 6,
      title: "Cheese Wheels of Fortune: Fromage Illuminati",
      description: "How Big Cheese controls your dairy choices. Featuring exclusive leaked documents from underground cheese caves.",
      duration: "67:45",
      date: "2024-10-27",
      tags: ["DAIRY GATE", "CAVE SECRETS"],
      warning: "🧀 May cause lactose intolerance to conspiracy theories"
    }
  ]

  return (
    <section id="episodes" className="py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-4 mb-4 text-white">Latest Episodes</h2>
            <p className="lead text-white-50">
              Uncovering the truth behind the croissant curtain, one episode at a time.
            </p>
          </Col>
        </Row>
        
        <Row>
          {episodes.map(episode => (
            <Col lg={6} className="mb-4" key={episode.id}>
              <Card className="episode-card h-100 text-white">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <Badge bg="danger">Episode {episode.id}</Badge>
                    <small className="text-white-50">{episode.duration}</small>
                  </div>
                  
                  <Card.Title className="h5 mb-3">{episode.title}</Card.Title>
                  
                  <div className="mb-3">
                    {episode.tags.map(tag => (
                      <Badge 
                        key={tag} 
                        bg="warning" 
                        text="dark" 
                        className="me-2 mb-2"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Card.Text className="text-white-50 mb-3">
                    {episode.description}
                  </Card.Text>
                  
                  <div className="alert alert-warning py-2 mb-3">
                    <small>{episode.warning}</small>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <Button variant="outline-light" size="sm">
                      🎧 Listen
                    </Button>
                    <small className="text-white-50">{episode.date}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <Button className="btn-treaux" size="lg">
              📻 View All Episodes
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Episodes