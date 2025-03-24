import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => (props.theme === 'primary' ? 'none' : '1px solid #fff')};
  background: ${(props) => (props.theme === 'primary' ? 'linear-gradient(to right,rgb(42, 84, 85), #00d4ff)' : 'transparent')};
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
font-size: 16px;
color: #fff;
padding: 16px 32px;
width: fit-content;
cursor: pointer;
border-radius: 30px;

  &:hover {
  background: linear-gradient(to right, #00d4ff, rgb(42, 84, 85));
  opacity: 0.8;
}

  &:active {
  background: linear-gradient(to right, #00d4ff, #00ccff, #00ced1);
  opacity: 0.6;
}
`