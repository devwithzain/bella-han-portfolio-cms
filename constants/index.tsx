import { FaHome } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";

export const sideBarItem = [
	{
		id: 1,
		title: "Dashboard",
		href: "/dashboard",
		icon: <BiSolidDashboard />,
	},
	{
		id: 2,
		title: "Home",
		href: "/dashboard/home",
		icon: <FaHome />,
	},
	{
		id: 3,
		title: "Portfolio",
		href: "/dashboard/portfolio",
		icon: <BsBriefcaseFill />,
	},
	{
		id: 4,
		title: "Contact",
		href: "/dashboard/contact",
		icon: <MdContactPhone />,
	},
];
