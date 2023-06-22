import { styled } from "styled-components";

export const ContainerLogin = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    div {
      display: flex;
      flex-direction: column;
      gap: 6px;

      label {
        color: #a7a7a7;
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
      }

      input {
        width: 358px;
        height: 20px;
        border-bottom: 0.5px solid #a7a7a7;
        border-top: none;
        border-left: none;
        border-right: none;
      }

      img {
        position: absolute;
        margin-top: 24px;
        margin-left: 348px;
      }
    }

    button {
      margin-top: 210px;
      height: 44px;
      background-color: #ffe031;
      border-radius: 10px;
      border: none;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
  }

  a{
    text-decoration: none;
    color: #414141;
    &:hover{
        cursor: pointer;
        font-size: 20px;
    }
  }
`

export const FigureDiv = styled.div`
display: flex;
flex-direction: column;
gap: 40px;

figure{
    display: flex;
    align-items: center;
    justify-content: center;
}

h3{
    color: #414141;
    font-weight: 500;
}
`