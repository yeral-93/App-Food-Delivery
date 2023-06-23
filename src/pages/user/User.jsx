import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutActionAsync } from '../../redux/actions/userAction'
import { ButtonUser, ContainerUser, DivUser, H2User } from './StyleUser'
import { InputText } from './InputText'
import Users from '../../asset/user.png'
import alarm from '../../asset/Alarm.png'
import payment from '../../asset/payment.png'
import language from '../../asset/lenguaje.png'
import location from '../../asset/location.png'
import faq from '../../asset/faq.png'
import telepone from '../../asset/telepone.png'
import next from '../../asset/Next.png'
import rectagule from '../../asset/Rectangle 356.png'
import eng from '../../asset/Eng.png'
import Footer from '../footer/Footer'



const User = () => {

  const dispatch =useDispatch()

  const {user} = useSelector(store => store.user);

  return (
    <ContainerUser>
      <DivUser>
        <figure>
          <img src={user?.avatar} alt="" />
        </figure>
      </DivUser>
      <H2User>{user?.name}</H2User>
      <InputText
            type="text"
            iconSrc={Users}
            iconsSrc={next}
            placeholder={"Account edit"}
          />
           <InputText
            type="text"
            iconSrc={alarm}
            iconsSrc={rectagule}
            placeholder={"Account edit"}
          />
           <InputText
            type="text"
            iconSrc={payment}
            iconsSrc={next}
            placeholder={"Payment"}
          />
           <InputText
            type="text"
            iconSrc={language}
            iconsSrc={eng}
            placeholder={"Language"}
          /> <InputText
          type="text"
          iconSrc={location}
          iconsSrc={next}
          placeholder={"Location"}
        /> <InputText
        type="text"
        iconSrc={faq}
        iconsSrc={next}
        placeholder={"FAQ"}
      /> 
      <InputText
      type="text"
      iconSrc={telepone}
      iconsSrc={next}
      placeholder={"Support"}
    />
      <ButtonUser onClick={() => dispatch(logoutActionAsync())}>Save</ButtonUser>
      <Footer/>
    </ContainerUser>
   
  )
}

export default User