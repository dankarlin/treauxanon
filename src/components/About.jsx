import { Container, Row, Col, Card } from 'react-bootstrap'

function About() {
  const hosts = [
    {
      name: "Brie Tanner",
      role: "Chief Anti-Francophile Investigator", 
      bio: "Former cheese sommelier turned resistance fighter. Escaped the French culinary academy after discovering the truth about triple-cream conspiracies.",
      expertise: "Dairy surveillance, baguette forensics"
    },
    {
      name: "Croque Monsanto",
      role: "Sandwich Intelligence Analyst",
      bio: "Went undercover in Parisian cafés for 3 years. Now uses insider knowledge to expose the ham-and-cheese industrial complex.",
      expertise: "Café infiltration, mime detection"
    }
  ]

  return (
    <section id="about" className="py-5" style={{backgroundColor: 'var(--treaux-dark)'}}>
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-4 mb-4 text-white">About TreauxAnon</h2>
            <p className="lead text-white-50">
              We are the resistance against French cultural imperialism.
              While others enjoy their &ldquo;joie de vivre,&rdquo; we see through the beret-wearing facade.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <Card className="episode-card text-white h-100">
              <Card.Body>
                <Card.Title className="h4 mb-3">🎯 Our Mission</Card.Title>
                <Card.Text>
                  To expose the French conspiracy hiding in plain sight. From their suspicious
                  35-hour work weeks to their inexplicable obsession with cheese aging,
                  we investigate what they don&rsquo;t want you to know.
                </Card.Text>
                <ul className="text-white-50">
                  <li>Uncovering Big Baguette&rsquo;s monopoly</li>
                  <li>Investigating mime surveillance networks</li>
                  <li>Exposing champagne region gatekeeping</li>
                  <li>Revealing the truth about French toast (spoiler: it&rsquo;s not French)</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6} className="mb-4">
            <Card className="episode-card text-white h-100">
              <Card.Body>
                <Card.Title className="h4 mb-3">⚠️ Why It Matters</Card.Title>
                <Card.Text>
                  Every croissant consumed is another victory for French soft power.
                  Every &ldquo;oui oui&rdquo; heard on the streets brings us closer to total
                  Francophone domination.
                </Card.Text>
                <div className="conspiracy-alert mt-3">
                  <strong>WAKE UP SHEEPLE!</strong> They&rsquo;ve normalized:
                  <ul className="mt-2 mb-0">
                    <li>Eating snails as &ldquo;cuisine&rdquo;</li>
                    <li>Believing wine improves with age</li>
                    <li>Thinking berets are fashionable</li>
                    <li>Accepting mime as &ldquo;art&rdquo;</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto mb-4">
            <h3 className="text-center text-white mb-4">Meet the Resistance</h3>
          </Col>
        </Row>

        <Row>
          {hosts.map((host, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <Card className="episode-card text-white">
                <Card.Body>
                  <div className="text-center mb-3">
                    <div className="treaux-logo mx-auto" style={{width: '60px', height: '60px'}}>
                      {host.name.charAt(0)}
                    </div>
                  </div>
                  <Card.Title className="text-center h5">{host.name}</Card.Title>
                  <p className="text-center text-warning mb-3">{host.role}</p>
                  <Card.Text className="text-white-50 mb-3">
                    {host.bio}
                  </Card.Text>
                  <div className="text-center">
                    <small className="text-white-50">
                      <strong>Expertise:</strong> {host.expertise}
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="conspiracy-alert">
              <h4>🚨 Disclaimer 🚨</h4>
              <p className="mb-0">
                TreauxAnon is a satirical podcast parodying conspiracy theories. 
                No actual French people were harmed in the making of this content. 
                We love our French friends and their delicious contributions to global cuisine!
                <br /><br />
                <small>
                  (This disclaimer was definitely not added under duress from Big Baguette)
                </small>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About