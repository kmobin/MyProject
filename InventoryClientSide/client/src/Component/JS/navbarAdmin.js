import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useHistory } from 'react-router-dom';

const NavbarAdmin = () =>
{
    const history = useHistory()
    return  (
            <>
                <Nav variant="tabs">
                <Nav.Item style={{padding: '4px'}}>
                        <img src="./Images/iconone.png"  width="72px" height="60px" alt="inventory Icon"/>
                    </Nav.Item>
                    <Nav.Item style={{padding:'10px'}}>
                        <Nav.Link onClick={()=> history.push("/home")}>Home </Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{padding:'10px'}}>
                        <Nav.Link onClick={()=> history.push("/logout")}>Logout</Nav.Link>
                    </Nav.Item>
                    
                    
                </Nav>
            </>    
            );
}
export default NavbarAdmin;