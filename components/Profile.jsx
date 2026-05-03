import React from "react";

export default function Profile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-2">
      <form
        action=""
        className={`bg-white shadow-2xl rounded-xl p-5
        flex flex-col gap-3
        `}
      >
        <h2 className={`text-xl font-bold`}>Profile Information</h2>

        <div className={`flex flex-col gap-1`}>
          <label htmlFor="" className={`text-gray-700`}>
            Full Name
          </label>
          <input
            type="text"
            name=""
            placeholder="Customer User"
            className={`
            p-2 indent-4 bg-gray-100 outline outline-gray-300 rounded-md transition duration-200 focus:outline-2 focus:outline-gray-500
            `}
          />
        </div>
        <div className={`flex flex-col gap-1`}>
          <label htmlFor="" className={`text-gray-700`}>
            Email
          </label>
          <input
            type="email"
            name=""
            placeholder="user@pharmacare.com"
            className={`
            p-2 indent-4 bg-gray-100 outline outline-gray-300 rounded-md transition duration-200 focus:outline-2 focus:outline-gray-500
            `}
          />
        </div>
        <div className={`flex flex-col gap-1`}>
          <label htmlFor="" className={`text-gray-700`}>
            Phone
          </label>
          <input
            type="text"
            name=""
            placeholder="+0201047483"
            className={`
            p-2 indent-4 bg-gray-100 outline outline-gray-300 rounded-md transition duration-200 focus:outline-2 focus:outline-gray-500
            `}
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700`}
        >
          Update Profile
        </button>
      </form>
      {/* ---------------------------------- */}
      <form
        action=""
        className={`bg-white shadow-2xl rounded-xl p-5
        flex flex-col gap-3
        `}
      >
        <h2 className={`text-xl font-bold`}>Delivery Address</h2>

        <div className={`flex flex-col gap-1`}>
          <label htmlFor="" className={`text-gray-700`}>
            Street Address
          </label>
          <input
            type="text"
            name=""
            placeholder="123 Main Street"
            className={`
            p-2 indent-4 bg-gray-100 outline outline-gray-300 rounded-md transition duration-200 focus:outline-2 focus:outline-gray-500
            `}
          />
        </div>
        <div className={`flex flex-col gap-1`}>
          <label htmlFor="" className={`text-gray-700`}>
            City
          </label>
          <input
            type="text"
            name=""
            placeholder="Damietta"
            className={`
            p-2 indent-4 bg-gray-100 outline outline-gray-300 rounded-md transition duration-200 focus:outline-2 focus:outline-gray-500
            `}
          />
        </div>
        <div className={`grid grid-cols-2 gap-2`}>
          <div className={`flex flex-col gap-1`}>
            <label htmlFor="" className={`text-gray-700`}>
              State
            </label>
            <input
              type="text"
              name=""
              placeholder="CA"
              className={`
            p-2 indent-4 bg-gray-100 outline outline-gray-300 rounded-md transition duration-200 focus:outline-2 focus:outline-gray-500
            `}
            />
          </div>
          <div className={`flex flex-col gap-1`}>
            <label htmlFor="" className={`text-gray-700`}>
              ZIP Code
            </label>
            <input
              type="text"
              name=""
              placeholder="057"
              className={`
            p-2 indent-4 bg-gray-100 outline outline-gray-300 rounded-md transition duration-200 focus:outline-2 focus:outline-gray-500
            `}
            />
          </div>
        </div>
        <button
          type="submit"
          className={`bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700`}
        >
          Save Adress
        </button>
      </form>
    </div>
  );
}
