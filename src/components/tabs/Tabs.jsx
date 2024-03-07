import Nav from 'react-bootstrap/Nav';
import './Tabs.css';

function UnderlineExample() {
  return (
      <Nav id="scrollmenu" className="my-3 border-bottom" variant="underline" defaultActiveKey="/overview">
        
        <Nav.Item>
          <Nav.Link href="#">Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary fw-bold" eventKey="link-1">Fundamentals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary fw-bold" eventKey="link-2">News Insights</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary fw-bold d-none d-md-block" eventKey="link-3">Sentiments</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary fw-bold d-none d-md-block" eventKey="link-4">Team</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary fw-bold d-none d-md-block" eventKey="link-5">Technicals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary fw-bold d-none d-md-block" eventKey="link-6">Tokenomics</Nav.Link>
        </Nav.Item>

      </Nav>
  );
}

export default UnderlineExample;