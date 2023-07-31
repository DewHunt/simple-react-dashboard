import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from "react-icons/io5";

const Summary = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-1 items-center bg-white rounded p-4 border border-gray-200">
          <div className="flex rounded-full h-14 w-14 items-center justify-center bg-sky-500">
            <IoBagHandle className="text-3xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-md text-gray-500 font-light">
              Total Sales
            </span>
            <div className="flex items-center ">
              <strong className="flex items-center text-lg text-gray-700 font-semibold">
                <FaBangladeshiTakaSign />
                87264
              </strong>
              <span className="text-sm text-green-500 pl-2">+459</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center bg-white rounded p-4 border border-gray-200">
          <div className="flex rounded-full h-14 w-14 items-center justify-center bg-orange-500">
            <IoPieChart className="text-3xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-md text-gray-500 font-light">
              Total Expences
            </span>
            <div className="flex items-center ">
              <strong className="flex items-center text-lg text-gray-700 font-semibold">
                <FaBangladeshiTakaSign />
                20574
              </strong>
              <span className="text-sm text-green-500 pl-2">-486</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center bg-white rounded p-4 border border-gray-200">
          <div className="flex rounded-full h-14 w-14 items-center justify-center bg-yellow-500">
            <IoPeople className="text-3xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-md text-gray-500 font-light">
              Total Customers
            </span>
            <div className="flex items-center">
              <strong className="flex items-center text-lg text-gray-700 font-semibold">
                11684
              </strong>
              <span className="text-sm text-red-500 pl-2">-96</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center bg-white rounded p-4 border border-gray-200 ">
          <div className="flex rounded-full h-14 w-14 items-center justify-center bg-green-500">
            <IoCart className="text-3xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-md text-gray-500 font-light">
              Total Orders
            </span>
            <div className="flex items-center ">
              <strong className="flex items-center text-lg text-gray-700 font-semibold">
                32154
              </strong>
              <span className="text-sm text-red-500 pl-2">-49</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
