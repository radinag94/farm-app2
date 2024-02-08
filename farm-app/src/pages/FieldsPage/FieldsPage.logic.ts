import { useFields } from "../../hooks/useFields";
import { useNavigate } from "react-router";

export const useFieldPageLogic = () => {
  const { fields = [], isLoading, isError } = useFields();
  const navigate = useNavigate();

  const handleCreateField = () => {
    navigate(`/field/create-field`);
  };
  return { fields, handleCreateField, isLoading, isError };
};
