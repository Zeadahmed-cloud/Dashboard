import React from "react";
import LoginForm from "../Components/Login/LoginForm";
import logo from "../assets/Img/logo.svg";

export default function Login() {
  return (
    <section className="h-screen  flex flex-col  items-center px-4">
      <div className="w-full">
        <div className="w-16 h-16">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="w-full h-11/12 flex justify-center items-center">
        <LoginForm />
      </div>
    </section>
  );
}
