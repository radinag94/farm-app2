import { useNavigate } from "react-router";
import { FieldFormData } from "../../components/statics/interfaces";
export const useCreateFieldLogic = () => {
    const navigate = useNavigate();
    const handleFormSubmit = (fieldData: FieldFormData) => {
      console.log("Field submitted:", fieldData.error);
      navigate("/field");
    };
    return {handleFormSubmit}
}