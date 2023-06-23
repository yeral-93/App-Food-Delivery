import React from 'react'
import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius:10px ;
  background:#F2F2F2;
  margin-bottom:10px ;
  width:360px ;
  height:44px ;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  object-fit:cover ;
  margin-top: 10px ;
  
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  height:50px ;
  font-size:15px ;
  margin-top:15px ;
  color:#aaa8a8 ;
 
`;
export const Icons = styled.img`
  width: 15px;
  height: 15px;
  margin-top: 10px;
  margin-right:10px ;
 
`;

export const InputText = ({ iconSrc, iconsSrc,...props }) => {
  return (
    <InputContainer>
    <Icon src={iconSrc} alt="Icon" />
    <Input {...props} />
    <Icons src={iconsSrc} alt="Icons" />
  </InputContainer>
  )
}