import logo from './logo.svg';
import './App.css';
import * as reactBootstarp from 'react-bootstrap'
function App() {
  return (
    <div className="App">
        <reactBootstarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <reactBootstarp.Container>
            <reactBootstarp.Navbar.Brand href="#home">PTCP</reactBootstarp.Navbar.Brand>
            <reactBootstarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <reactBootstarp.Navbar.Collapse id="responsive-navbar-nav">
              <reactBootstarp.Nav className="me-auto">
                <reactBootstarp.Nav.Link href="#features">Features</reactBootstarp.Nav.Link>
                <reactBootstarp.Nav.Link href="#pricing">Pricing</reactBootstarp.Nav.Link>
                <reactBootstarp.NavDropdown title="About" id="collasible-nav-dropdown">
                  <reactBootstarp.NavDropdown.Item href="/Threesides/teachers/dashboard.js">Parents</reactBootstarp.NavDropdown.Item>
                  <reactBootstarp.NavDropdown.Item href="#action/3.2">Teachers</reactBootstarp.NavDropdown.Item>
                  <reactBootstarp.NavDropdown.Item href="#action/3.3">Schools</reactBootstarp.NavDropdown.Item>
                  <reactBootstarp.NavDropdown.Divider />
                  <reactBootstarp.NavDropdown.Item href="#action/3.4">Separated link</reactBootstarp.NavDropdown.Item>
                
                </reactBootstarp.NavDropdown>
                </reactBootstarp.Nav>
                <reactBootstarp.Nav>
                <reactBootstarp.Nav.Link href="#deets">Signup</reactBootstarp.Nav.Link>
                <reactBootstarp.Nav.Link eventKey={2} href="#memes">
                    SignIn
                </reactBootstarp.Nav.Link>
              </reactBootstarp.Nav>
              </reactBootstarp.Navbar.Collapse>
          </reactBootstarp.Container>
        </reactBootstarp.Navbar>
        <h1>Welcome to ptcp choose side</h1>
        <>
          <reactBootstarp.Button as="input" type="button" value="Teacher" href="/Threeside/teachers/dashboard.js"/>{' '}
          <reactBootstarp.Button as="input" type="button" value="Parents" />{' '}
          <reactBootstarp.Button as="input" type="button" value="Schooladmin" />{' '}
         </>
    </div>
  );
}

export default App;
