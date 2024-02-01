import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/HomePage";
import Farm from "./pages/Farm";
import Field from "./pages/Field";
import LandingPage from "./pages/LandingPage";
import { AuthProvider } from "./components/hooks/AuthProvider";
import { routes } from "./components/statics/routes";
import AuthHOC from "./components/AuthHOC";
import FarmDetailsPage from "./pages/FarmDetailsPage";
import Machine from "./pages/Machine";
import FieldCultivation from "./pages/FieldCultivation";
import { BaseLayout } from "./components/BaseLayout/BaseLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <BaseLayout />
          <Routes>
            <Route path={routes.welcome} element={<LandingPage />} />

            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.farm} element={<Farm />} />
            <Route path="/farm/:id" element={<FarmDetailsPage />} />
            <Route path={routes.field} element={<Field />} />
            <Route path={routes.machine} element={<Machine />} />
            <Route
              path={routes.fieldCultivation}
              element={<FieldCultivation />}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
