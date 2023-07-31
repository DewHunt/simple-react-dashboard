import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <>
      <div className="flex flex-row bg-neutral-100 w-screen h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 p-4 min-h-0 overflow-auto">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
