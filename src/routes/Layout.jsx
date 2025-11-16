/* eslint-disable */
import { Outlet } from "react-router-dom";
import NavarPage from "../NavarPage.jsx";

function Layout() {
  return (
    <div>
      <NavarPage></NavarPage>
      <Outlet></Outlet>
    </div>
  );
}
export default Layout;
