import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    icon: Person,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "content_paste",
    layout: "/admin",
  },
  {
    path: "",
    name: "Logout",
    icon: "",
    layout: "/",
  },
];

export default dashboardRoutes;
