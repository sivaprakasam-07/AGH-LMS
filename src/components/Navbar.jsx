import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Nav,
  Left,
  Logo,
  HamburgerButton,
  NavLinks,
  NavLink,
  DropdownIcon,
  UserSection,
  UserAvatar,
  UserName,
  LogoutButton,
  LogoutText,
  LogoutIcon,
  MobileDrawer,
  MobileNavLinks,
  MobileNavLink,
} from './Navbar.styles.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      {/* Left: Logo + Hamburger */}
      <Left>
        <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </HamburgerButton>
        <Logo src="src/assets/AGH-logo.jpg" alt="Logo" />
      </Left>
      {/* Center: Nav Links (hidden on mobile) */}
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>Requests</NavLink>
        <NavLink>
          College Assessment
          <DropdownIcon
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </DropdownIcon>
        </NavLink>
        <NavLink>Leaderboard</NavLink>
      </NavLinks>
      {/* Right: User Info (hidden on small screens) */}
      <UserSection>
        <UserAvatar
          src="https://i.pravatar.cc/150?img=32"
          alt="User"
        />
        <UserName>Muskan Verma</UserName>
        <LogoutButton>
          <LogoutText>Logout</LogoutText>
          <LogoutIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10v1"
            />
          </LogoutIcon>
        </LogoutButton>
      </UserSection>
      {/* Mobile Drawer */}
      {isOpen && (
        <MobileDrawer>
          <MobileNavLinks>
            <MobileNavLink>Home</MobileNavLink>
            <MobileNavLink>Requests</MobileNavLink>
            <MobileNavLink>College Assessment</MobileNavLink>
            <MobileNavLink>Leaderboard</MobileNavLink>
          </MobileNavLinks>
        </MobileDrawer>
      )}
    </Nav>
  );
};

export default Navbar;