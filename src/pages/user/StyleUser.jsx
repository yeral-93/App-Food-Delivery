import { styled } from "styled-components";

export const ContainerUser = styled.div`
margin:50px 20px 5px 20px ;
height:100% ;

`
export const DivUser = styled.div`
display: flex;
justify-content: center;
align-items: center;

figure {
    height:75px ;
    width:75px ;
    border-radius:50% ;
   
}  
img {
    width:100% ;
    height:100% ;
   object-fit:cover ;
   object-position: top;
}
`
export const H2User = styled.h2`
margin-top:-15px ;
font-size:16px ;
text-align:center ;
`
export const ButtonUser = styled.button`
width:360px ;
border-radius:10px ;
background:#FFE031 ;
border:none ;
height:44px ;
margin-bottom:20px ;
`