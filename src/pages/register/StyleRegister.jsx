import { styled } from "styled-components";

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  justify-content: left;

  h2 {
    color: #414141;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
  }

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
        height: 25px;
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
      margin-top: 170px;
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
`;
