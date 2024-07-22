import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import HomePage from "./Components/HomePage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutUs,
  },
  {
    path: "/contact",
    component: ContactUs,
  },
];

export default routes;
