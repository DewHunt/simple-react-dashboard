import { HiOutlineLogout } from "react-icons/hi";
import { TbHexagonLetterD } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import {
  DashboardBottomLinks,
  DashboardTopLinks,
} from "../../library/constants/Navigations";
const Sidebar = () => {
  const { pathname } = useLocation();
  const linkCommonClasses =
    "flex item-center gap-2 px-3 py-2 rounded-sm text-base hover:bg-gray-300 hover:no-underline";
  const linkClasses = "font-light hover:text-indigo-600 hover:font-semibold";
  const logoutClasess =
    "cursor-pointer text-red-500 font-semibold hover:text-red-700 hover:font-bold";
  return (
    <>
      <div className="flex flex-col bg-indigo-600 w-60 p-3 text-white">
        <div className="flex item-center px-1 py-3 gap-3">
          <TbHexagonLetterD fontSize="30" />
          <span className="text-neutral-100 text-lg font-bold">
            Dew Dashboard
          </span>
        </div>
        <div className="flex flex-col flex-1 py-8 gap-0.5">
          {DashboardTopLinks.map((topLink) => (
            <Link
              key={topLink.key}
              to={topLink.path}
              className={`${
                pathname == topLink.path
                  ? "bg-gray-300 text-indigo-600 font-semibold"
                  : "text-white"
              } ${linkCommonClasses} ${linkClasses}`}>
              {topLink.icon}
              {topLink.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col pt-2 gap-0.5 border-t">
          {DashboardBottomLinks.map((topLink) => (
            <Link
              key={topLink.key}
              to={topLink.path}
              className={`${
                pathname == topLink.path
                  ? "bg-gray-300 text-indigo-600 font-semibold"
                  : "text-white"
              } ${linkCommonClasses} ${linkClasses}`}>
              {topLink.icon}
              {topLink.label}
            </Link>
          ))}

          <Link
            to="/logout/"
            className={`${linkCommonClasses} ${logoutClasess}`}>
            <HiOutlineLogout fontSize="22" />
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
