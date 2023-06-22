import React from 'react'
import logoPng from "../../asset/logoPng.png"
import { Link } from 'react-router-dom'
import { ContainerLogin, FigureDiv } from './StyleLogin'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { loginActionAsync } from '../../redux/actions/userAction';

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio")
});

const Login = () => {

  const dispatch = useDispatch()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
  
  const logIn = (dataForm) => {
    console.log(dataForm);
    dispatch(loginActionAsync(dataForm.email, dataForm.password));
  }

  return (
    <ContainerLogin>
      <FigureDiv>
      <figure>
        <img src={logoPng} alt="" />
      </figure>
      <h3>Sign in or create an account.</h3>
      </FigureDiv>
      <form action="" onSubmit={handleSubmit(logIn)}>
        <div>
          <label htmlFor="">EMAIL</label>
          <input type="text" {...register("email")}/>
          <div>{errors.email?.message}</div>
        </div>
        <div>
          <label htmlFor="">PASSWORD</label>
          <input type="text" {...register("password")}/>
          <div>{errors.password?.message}</div>
        </div>
        <div>
          <button>Sing In</button>
        </div>
      </form>
      <div>
      <Link to={"/register"}>
          <a href="/register">create an account</a>
        </Link>
      </div>
    </ContainerLogin>
  )
}

export default Login
