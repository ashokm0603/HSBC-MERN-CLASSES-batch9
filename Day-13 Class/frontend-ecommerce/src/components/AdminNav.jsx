import React from 'react'
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, Outlet } from 'react-router-dom';
const AdminNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div id="brand-container">
           <Link to="/home">
            <img
              src="https://img.freepik.com/premium-vector/ecommerce-logo-design_624194-152.jpg"
              height={"60px"}
              alt=""
            />
            <h1>E-commerce</h1>
           </Link>
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/add-products">Add product</Nav.Link>
              <NavDropdown title="Operations" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/view-orders">
                  View Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="/edit-products">
                  Edit Products
                </NavDropdown.Item>
                <NavDropdown.Item href="/delete-products">
                  {" "}
                  Delete Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://wa.me/9874561230">
                  Whatsapp
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="btn btn-primary">
              <Nav.Link href="/signin">
                Sign Out{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Outlet/>
    </div>
  )
}

export default AdminNav
