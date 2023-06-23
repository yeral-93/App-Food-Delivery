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
`
export const InfoRestaurant1 = styled.div`
display: flex;
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
margin-top: -25px;

img{
    height: 12px;
}

h6{
    font-size: 10px;
    font-weight: 300;
    color: #414141;
    letter-spacing: -0.3px;
}
`

export const ContainerFoods= styled.div`
display: flex;
`