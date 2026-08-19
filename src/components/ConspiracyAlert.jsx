import { Container, Alert } from 'react-bootstrap'

function ConspiracyAlert() {
  return (
    <Container className="my-5">
      <Alert variant="danger" className="conspiracy-alert text-center">
        <Alert.Heading>🚨 BREAKING: French Infiltration Detected! 🚨</Alert.Heading>
        <p className="mb-0">
          Our sources confirm that French agents have been spotted near local bakeries. 
          If you see anyone carrying a baguette or speaking with an accent, 
          <strong> DO NOT ENGAGE</strong>. Report immediately to TreauxAnon HQ.
        </p>
        <hr />
        <p className="mb-0">
          <small>
            💡 Pro tip: Mime performers are NOT just street entertainers - they&rsquo;re surveillance operatives!
          </small>
        </p>
      </Alert>
    </Container>
  )
}

export default ConspiracyAlert