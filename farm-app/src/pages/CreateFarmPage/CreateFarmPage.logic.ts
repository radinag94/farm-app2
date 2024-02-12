import { useNavigate } from "react-router";
import { FarmFormData } from "../../components/statics/interfaces";
export const useCreateFarmLogic = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (farmData: FarmFormData) => {
    console.log("Farm submitted:", farmData);
    navigate("/farm");
  };
  return { handleFormSubmit };
};
