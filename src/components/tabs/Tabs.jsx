import Nav from 'react-bootstrap/Nav';


function UnderlineExample() {
  return (
    <Nav className="my-3 border-bottom" variant="underline" defaultActiveKey="/overview">
      <Nav.Item>
        <Nav.Link href="/overview">Overview</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-secondary fw-bold" eventKey="link-1">Fundamentals</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-secondary fw-bold" eventKey="link-2">News Insights</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-secondary fw-bold" eventKey="link-3">Sentiments</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-secondary fw-bold" eventKey="link-4">Team</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-secondary fw-bold" eventKey="link-5">Technicals</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-secondary fw-bold" eventKey="link-6">Tokenomics</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default UnderlineExample;