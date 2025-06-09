import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
  padding: 0.75rem 1rem; /* Default padding for mobile */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: 768px) { /* Tablet general */
    padding: 0.75rem 2rem;
  }

  /* Specific adjustment for 768px to 1023.98px range (covers 768x1024, 820x1180) */
  @media (min-width: 768px) and (max-width: 1023.98px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
  }

  @media (min-width: 1024px) { /* Desktop general */
    padding: 0.75rem 3rem;
  }

  /* Specific adjustment for 1024px width (covers 1024x1366) */
  @media (min-width: 1024px) and (max-width: 1024px) { 
    padding-left: 2.5rem; 
    padding-right: 2.5rem;
  }
  /* Removed specific 768px to 1100px media query for padding to simplify */
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* Default gap for mobile (logo and hamburger) */

  @media (min-width: 768px) { /* Tablet and larger */
    gap: 1.5rem; /* Default for 768px+ */
  }

  /* Specific adjustment for 768px to 1023.98px range to alleviate congestion with nav links */
  @media (min-width: 768px) and (max-width: 1023.98px) {
    gap: 2rem; /* Increased gap further for these viewports */
  }
`;

export const Logo = styled.img`
  height: 2.5rem; /* Default height */
  flex-shrink: 0; /* Prevent logo from shrinking in flex layout */

  @media (max-width: 479px) { /* For very small mobile screens */
    height: 2rem; /* Slightly reduce logo height */
  }
`;

export const HamburgerButton = styled.button`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: none; /* Hidden on mobile */
  align-items: center;
  gap: 1.5rem; /* Default gap for smaller desktop/tablet */
  font-size: 0.95rem; /* Slightly smaller base font for nav links */
  color: #000;
  font-weight: 500;

  @media (min-width: 768px) { /* Show for tablet */
    display: flex;
  }

  /* Specific adjustments for 768px to 1023.98px range */
  @media (min-width: 768px) and (max-width: 1023.98px) {
    gap: 1rem; /* Further reduced gap between nav links */
    font-size: 0.875rem; /* Further reduced font size for nav links */
  }

  @media (min-width: 1024px) { /* Larger desktop */
    gap: 2.5rem; /* Increase gap for wider screens */
    font-size: 1rem;
  }
  /* Removed specific 768-1100px and max-width 900px media queries to simplify */
`;

export const NavLink = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  white-space: nowrap;
  &:hover {
    color: #F73442;
  }
`;

export const DropdownIcon = styled.svg`
  width: 0.9rem; /* Slightly smaller dropdown icon */
  height: 0.9rem;
  margin-left: 0.2rem;
`;

export const UserSection = styled.div`
  display: none; /* Hidden on mobile */
  align-items: center;
  gap: 0.75rem; /* Default gap for smaller desktop/tablet */

  @media (min-width: 768px) { /* Show for tablet */
    display: flex;
  }

  @media (min-width: 1024px) { /* Larger desktop */
    gap: 1rem; /* Increase gap for wider screens */
  }
  /* Removed specific 768-1100px media query */
`;

export const UserAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
`;

export const UserName = styled.span`
  font-size: 0.95rem; /* Base size */
  font-weight: bold;
  color: #000;
  @media (min-width: 1024px) { /* Slightly larger on desktop */
    font-size: 1rem;
  }
  /* Removed specific 768-1100px media query */
`;

export const LogoutButton = styled.button`
  background: #F73442;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.4rem; /* Base gap */
  padding: 0.4rem 0.8rem; /* Base padding */
  border-radius: 0.5rem;
  transition: background 0.2s;
  border: none;
  cursor: pointer;
  font-size: 0.9rem; /* Base font size for text inside button */

  &:hover {
    background: #e42534;
  }

  @media (min-width: 1024px) { /* Larger desktop */
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    font-size: 0.95rem;
  }
  /* Removed specific 768-1100px media query */
`;

export const LogoutText = styled.span`
  font-weight: 500;
  /* font-size will be inherited from LogoutButton */
  /* Removed specific 768-1100px media query and explicit font-size */
`;

export const LogoutIcon = styled.svg`
  height: 1.25rem;
  width: 1.25rem;
`;

export const MobileDrawer = styled.div`
  position: absolute;
  top: 100%; /* Position below the Nav bar based on its actual height */
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 1rem; /* Padding for the drawer content */
  z-index: 50;
  /* margin-left: 2.5rem; */ /* Removed fixed margin, drawer should span full width */
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* Increased gap for better touch targets */
  font-size: 1rem; /* Slightly larger font for mobile nav links */
  font-weight: 500;
  color: #374151;
`;

export const MobileNavLink = styled.li`
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #F73442;
  }
`;