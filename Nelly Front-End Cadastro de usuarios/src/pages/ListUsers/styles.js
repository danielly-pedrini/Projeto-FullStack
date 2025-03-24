import styled from "styled-components"


export const Container = styled.div`
background-color:rgb(6, 11, 27);
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
`

export const ContainerUser = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;

@media (max-width:750px){  
    grid-template-columns: 1fr ;
}

`

export const CardUsers = styled.div `
background-color: rgba(3, 11, 37, 0.67);
padding: 16px;
border-radius: 32px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
max-width: 380px;

h3{
    font-size: 24px;
    text-transform:capitalize;

}
`

export const AvatarUser = styled.img`
height: 80px;
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
`

export const EditIcon = styled.img`
  cursor: pointer;
  height: 30px;
  
  &:hover {
    opacity: 0.6;
  }
  
  &:active {
    opacity: 0.2;
  }
`

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: rgb(6, 11, 27);
  border: 1px solid #00d4ff;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
  
  h2 {
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    div {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    label {
      color: #fff;
      font-size: 16px;
    }
    
    input {
      padding: 12px;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      font-size: 16px;
      
      &:focus {
        border-color: #00d4ff;
        outline: none;
      }
    }
    
    .button-group {
      display: flex;
      justify-content: space-between;
      margin-top: 24px;
      flex-direction: row;
      
      button {
        padding: 12px 24px;
        border-radius: 30px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
        
        &:first-child {
          background: linear-gradient(to right, rgb(42, 84, 85), #00d4ff);
          border: none;
          color: #fff;
          flex: 1;
          margin-right: 10px;
        }
        
        &:last-child {
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
          flex: 1;
          margin-left: 10px;
        }
        
        &:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }
        
        &:active {
          opacity: 0.6;
          transform: translateY(0);
        }
      }
    }
  }
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  height: 30px;
  
  &:hover {
    opacity: 0.6;
  }
  
  &:active {
    opacity: 0.2;
  }
`


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
  z-index: 1;
  position: relative; /* Alterado de absolute para relative */
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
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