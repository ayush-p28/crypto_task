import Nav from 'react-bootstrap/Nav';

function UnderlineExample() {
  return (
    <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Overview</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Fundamentals</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">News Insights</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Sentiments</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Team</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5">Technicals</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6">Tokenomics</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default UnderlineExample;