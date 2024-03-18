import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainers} from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
<NavBar bg="dark" variant="dark">
    <Container>
        <LinkContainer to="/">
        <NavBar.Brand>
            <img src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" width={80} alt='Amazon logo'/>
        </NavBar.Brand>
        </LinkContainer>
    </Container>

</NavBar>

    </header>
  )
}

export default Header