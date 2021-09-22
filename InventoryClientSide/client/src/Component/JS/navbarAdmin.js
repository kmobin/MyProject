import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useHistory } from 'react-router-dom';

const NavbarAdmin = () =>
{
    const history = useHistory()
    return  (
            <>
                <Nav variant="tabs">
                   
                    <Nav.Item>
                        <Nav.Link onClick={()=> history.push("/home")}>Home </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=> history.push("/logout")}>Logout</Nav.Link>
                    </Nav.Item>
                    
                    
                </Nav>
            </>    
            );
}
export default NavbarAdmin;