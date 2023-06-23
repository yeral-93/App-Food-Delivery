import { styled } from "styled-components";

export const ContainerHome = styled.div`
display: flex;
flex-direction: column;
`
export const ContainerLocation = styled.div`
display: flex;
align-items: center;
gap: 9px;
margin:10px ;
h5{
    color: #FFE031;
    font-style: Regular;
    font-size: 10px;
}
h3{
    font-size: 16px;
    font-weight: 500;
    margin-top: -10px;
}
`

export const ImgsCarrusel = styled.div`
display: flex;
width: 360px;



figure{
    display: flex;
    gap: 10px;
    margin-left: 0px;
    width: 248px;
    height: 75px;


    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
}
`

export const DivH3 = styled.h3`
font-weight: 300;
font-style: light;
font-size: 16px;
color: #414141;
`

export const ButtonCategory = styled.div`
display: flex;
gap: 10px;
margin-bottom:15px ;

button{
    width: 106px;
    height: 32px;
    background-color: #F2F2F2;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #6C6C6C;
    font-size: 14px;
}

`

export const DivRestaurants = styled.div`
display: flex;
gap:40px ;
`

export const DivRestaurantsinf = styled.div`
display: flex;
flex-direction: column;
justify-content: left;




h2{
    font-size: 16px;
    color: #414141;
   margin-bottom: -5px;
   margin-top: 20px;
}
img{
    width: 68px;
    height: 12px;
   
    
}

h3{
    color: #414141;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 1px;
    margin-top: -15px;
}

h4{
    color: #A7A7A7;
    font-size: 10px;
    font-weight: 300;
}
`
export const DivImgRestaurant = styled.div`

figure{
    margin-left: 5px;
    width: 90px;
    height: 90px;
    
}
img{
    width:100% ;
    height:100% ;
}
`