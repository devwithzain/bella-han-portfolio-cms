import { FaHome } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { GrServices } from "react-icons/gr";
import { PiPathBold } from "react-icons/pi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BiSolidDashboard, BiStoreAlt } from "react-icons/bi";
import { MdOutlineEventAvailable, MdOutlineWebStories } from "react-icons/md";

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
		title: "Agency",
		href: "/dashboard/agency",
		icon: <BiStoreAlt />,
	},
	{
		id: 4,
		title: "Services",
		href: "/dashboard/services",
		icon: <GrServices />,
	},
	{
		id: 5,
		title: "Success Stories",
		href: "/dashboard/success-stories",
		icon: <MdOutlineWebStories />,
	},
	{
		id: 6,
		title: "Careers",
		href: "/dashboard/careers",
		icon: <PiPathBold />,
	},
	{
		id: 7,
		title: "Academy",
		href: "/dashboard/academy",
		icon: <HiOutlineAcademicCap />,
	},
	{
		id: 8,
		title: "Events",
		href: "/dashboard/events",
		icon: <MdOutlineEventAvailable />,
	},
	{
		id: 9,
		title: "Contact Us",
		href: "/dashboard/contact-us",
		icon: <LuContact />,
	},
];
