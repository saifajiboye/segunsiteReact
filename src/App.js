import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import logo from './app/assets/img/saifullah.png';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
               <Container>
                    <NavbarBrand href='/'>
                        <img src={logo} alt='nucamp logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
      Hello! From Segun
    </div>
  );
}

export default App;
