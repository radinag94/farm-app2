import { useFarms } from "../../hooks/useFarms";
import { useNavigate } from "react-router-dom";


export const useFarmsPageLogic = () => {
  const { farms, isLoading, isError } = useFarms();
  const navigate = useNavigate();

  const handleCreateFarm = () => {
    navigate(`/farm/create-farm`);
  };

  return {
    farms,
    handleCreateFarm,
    isLoading,
    isError,
  };
};
