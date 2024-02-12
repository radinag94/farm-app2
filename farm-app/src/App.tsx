import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FieldPage from "./pages/FieldsPage/FieldsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { routes } from "./components/statics/routes";
import FarmDetailsPage from "./pages/FarmDetailsPage/FarmDetailsPage";
import Machine from "./pages/MachinesPage/MachinesPage";
import FieldCultivation from "./pages/FieldCultivationsPage/FieldCultivationsPage";
import { BaseLayout } from "./components/BaseLayout/BaseLayout";
import FarmPage from "./pages/FarmsPage/FarmsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FieldDetailsPage from "./pages/FieldDetailsPage/FieldDetailsPage";
import { AuthProvider } from "./auth/AuthProvider";
import CropsPage from "./pages/CropsPage/CropsPage";
import SoilsPage from "./pages/SoilsPage/SoilsPage";
import CreateFarmPage from "./pages/CreateFarmPage/CreateFarmPage";
import UpdateFarmPage from "./pages/UpdateFarmPage/UpdateFarmPage";
import CreateFieldPage from "./pages/CreateFieldPage/CreateFieldPage";
import UpdateFieldPage from "./pages/UpdateFieldPage/UpdateFieldPage";
import MachineDetailsPage from "./pages/MachineDetailsPage/MachineDetailsPage";
import CreateMachinePage from "./pages/CreateMachinePage/CreateMachinePage";
import UpdateMachinePage from "./pages/UpdateMachinePage/UpdateMachinePage";
import ProcessTypesPage from "./pages/ProcessTypesPage/ProcessTypesPage";
import CreateFieldCultivationPage from "./pages/CreateFieldCultivationPage/CreateFieldCultivationPage";
import GrowingPeriodDetailsPage from "./pages/GrowingPeriodDetailsPage/GrowingPeriodDetailsPage";
import CreateGrowingPeriodPage from "./pages/CreateGrowingPeriodPage/CreateGrowingPeriodPage";
import FieldGrowingPeriodsPage from "./pages/FieldGrowingPeriodsPage/FieldGrowingPeriodsPage";

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
              <Route path={routes.createFarm} element={<CreateFarmPage />} />
              <Route path={routes.farmDetails} element={<FarmDetailsPage />} />
              <Route path={routes.updateFarm} element={<UpdateFarmPage />} />
              <Route path={routes.field} element={<FieldPage />} />
              <Route path={routes.createField} element={<CreateFieldPage />} />
              <Route
                path={routes.fieldDetails}
                element={<FieldDetailsPage />}
              />
              <Route
                path={routes.fieldGrowingPeriods}
                element={<FieldGrowingPeriodsPage />}
              />
              <Route path={routes.updateField} element={<UpdateFieldPage />} />
              <Route
                path={routes.growingPeriodDetails}
                element={<GrowingPeriodDetailsPage />}
              />
              <Route
                path={routes.createGrowingPeriod}
                element={<CreateGrowingPeriodPage />}
              />
              <Route
                path={routes.createFieldCultivation}
                element={<CreateFieldCultivationPage />}
              />
              <Route path={routes.machine} element={<Machine />} />
              <Route
                path={routes.createMachine}
                element={<CreateMachinePage />}
              />
              <Route
                path={routes.machineDetails}
                element={<MachineDetailsPage />}
              />
              <Route
                path={routes.updateMachine}
                element={<UpdateMachinePage />}
              />
              <Route
                path={routes.fieldCultivation}
                element={<FieldCultivation />}
              />
              <Route path={routes.crop} element={<CropsPage />} />
              <Route path={routes.soil} element={<SoilsPage />} />
              <Route path={routes.processType} element={<ProcessTypesPage />} />
              <Route path={routes.notFound} element={<NotFoundPage />} />
            </Routes>
          </BaseLayout>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
