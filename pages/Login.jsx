import React from "react";
import { useState } from "react";
import InputField from "../components/InputField";
import {
  RiMailLine,
  RiLockLine,
  RiUserFill,
  RiIdCardLine,
  RiAdminLine,
} from "react-icons/ri";
export default function Login() {
  const data = [
    {
      icon: RiAdminLine,
      bg_icon: "bg-purple-500",
      title: "Admin",
      description: "Full system access",
      outline_color: "outline-2 outline-purple-500",
    },
    {
      icon: RiIdCardLine,
      bg_icon: "bg-green-500",
      title: "Cashier",
      description: "Sales & transaction",
      outline_color: "outline-2 outline-green-500",
    },
    {
      icon: RiUserFill,
      bg_icon: "bg-sky-400",
      title: "User",
      description: "Browse & purchase",
      outline_color: "outline-2 outline-sky-400",
    },
  ];
  const [selected, setSelected] = useState(2);
  const selection = (idx) => {
    setSelected(idx);
  };
  return (
    <div
      className={`max-w-6xl my-10 mx-10 lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10`}
    >
      {/* Roles Selection*/}
      <div
        className={`bg-white rounded-md p-5 flex flex-col gap-5 shadow-2xl shadow-gray-500`}
      >
        <h2 className={`font-bold text-2xl`}>Select Your Role</h2>
        {/* Roles */}
        <div className={`flex flex-col gap-5`}>
          {data.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                onClick={() => selection(idx)}
                className={`border border-gray-300 rounded-md p-3 
                    flex items-center gap-5  
                    ${selected === idx ? r.outline_color : ""}
                    `}
              >
                <div
                  className={`w-15 h-15 rounded-full bg-gray-200 flex justify-center items-center
                     ${selected === idx ? r.bg_icon : ""}
                    `}
                >
                  <Icon
                    className={`w-7 h-7 text-gray-700 ${selected === idx ? "text-white" : ""}`}
                  />
                </div>
                <span className={`flex flex-col gap-1`}>
                  <span className="font-bold">{r.title}</span>
                  <span className="text-gray-700">{r.description}</span>
                </span>
              </div>
            );
          })}
        </div>
        {/* Credentials */}
        <div className={`bg-gray-100 p-5 rounded-md`}>
          <h3 className={`font-bold my-2`}>Demo Credentials</h3>
          <ul>
            <li className={`text-gray-600 flex gap-2`}>
              <span className={`text-black font-semibold`}>Admin:</span>
              admin@pharmacare.com / admin123
            </li>
            <li className={`text-gray-600 flex gap-2`}>
              <span className={`text-black font-semibold`}>Cashier:</span>
              cashier@pharmacare.com / cashier123
            </li>
            <li className={`text-gray-600 flex gap-2`}>
              <span className={`text-black font-semibold`}>User:</span>
              user@pharmacare.com / user123
            </li>
          </ul>
        </div>
      </div>
      {/* Login  */}
      <div
        className={`bg-white rounded-md p-5 flex flex-col gap-5 
        shadow-2xl shadow-gray-500
        `}
      >
        {/* Role Login */}
        <div className={`flex flex-col justify-center items-center gap-5`}>
          <div
            className={`w-15 h-15 rounded-full bg-gray-200 flex justify-center items-center
              ${data[selected].bg_icon}
              `}
          >
            {selected !== null &&
              (() => {
                const Icon = data[selected].icon;
                return (
                  <Icon
                    className={`w-8 h-8 
                   text-white 
                  `}
                  />
                );
              })()}
          </div>

          <h2 className={`text-xl font-bold`}>{data[selected].title} Login</h2>
          <p>Enter your credentials to continue</p>
        </div>
        {/* Login Form */}
        <form action="" className={`flex flex-col gap-5`}>
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            Icon={RiMailLine}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            Icon={RiLockLine}
          />

          <input
            type="submit"
            value={`Login As ${data[selected].title}`}
            className={`text-white bg-blue-600 w-full max-w-lg p-2 m-auto rounded-md`}
          />
        </form>
      </div>
    </div>
  );
}
