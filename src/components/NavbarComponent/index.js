import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './styles.scss'
import {Link} from '@reach/router'
const NavbarComponent = () => {
    return (
      <div>
      <Navbar bg="grey" variant="light">
      <Nav className='nav-left'>
        <Nav.Link className='nav-div-center' href="#home"><div>
          <b>
          Waza Watch
          </b>
      </div></Nav.Link>
        </Nav>
      <Nav className="ml-auto mr-auto logo-nav-mobile">
        <Nav.Link className='nav-div-center' href="#home"><div>
          <img className='logo-nav' src='http://logok.org/wp-content/uploads/2015/03/Hublot-logo-340x214.png'  alt='error'/>
        </div></Nav.Link>
        </Nav>
        <Nav className='nav-right' > 
        <Nav.Item href="#home" className='ml-auto'>
        <div>
        <img className='logo-nav' src='img/cart.png' alt='error'/>
      </div>
      </Nav.Item>
        </Nav>
    </Navbar>
      <Navbar collapseOnSelect expand='lg' className="ml-auto nav-bg" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-auto'/>
      <Navbar.Collapse id="responsive-navbar-nav">
      <Link to='/'><div className='nav-menu'>Home</div></Link>
       <Link to='product'><div className='nav-menu'>Man</div></Link>
       <Link to='product'><div className='nav-menu'>Woman</div></Link>
       <Link to='product'><div className='nav-menu'>Brands</div></Link>
        <Link to='/contact'><div className='nav-menu'>Contact Us</div></Link>
       <Link to='products'><div className='nav-menu'>Products</div></Link>
      </Navbar.Collapse>
      </Navbar>
      </div>
    );
}

export default NavbarComponent;
