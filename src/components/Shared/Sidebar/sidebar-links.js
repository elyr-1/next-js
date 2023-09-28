import {
  MdDashboard,
  MdCalculate,
  MdAccountBalanceWallet,
  MdReceiptLong,
  MdHandshake,
  MdHistory,
  MdTimer,
  MdCalendarMonth,
} from "react-icons/md";
import { SiCrowdsource } from "react-icons/si";

export const sidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: MdDashboard,
  },
  {
    id: 2,
    name: "Billing Summary",
    link: "/billing-summary",
    icon: MdCalculate,
  },
  {
    id: 3,
    name: "Billing Statements",
    link: "/billing-statements",
    icon: MdAccountBalanceWallet,
  },
  {
    id: 4,
    name: "Invoices",
    link: "/invoices",
    icon: MdReceiptLong,
  },
  {
    id: 5,
    name: "Projects",
    link: "/projects",
    icon: MdHandshake,
  },
  {
    id: 6,
    name: "Resources",
    link: "/resources",
    icon: SiCrowdsource,
  },
  {
    id: 7,
    name: "Time Logs",
    link: "/timelogs",
    icon: MdHistory,
  },
  {
    id: 8,
    name: "Timesheet Periods",
    link: "/timesheet-periods",
    icon: MdTimer,
  },
  {
    id: 9,
    name: "Calendar",
    link: "/calendar",
    icon: MdCalendarMonth,
  },
];
