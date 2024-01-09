import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import WalletBalance from "./WalletBalance";

const SideBar = ({ active = "" }) => {
  return (
    <div className="w-[220px] bg-[#1e2640] h-screen p-3.5 flex flex-col gap-5">
      <Logo />
      <SidebarItem active={active} />
      <WalletBalance balance={100} />
    </div>
  );
};

export default SideBar;
