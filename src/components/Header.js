import { useState } from "react";
import styled from "styled-components";
import Logo from "./images/logo.svg"
import BtnRemove from "./images/btn-menu.png";
import BtnClose from "./images/close-button.png";
// import { selectCars } from "../Features/Car/CarSlice";
// import { useSelector } from "react-redux";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  // const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src={Logo} alt="Logo Image" />
      </a>
      <Menu>
        {/* {cars && cars.map((car, index) => {
          <a key={index} href="#">{car}</a>
        })} */}
        <a href="">Model S</a>
        <a href="">Model 3</a>
        <a href="">Model X</a>
        <a href="">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <img src={BtnRemove} />
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWraper>
          <CustomClose onClick={() => setBurgerStatus(false)}>
            <img src={BtnClose} alt="Btn Close"/>
          </CustomClose>
        </CloseWraper>
        
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Test Drive</a></li>
      </BurgerNav>
    </Container>
    
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  } 
`

const CustomMenu = styled.div`
  cursor: pointer;
  img {
    max-width: 20px;
  }
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #FFF;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: flex-start;
  transform: 
    ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .5s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;;
    }
  }
`

const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled.div`
  cursor: pointer;
  img {
    max-width: 15px;
  }
`