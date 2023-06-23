import { styled } from "styled-components";

export const ContainerDetailRest = styled.div`
display: flex;
flex-direction: column;

button{
   margin-left: 10px;
    width: 106px;
    height: 32px;
    border-radius: 5px;
    border: none;
}
`

export const InfoRestaurant = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top:20px ;
`
export const InfoRestaurant1 = styled.div`
display: flex;
width:360px ;
height:100px ;
gap:10px ;
figure{
    height:90px ;
    width:390px ;
}
img {
    width:100% ;
    height:100% ;
}

h1{
    color: #414141;
    font-size: 16px;
}
p{
    font-size: 10px;
}

`


export const StarAndTime = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: -15px;


img{
    height: 11px;
    width:100px ;
     ;
}

h6{
    font-size: 11px;
    font-weight: 300;
    color: #414141;
    letter-spacing: -0.3px;
}
`
export const DivBotones= styled.div`
margin-top:15px ;
`
export const Button1= styled.button`
background: yellow;
`
export const ContainerFoods= styled.div`
margin-top:15px ;
display:flex;
flex-wrap: wrap;
justify-content:center ;
align-items:center ;
margin-left:15px ;
div {
  width  :50% ;
}
figure{
    width:150px ;
    height:90px ;
    margin:0 ;
}
img {
    width:100% ;
    height:100%;
}
h3{
    font-size:16px ;
    margin:0 ;
}
h4{font-size:14px;
 color:#d2c8c8
  ;

}
`