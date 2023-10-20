import React from "react";
import MyInput from "./MyInputs";

const InputsAll = () => {
  return (
    <div>
      <form>
        <MyInput
          error="Поле не должно быть пустым"
          type={"text"}
          labelText="First name"
        />
        <MyInput
          error="Поле не должно быть пустым"
          type={"text"}
          labelText="Last name"
        />
        <MyInput error="Не валидный email @" type={"email"} labelText="Email" />
        <MyInput
          error="Поле должен содержать больше чем 6 букв"
          type={"password"}
          labelText="Password"
        />
        <MyInput
          error="Поле не должно быть пустым"
          type={"text"}
          labelText="Address"
        />
        <MyInput
          error="Поле не должно быть пустым"
          type={"text"}
          labelText="City"
        />
        <MyInput
          error="Возраст должен быть старше 18 лет!"
          type={"number"}
          labelText="Age"
        />
      </form>
    </div>
  );
};

export default InputsAll;
