import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FieldPage from "./pages/FieldsPage/FieldsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { routes } from "./components/statics/routes";
import FarmDetailsPage from "./pages/FarmDetailsPage/FarmDetailsPage";
import Machine from "./pages/MachinesPage/MachinesPage";
import FieldCultivation from "./pages/FieldCultivation";
import { BaseLayout } from "./components/BaseLayout/BaseLayout";
import FarmPage from "./pages/FarmsPage/FarmsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useAuth } from "./auth/AuthProvider";
import FieldDetailsPage from "./pages/FieldDetailsPage/FieldDetailsPage";
import { AuthProvider } from "./auth/AuthProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <BaseLayout>
            <Routes>
              <Route path={routes.welcome} element={<LandingPage />} />

              <Route path={routes.home} element={<HomePage />} />
              <Route path={routes.farm} element={<FarmPage />} />
              <Route path={routes.farmDetails} element={<FarmDetailsPage />} />
              <Route path={routes.field} element={<FieldPage />} />
              <Route
                path={routes.fieldDetails}
                element={<FieldDetailsPage />}
              />
              <Route path={routes.machine} element={<Machine />} />
              <Route
                path={routes.fieldCultivation}
                element={<FieldCultivation />}
              />
              <Route path={routes.crop} element={<Machine />} />
              <Route path={routes.soil} element={<Machine />} />
              <Route path={routes.processType} element={<Machine />} />

              <Route path={routes.notFound} element={<NotFoundPage />} />
            </Routes>
          </BaseLayout>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
