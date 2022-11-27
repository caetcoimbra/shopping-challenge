import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  vertical-align: baseline;
`;

export const Counter = styled.span`
  display: inline-block;
  font-size: 20px;
  line-height: 24px;
  border: 0.2px solid #bfbfbf;
  border-top: 0;
  border-bottom: 0;
  width: 40px;
  text-align: center;
`;

export const Button = styled.button`
  width: 40px;
  font-weight: 400;
  color: #000000;
  background-color: transparent;
  border: 0;
  transition: color 0.1s ease-in-out;
  &:active {
    color: ${(props) => props.theme.main.color.primary};
  }
`;
