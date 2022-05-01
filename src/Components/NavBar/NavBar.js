import Cardwidget from "../CardWidget/Cardwiget"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import './NavBar.css'
const NavBar = () => {

    return (<>
        <div className="CardWidget">
            <h2 className="titleCardWidget">Corebiz</h2>
            <Cardwidget />
        </div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>
    </>
    )
}
export default NavBar