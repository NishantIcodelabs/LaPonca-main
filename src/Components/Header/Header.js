import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import LogoIcon from '../IconLogo/IconLogo';
import * as styles from './Header.module.css';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar light expand="md" className={styles.headerbox}>
                <NavbarBrand href="/">
                    <div className={styles.mainLogo}>
                        <LogoIcon />
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className={styles.menuItemsBox}>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/" className={styles.menuName}>tenuta</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className={styles.menuName}>vini</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className={styles.menuName}>press</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className={styles.menuName}>contatti</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header

export const Head = () => <title>Header</title>