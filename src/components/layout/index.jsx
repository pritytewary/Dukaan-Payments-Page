import Header from "../nav/Header";
import SideBar from "../nav/SideBar";

const Layout = ({ active = "", headerProps = {}, children }) => {
  return (
    <div className="flex w-full h-screen">
      <SideBar active={active} />

      <div className="flex-1">
        <Header {...headerProps} />

        <div className="pl-6 pr-5 bg-gray-50 h-[calc(100vh-56px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
