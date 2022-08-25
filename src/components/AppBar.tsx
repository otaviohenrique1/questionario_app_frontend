import React, { useState } from 'react';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown } from "reactstrap";
import { BsPersonCircle } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { Flex } from './Containers/Flex';

export default function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      color="dark"
      dark
      expand="md"
      container="fluid"
    >
      <NavbarBrand tag="div">
        <Flex
          flexDirection="row"
          alignItems="center"
        >
          <FaWpforms size={20} className="me-1"/>
          <span>QuestionarioApp</span>
        </Flex>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Questionarios
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Criar</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Listar</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Perguntas
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Criar</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Listar</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              nav
              caret
              className='d-flex flex-row align-items-center'
            >
              <BsPersonCircle size={40} className="me-1"/>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Perfil</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Sair</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
