import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  background: ${(props) => props.theme.main.color.primary};
`;

export const Title = styled.h1`
  display: inline-block;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin-right: 8px;
`;

export const Subtitle = styled.h2`
  display: inline-block;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
`;
