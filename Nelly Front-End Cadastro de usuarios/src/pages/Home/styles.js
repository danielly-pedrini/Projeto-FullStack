import styled from 'styled-components';

export const Title = styled.h1`
  color: #00ccff;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`

export const Subtitle = styled.h2`
  color: #00ccff;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
 
  min-height: 100vh;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
  color: #ffffff;  // Alterado para branco para melhor visibilidade em fundo preto
  font-size: 12px;

  span {
    color:rgb(211, 30, 30);
    font-weight: bold;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
`

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`
export const UserListButton = styled.button`
  border: ${(props) => (props.theme === 'primary' ? 'none' : '1px solid #fff')};
  background: ${(props) => (props.theme === 'primary' ? 'linear-gradient(to right,  #00d4ff,rgb(42, 84, 85))' : 'transparent')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;
  z-index: 1;
  position: relative; /* Alterado de absolute para relative */
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #00ccff;
    
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    left: 0;
  }

  &:active {
    background: linear-gradient(to right, #00d4ff, #00ccff, #00ced1);
    opacity: 0.6;
  }
`;