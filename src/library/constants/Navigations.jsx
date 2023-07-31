import {
  HiOutlineAnnotation,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineViewGrid,
} from "react-icons/hi";

export const DashboardTopLinks = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid fontSize="22" />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products/",
    icon: <HiOutlineCube fontSize="22" />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders/",
    icon: <HiOutlineShoppingCart fontSize="22" />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers/",
    icon: <HiOutlineUsers fontSize="22" />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions/",
    icon: <HiOutlineDocumentText fontSize="22" />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages/",
    icon: <HiOutlineAnnotation fontSize="22" />,
  },
];

export const DashboardBottomLinks = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings/",
    icon: <HiOutlineCog fontSize="22" />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support/",
    icon: <HiOutlineQuestionMarkCircle fontSize="22" />,
  },
];
