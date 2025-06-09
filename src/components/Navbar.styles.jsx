import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: 768px) and (max-width: 1100px) {
    padding: 0.75rem 2vw;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) and (max-width: 1100px) {
    gap: 1.5rem;
  }
`;

export const Logo = styled.img`
  height: 2.5rem;
`;

export const HamburgerButton = styled.button`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: none;
  gap: 2.5rem;
  font-size: 1rem;
  color: #000;
  font-weight: 500;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 768px) and (max-width: 1100px) {
    gap: 2rem;
    font-size: 1.05rem;
  }

  @media (max-width: 900px) {
    gap: 1.2rem;
    font-size: 0.98rem;
  }
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
  width: 1rem;
  height: 1rem;
  margin-left: 0.25rem;
`;

export const UserSection = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    gap: 0.7rem;
  }
`;

export const UserAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  @media (min-width: 768px) and (max-width: 1100px) {
    font-size: 0.98rem;
  }
`;

export const LogoutButton = styled.button`
  background: #F73442;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background 0.2s;
  border: none;
  cursor: pointer;
  &:hover {
    background: #e42534;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    padding: 0.45rem 0.8rem;
    font-size: 0.98rem;
  }
`;

export const LogoutText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  @media (min-width: 768px) and (max-width: 1100px) {
    font-size: 0.98rem;
  }
`;

export const LogoutIcon = styled.svg`
  height: 1.25rem;
  width: 1.25rem;
`;

export const MobileDrawer = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 1rem;
  z-index: 50;
  margin-left: 2.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.95rem;
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