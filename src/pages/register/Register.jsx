import React from "react";
import iconEyes from "../../asset/eyes.png";
import like from "../../asset/chulo.png";
import { ContainerRegister } from "./StyleRegister";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import fileUpLoad from "../../services/fileUpLoad";
import { useDispatch } from "react-redux";
import { registerActionAsync } from "../../redux/actions/userAction";

const schema = yup.object({
  name: yup.string().required("por favor ingresa tu nombre"),
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio")
    .min(8, "La contraseña debe contener al menos 8 caracteres")
    .max(16, "La contraseña debe tener máximo 16 caracteres")
    .oneOf(
      [yup.ref("confirmPassword")],
      "Las contraseñas ingresadas no coinciden"
    ),
  confirmPassword: yup
    .string()
    .required("Este campo es obligatorio")
    .min(8, "La contraseña debe contener al menos 8 caracteres")
    .max(16, "La contraseña debe tener máximo 16 caracteres")
    .oneOf([yup.ref("password")], "Las contraseñas ingresadas no coinciden"),
  avatar: yup
    .mixed()
    .test("file", "Por favor ingrese una imagen", (value) =>
      value.length > 0 ? true : false
    ),
});

const Register = () => {

const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateUser = async(dataForm) => {
    console.log(dataForm);
    const avatar = await fileUpLoad(dataForm.avatar[0]);
    const newUser = {
      ...dataForm,
      avatar: avatar
    }
    console.log(newUser);
    dispatch(registerActionAsync(newUser));
  };

  return (
    <ContainerRegister>
      <h2>Create account</h2>
      <form action="" onSubmit={handleSubmit(handleCreateUser)}>
        <div>
          <label htmlFor="">NAME</label>
          <input type="text" {...register("name")} />
          <img src={like} alt="" />
          <div>{errors.name?.message}</div>
        </div>
        <div>
          <label htmlFor="">EMAIL</label>
          <input type="text" {...register("email")} />
          <img src={like} alt="" />
          <div>{errors.email?.message}</div>
        </div>
        <div>
          <label htmlFor="">PASSWORD</label>
          <input type="text" {...register("password")} />
          <img src={iconEyes} alt="" />
          <div>{errors.password?.message}</div>
        </div>
        <div>
          <label htmlFor="">CONFIRM PASSWORD</label>
          <input type="text" {...register("confirmPassword")} />
          <img src={iconEyes} alt="" />
          <div>{errors.confirmPassword?.message}</div>
        </div>
        <div>
          <label htmlFor="">AVATAR</label>
          <input type="file" {...register("avatar")} />
          <div>{errors.avatar?.message}</div>
        </div>
        <div>
          <button>Sing In</button>
        </div>
      </form>
    </ContainerRegister>
  );
};

export default Register;
