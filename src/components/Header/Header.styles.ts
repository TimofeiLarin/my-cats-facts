import styled from 'styled-components';

interface PropsNavItem {
  color: string;
  paddingRight?: number;
}

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  padding-left: 160px;
  padding-right: 40px;
  background: linear-gradient(90deg, #c65252 0%, #5329ca 100%);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: 10px;
  left: 52px;
`;

export const NavItem = styled.p<PropsNavItem>`
  font-size: 24px;
  color: ${(props) => props.color};
  padding-right: ${(props) => props.paddingRight}px;
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;
