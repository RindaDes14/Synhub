import { Routes, Route } from "react-router-dom"

// pages
import LandingPage from "../pages/Customer/LandingPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/Customer/RegisterPage"
import PaymentPage from "../pages/Customer/PaymentPage"
import SuccessPage from "../pages/Customer/SuccessPage"
import OrderPage from "../pages/Customer/OrderPage"

// dashboard
import DashboardPage from "../pages/Dashboard/DashboardPage"
import BankPage from "../pages/Dashboard/banks/BankPage"
import CreateBankPage from "../pages/Dashboard/banks/CreateBankPage"
import EditBankPage from "../pages/Dashboard/banks/EditBankPage"
import BannerPage from "../pages/Dashboard/banners/BannerPage"
import CreateBannerPage from "../pages/Dashboard/banners/CreateBannerPage"
import EditBannerPage from "../pages/Dashboard/banners/EditBannerPage"
import FacilityPage from "../pages/Dashboard/facilitys/FacilityPage"
import CreateFacilityPage from "../pages/Dashboard/facilitys/CreateFacilityPage"
import EditFacilityPage from "../pages/Dashboard/facilitys/EditFacilityPage"
import UserPage from "../pages/Dashboard/users/UserPage"
import CreateUserPage from "../pages/Dashboard/users/CreateUserPage"
import EditUserPage from "../pages/Dashboard/users/EditUserPage"
import RuanganPage from "../pages/Customer/RuanganPage"

import PrivateRoutes from "./PrivateRoutes"
import PrivateAdminRoutes from "./PrivateAdminRoutes"

function RouteIndex() {
  return (
    <Routes>
      {/* ======routes customer===== */}
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
      <Route path="/" Component={LandingPage} />

      <Route
        path="/ruangan/:slug"
        element={
          <PrivateRoutes>
            <RuanganPage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/payment/:kodePesanan"
        element={
          <PrivateRoutes>
            <PaymentPage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/success/:kodePesanan"
        element={
          <PrivateRoutes>
            <SuccessPage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/order"
        element={
          <PrivateRoutes>
            <OrderPage />
          </PrivateRoutes>
        }
      />

      {/*===== routes dashboard===== */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateAdminRoutes>
            <DashboardPage />
          </PrivateAdminRoutes>
        }
      />

      <Route
        path="/admin/bank"
        element={
          <PrivateAdminRoutes>
            <BankPage />
          </PrivateAdminRoutes>
        }
      />
      <Route path="/admin/bank/new" element={<CreateBankPage />} />
      <Route path="/admin/bank/:id" element={<EditBankPage />} />

      <Route path="/admin/banner" element={<BannerPage />} />
      <Route path="/admin/banner/new" element={<CreateBannerPage />} />
      <Route path="/admin/banner/:id" element={<EditBannerPage />} />

      <Route path="/admin/facility" element={<FacilityPage />} />
      <Route path="/admin/facility/new" element={<CreateFacilityPage />} />
      <Route path="/admin/facility/:id" element={<EditFacilityPage />} />

      <Route path="/admin/user" element={<UserPage />} />
      <Route path="/admin/user/new" element={<CreateUserPage />} />
      <Route path="/admin/user/:id" element={<EditUserPage />} />

    </Routes>
  )
}

export default RouteIndex
