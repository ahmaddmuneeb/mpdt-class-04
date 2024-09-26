import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Dashboard from "../pages/admin/Dashboard";
// Component

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        {/* {isRouteValid ? (
          <>
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/digitalmarketig" element={<DigitalMarketingPage />} />
            <Route path="/computerservices" element={<ComputerServicesPage />} />
            <Route path="/generalsalesorders" element={<GeneralSalesOrderPage />} />
            <Route path="/" element={<HomePage />} />
          </>
        ) : (
          <Route path={"*"} element={<NotFoundPage />} />
        )} */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
