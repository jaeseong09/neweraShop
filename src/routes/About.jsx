/* eslint-disable */
import { Outlet } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <h4>회사 정보 페이지</h4>
      <Outlet></Outlet>
    </div>
  );
}
export default AboutPage;
