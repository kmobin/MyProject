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
                   
                <Nav.Item style={{padding: '4px'}}>
                        <img src="./Images/iconone.png"  width="72px" height="60px" alt="inventory Icon"/>
                    </Nav.Item>
                    <Nav.Item style={{padding:'10px'}}>
                        <Nav.Link onClick={()=> history.push("/home")}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{padding:'10px'}}>
                        <Nav.Link onClick={()=> history.push("/search")}>Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{padding:'10px'}}>
                        <Nav.Link onClick={()=> history.push("/profile")}>Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{padding:'10px'}}>
                        <Nav.Link onClick={()=> history.push("/getorder")}>Order</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{padding:'10px'}}>
                        <Nav.Link onClick={()=> history.push("/cart")}>Cart</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{padding:'10px'}}>
                        <Nav.Link onClick={()=> history.push("/WishList")}>Wish List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{padding:'10px'}}>
                        <Nav.Link onClick={()=> history.push("/logout")}>Log out</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
            </>    
              
            );
}

export default NavbarCustomer;