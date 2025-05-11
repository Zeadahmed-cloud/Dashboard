import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      navigate("/Home");
      // alert(JSON.stringify(values));
    },
  });
  return (
    <div className="flex flex-col gap-8 w-10/12 md:w-5/12 max-w-[580px] ">
      <div>
        <h1 className="text-white text-2xl font-medium mb-2">Login</h1>
        <p className="text-white">Welcome back! Please Login to your account</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-white ">Email Address</label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              type="text"
              className="bg-[var(--main-black)] rounded-[18px] text-white p-3"
              placeholder="asha123@mediserve.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white">Password</label>
            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              type="password"
              className="bg-[var(--main-black)] rounded-[18px] text-white p-3"
              placeholder="Enter Your Password"
            />
          </div>
        </div>
        <button
          type="submit"
          className="cursor-pointer text-xl font-bold bg-[#04A4C8] text-white rounded-[18px] h-12 w-full flex justify-center items-center"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
