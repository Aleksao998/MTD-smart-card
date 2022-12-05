import React from "react";
import { Link } from "react-router-dom";

// nodejs library that concatenates strings
import classnames from "classnames";
import { Button } from "reactstrap";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
//Modal Setting

function ExamplesNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    if (navbarCollapse) {
      setNavbarCollapse(!navbarCollapse);
    }
  }, [props.pageChange]);

  return (
    <div>
      <Navbar
        className={classnames("fixed-top")}
        style={{ boxShadow: "none", backgroundColor: "transparent" }}
        color-on-scroll="200"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand></NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse,
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/login-page" tag={Link}>
                  Login
                </NavLink>
              </NavItem>
              <NavItem onClick={props.logout}>
                <NavLink to="/checkout" tag={Link}>
                Order Now
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default ExamplesNavbar;
