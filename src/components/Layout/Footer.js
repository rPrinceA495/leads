import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          2020 Xavier Africa, source on <SourceLink>Github</SourceLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
