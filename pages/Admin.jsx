import React from "react";
import box_pic from "../src/assets/box.svg";
import up_arrow from "../src/assets/up_arrow.svg";
import users_pic from "../src/assets/users.svg";
import Search from "../components/Search";
import revenu from "../src/assets/revenu.svg";
import { RiPencilLine, RiDeleteBinLine } from "react-icons/ri";
export default function Admin() {
  const pharmacy_data = [
    { title: "Total Medicines", num: "4", logo: box_pic },
    { title: "Total Stock", num: "550", logo: up_arrow },
    { title: "Active Users", num: "24", logo: users_pic },
    { title: "Monthly Revenue", num: "$12,450", logo: revenu },
  ];

  const quantity = 200;

  return (
    <div className={`container mx-auto mb-10 `}>
      <h1
        className={`text-center m-10 text-2xl md:text-3xl lg:text-4xl font-bold`}
      >
        Admin Dashboard
      </h1>
      {/* Pharmacy Info */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  py-5 max-sm:px-3`}
      >
        {pharmacy_data.map((d, idx) => (
          <div
            key={idx}
            className={` h-28 rounded-xl flex justify-between items-center p-5
        bg-white shadow-xl shadow-gray-500 transition-all duration-500 hover:scale-110 
        `}
          >
            <div className={`flex flex-col gap-5`}>
              <span className={`text-gray-600 font-semibold`}>{d.title}</span>
              <span className={`text-2xl font-bold`}>{d.num}</span>
            </div>
            <img src={d.logo} alt="" className={`w-12`} />
          </div>
        ))}
      </div>
      {/* Inventory Management */}
      <div
        className={`h-full rounded-xl flex flex-col gap-5 items-center px-1 py-5 md:px-5 
        bg-white shadow-xl shadow-gray-500 max-sm:mx-3
        `}
      >
        <div className={`w-full flex flex-col gap-5 `}>
          <div className={`w-full flex justify-between items-center`}>
            <span className={`text-sm md:text-xl font-bold`}>Inventory Management</span>
            <button
              className={`font-semibold text-sm md:text-lg text-white bg-blue-600 px-3 py-2 rounded-lg`}
            >
              + Add Medicine
            </button>
          </div>
          {/* Search */}
          <Search />
        </div>
        {/* Medicines Table */}
        <table className={`w-full table-fixed`}>
          <thead className={`text-gray-600 bg-gray-100`}>
            <tr>
              <th className={`py-2 text-center text-xs md:text-[16px]`}>
                Medicine Name
              </th>
              <th className={`py-2 text-center text-xs md:text-[16px]`}>
                Category
              </th>
              <th className={`py-2 text-center text-xs md:text-[16px]`}>
                Stock
              </th>
              <th className={`py-2 text-center text-xs md:text-[16px]`}>
                Price
              </th>
              <th className={`py-2 text-center text-xs md:text-[16px]`}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-b-gray-300">
              <td className={`py-3 text-center text-xs md:text-[16px]`}>
                Amoxicilline 500mg
              </td>
              <td className={`py-3 text-center text-xs md:text-[16px]`}>
                Antibuotic
              </td>
              <td
                className={`py-3 text-center text-xs md:text-[16px] ${quantity > 100 ? "text-green-700" : "text-red-700"}`}
              >
                150
              </td>
              <td className={`py-3 text-center text-xs md:text-[16px]`}>
                300$
              </td>
              <td
                className={`py-3 text-center flex justify-center items-center gap-2 `}
              >
                <button className={`py-1  rounded-md`}>
                  <RiPencilLine
                    color="rgba(253,200,44,1)"
                    className="w-7 h-6"
                  />
                </button>
                <button className={`py-1 rounded-md`}>
                  <RiDeleteBinLine
                    color="rgba(250,44,54,1)"
                    className="w-5 h-7"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
