import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";



class Navigation extends React.Component {
    render() {
    const selectPosition = this.props.selectPosition;
    const selectAllpro = this.props.selectAllpro;
    const sortPrice = this.props.sortPrice
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Filters</Navbar.Brand>
                <div className='NavButtons'>
                    <div className='positionFilters'>
                        <Nav className="me-auto" onSelect={selectPosition}>
                            <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
                        </Nav>
                        <Nav className="me-auto" onSelect={selectPosition}>
                            <Nav.Item><Nav.Link eventKey="QB">QB</Nav.Link></Nav.Item>
                        </Nav>
                        <Nav className="me-auto" onSelect={selectPosition}>
                            <Nav.Item><Nav.Link eventKey="RB">RB</Nav.Link></Nav.Item>
                        </Nav>
                        <Nav className="me-auto" onSelect={selectPosition}>
                            <Nav.Item><Nav.Link eventKey="WR">WR</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                    <div className='AllProFilters'>
                        <Nav className="me-auto" onSelect={selectAllpro}>
                            <Nav.Item><Nav.Link eventKey="Yes">All-Pro</Nav.Link></Nav.Item>
                        </Nav>
                        <Nav className="me-auto" onSelect={selectAllpro}>
                            <Nav.Item><Nav.Link eventKey="All">All-Pro Off</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                    <div className='sortButton'>
                        <Nav className="me-auto" onSelect={sortPrice}>
                            <Nav.Item><Nav.Link eventKey="On">Sort by Price</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </div>
              {/* TODO: add square button here */}
          </Container>
        </Navbar>
      );
    }

}

export default Navigation;

// lets users select a filter type
// <Nav onSelect={selectFilterType}>
// <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item> </Nav>