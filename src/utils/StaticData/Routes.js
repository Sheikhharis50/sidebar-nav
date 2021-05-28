import Home from "../../pages/Home";
import Reports from "../../pages/Reports";
import Products from "../../pages/Products";

export const Routes = [
  {
    path: "/",
    exact: true,
    render: (props) => <Home {...props} />,
  },
  {
    path: "/reports",
    exact: false,
    render: (props) => <Reports {...props} />,
  },
  {
    path: "/products",
    exact: false,
    render: (props) => <Products {...props} />,
  },
];
