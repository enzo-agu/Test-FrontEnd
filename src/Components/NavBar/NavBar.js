import Cardwidget from "../CardWidget/Cardwiget"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from 'react-bootstrap/Button'

const NavBar = () => {
    return (<>

        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Button className="btn-light active" >Home</Button>
                    <Button className="btn-light active">
                        Deutsch beer
                    </Button>
                    
                </Nav>
                <Cardwidget />
            </Container>
        </Navbar>
    </>
    )
}

export default NavBar