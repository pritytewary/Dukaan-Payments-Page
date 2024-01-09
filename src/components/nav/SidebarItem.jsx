import clsx from "clsx";
import {
  BoltIcon,
  ChartBarIcon,
  ClipboardIcon,
  HomeIcon,
  Squares2X2Icon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { MdOutlinePayments } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineSpatialAudioOff } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbDiscount2 } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";

const SidebarItem = ({ active = "" }) => {
  return (
    <div className="text-white flex flex-col text-base gap-1">
      {items.map((item) => {
        const isActive = active === item.key;

        return (
          <a
            className={clsx(
              "flex gap-3 items-center text-white hover:bg-white hover:bg-opacity-10 rounded-md p-1.5 cursor-pointer",
              {
                "bg-white bg-opacity-10": isActive,
              }
            )}
            key={item.label}
            href={item.href}
          >
            <item.Icon className="w-5 h-5" />
            <p className="text-sm">{item.label}</p>
          </a>
        );
      })}
    </div>
  );
};

const items = [
  {
    key: "home",
    Icon: HomeIcon,
    label: "Home",
    href: "/",
  },
  {
    key: "orders",
    Icon: ClipboardIcon,
    label: "Orders",
    href: "/orders",
  },
  {
    key: "products",
    Icon: Squares2X2Icon,
    label: "Products",
    href: "/products",
  },
  {
    key: "delivery",
    Icon: CiDeliveryTruck,
    label: "Delivery",
    href: "/delivery",
  },
  {
    key: "marketing",
    Icon: GrAnnounce,
    label: "Marketing",
    href: "/marketing",
  },
  {
    key: "analytics",
    Icon: ChartBarIcon,
    label: "Analytics",
    href: "/analytics",
  },
  {
    key: "payments",
    Icon: MdOutlinePayments,
    label: "Payments",
    href: "/payments",
  },
  {
    key: "tools",
    Icon: WrenchIcon,
    label: "Tools",
    href: "/tools",
  },
  {
    key: "discounts",
    Icon: TbDiscount2,
    label: "Discounts",
    href: "/discounts",
  },
  {
    key: "audience",
    Icon: MdOutlineSpatialAudioOff,
    label: "Audience",
    href: "/audience",
  },
  {
    key: "appearance",
    Icon: IoColorPaletteOutline,
    label: "Appearance",
    href: "/appearance",
  },
  {
    key: "plugins",
    Icon: BoltIcon,
    label: "Pulgins",
    href: "/plugins",
  },
];

export default SidebarItem;
