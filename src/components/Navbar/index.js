import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
import{useNavigate}from'react-router-dom'
import {useSelector} from 'react-redux'

function BasicExample() {
    const navigate=useNavigate()
    const currentUser=useSelector(state=>state.userReducer.user)

return (
    <div className="hide">
        <Navbar expand="lg"   style={{textAlign:'left'}}>
    <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <div style={{marginTop:'20px'}} onClick={()=>navigate('login')}><img src='https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png' width={50}/>{currentUser ? <>{currentUser}</> :<>Enter Your Account</>}</div>
            <Nav.Link onClick={()=>navigate('/selloptions')}><i class="fa-solid fa-camera-retro"></i> Start Selling</Nav.Link>
            <Nav.Link ><i class="fa-regular fa-comment"></i> Chat</Nav.Link>
            <Nav.Link ><i class="fa-solid fa-question"></i> Help</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
);
}

export default BasicExample;