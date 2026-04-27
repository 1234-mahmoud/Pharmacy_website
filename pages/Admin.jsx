import React from "react";
import box_pic from "../src/assets/box.svg";
import up_arrow from "../src/assets/up_arrow.svg";
import users_pic from "../src/assets/users.svg";
import Search from "../components/Search";
export default function Admin() {
  const pharmacy_data = [
    { title: "Total Medicines", num: "4", logo: box_pic },
    { title: "Total Stock", num: "550", logo: up_arrow },
    { title: "Active Users", num: "24", logo: users_pic },
  ];

  const quantity=200;

  return (
    <div className={`container mx-auto mb-10 `}>
      <h1
        className={`text-center m-10 text-2xl md:text-3xl lg:text-4xl font-bold`}
      >
        Admin Dashboard
      </h1>
      {/* Pharmacy Info */}
      <div
        className={`flex flex-col lg:flex-row justify-between items-center gap-10  py-5`}
      >
        {pharmacy_data.map((d, idx) => (
          <div
            key={idx}
            className={`w-full lg:w-120 h-35 rounded-xl flex justify-between items-center p-5
        bg-white shadow-2xl shadow-gray-500 transition-all duration-500 hover:scale-110 
        `}
          >
            <div className={`flex flex-col gap-5`}>
              <span className={`text-gray-600 font-semibold`}>{d.title}</span>
              <span className={`text-3xl font-bold`}>{d.num}</span>
            </div>
            <img src={d.logo} alt="" className={`w-15`} />
          </div>
        ))}
      </div>
      {/* Inventory Management */}
      <div
        className={`w-full h-full rounded-xl flex flex-col gap-5 items-center p-5
        bg-white shadow-2xl shadow-gray-500 
        `}
      >
        <div className={`w-full flex flex-col gap-5 `}>
          <div className={`w-full flex justify-between items-center`}>
            <span className={`text-xl font-bold`}>Inventory Management</span>
            <button
              className={`font-semibold text-lg text-white bg-blue-600 px-3 py-2 rounded-lg`}
            >+
              Add Medicine
            </button>
          </div>
          {/* Search */}
          <Search/>
         </div>
      {/* Medicines Table */}
      <table className={`w-full table-fixed`}>
        <thead className={`text-gray-600 bg-gray-100`}>
          <tr>
            <th className={`py-2 text-center text-xs md:text-lg`}>Medicine Name</th>
            <th className={`py-2 text-center text-xs md:text-lg`}>Category</th>
            <th className={`py-2 text-center text-xs md:text-lg`}>Stock</th>
            <th className={`py-2 text-center text-xs md:text-lg`}>Price</th>
            <th className={`py-2 text-center text-xs md:text-lg`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-b-gray-300">
            <td className={`py-3 text-center text-xs md:text-lg`}>Amoxicilline 500mg</td>
            <td className={`py-3 text-center text-xs md:text-lg`}>Antibuotic</td>
            <td className={`py-3 text-center text-xs md:text-lg ${quantity>100?"text-green-700":"text-red-700"}`}>150</td>
            <td className={`py-3 text-center text-xs md:text-lg`}>300$</td>
            <td className={`py-3 text-center flex justify-center items-center gap-2 `}>
              <button className={`text-xs md:text-lg bg-yellow-400 text-white py-1 px-2 rounded-md`}>Edit</button>
              <button className={`text-xs md:text-lg bg-red-500 text-white py-1 px-2 rounded-md`}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}
