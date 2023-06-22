import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutActionAsync } from '../../redux/actions/userAction'
import { ContainerUser } from './StyleUser'

const User = () => {

  const dispatch =useDispatch()

  const {user} = useSelector(store => store.user);

  return (
    <ContainerUser>
      <div>
        <figure>
          <img src={user?.avatar} alt="" />
        </figure>
        <h2>{user?.name}</h2>
      </div>
      <button onClick={() => dispatch(logoutActionAsync())}>Cerrar sesión</button>
    </ContainerUser>
  )
}

export default User