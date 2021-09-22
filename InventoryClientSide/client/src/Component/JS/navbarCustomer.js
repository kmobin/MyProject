import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const NavbarCustomer = () => 
{
    const history = useHistory()
    const customer = useSelector(state => state.customer)

    return  (
            <>
                <Nav variant="tabs">
                   
                   
                    <Nav.Item>
                        <Nav.Link onClick={()=> history.push("/home")}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=> history.push("/search")}>Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=> history.push("/profile")}>Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=> history.push("/order")}>Order</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=> history.push("/cart")}>Cart</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=> history.push("/logout")}>Log out</Nav.Link>
                    </Nav.Item>
                </Nav>
            </>    
            );
}

export default NavbarCustomer;