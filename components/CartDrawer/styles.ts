import styled, { css } from "styled-components";

const drawerPaddingX = "32px";

export const Wrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 48px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${(props) => (props.visible ? 100 : -1)};
  backdrop-filter: ${(props) => (props.visible ? "blur(8px)" : undefined)};
  transition: all 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 26px;
  right: 15px;
  width: 45px;
  height: 45px;
  background-color: #000;
  border: 0;
  border-radius: 50%;
  color: #fff;
  &:active {
    filter: brightness(999%);
  }
`;

export const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  width: 85%;
  max-width: 380px;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 25px ${drawerPaddingX} 0 ${drawerPaddingX};
  background-color: ${(props) => props.theme.main.color.primary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  transform: ${(props) =>
    !props.visible ? "translate(calc(100% + 5px))" : ""};
  transition: transform 0.3s ease-in-out;
  z-index: 101;
`;

export const text700 = css`
  font-weight: 700;
  color: #fff;
`;

export const Title = styled.h1`
  ${text700};
  max-width: 80%;
  font-size: 27px;
  line-height: 33px;
`;

export const CheckoutButton = styled.button`
  ${text700};
  font-size: 20px;
  line-height: 15px;
  position: absolute;
  background-color: #000;
  height: 65px;
  border: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const CartProducts = styled.div`
  position: absolute;
  top: 100px;
  bottom: 180px;
  left: ${drawerPaddingX};
  right: ${drawerPaddingX};
  overflow-y: auto;
  overflow-x: hidden;
`;

export const TotalPrice = styled.div`
  position: absolute;
  left: ${drawerPaddingX};
  right: ${drawerPaddingX};
  bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-weight: 700;
  font-size: 28px;
  line-height: 2rem;
  color: #fff;
`;