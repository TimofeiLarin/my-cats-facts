import styled from 'styled-components';

type NavItemProps = {
  color?: string;
  paddingRight?: boolean;
};

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-left: 160px;
  padding-right: 40px;
  background: ${(props) => props.theme.colors.gradient};
  @media ${(props) => props.theme.media.tablet} {
    padding-left: 90px;
    padding-right: 20px;
  }
  @media ${(props) => props.theme.media.phone} {
    height: 70px;
    padding-left: 70px;
    padding-right: 10px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: 10px;
  left: 52px;
  @media ${(props) => props.theme.media.tablet} {
    left: 10px;
  }
  @media ${(props) => props.theme.media.phone} {
    left: 10px;
    top: 18px;
    width: 60px;
  }
`;

export const NavItem = styled.p<NavItemProps>`
  font-size: 24px;
  color: ${(props) =>
    props.color === 'lightText'
      ? props.theme.colors.lightText
      : props.theme.colors.mainText};
  padding-right: ${(props) => props.paddingRight && '41px'};
  @media ${(props) => props.theme.media.tablet} {
    font-size: 18px;
    padding-right: ${(props) => props.paddingRight && '20px'};
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 16px;
    padding-right: ${(props) => props.paddingRight && '20px'};
  }
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;
