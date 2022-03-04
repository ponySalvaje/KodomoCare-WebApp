import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/logout",
    name: "Logout",
    tabIcon: require("assets/img/tabs/logout.png").default,
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    tabIcon: require("assets/img/tabs/home.png").default,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    tabIcon: require("assets/img/tabs/maps.png").default,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    tabIcon: require("assets/img/tabs/profile.png").default,
    component: UserProfile,
    layout: "/admin",
  },
];

export default dashboardRoutes;
