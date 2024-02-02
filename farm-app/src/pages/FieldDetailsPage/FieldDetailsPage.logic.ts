import { FieldData } from "../../components/statics/interfaces";
import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import FieldService from "../../services/FieldService";

export const useFieldDetailsLogic = () => {
    const { id } = useParams<{ id: string }>();
  const [fieldDetails, setFieldDetails] = useState<FieldData| null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFieldDetails = async () => {
      try {
        if (id) {
          const data = await FieldService.fetchFieldById(id);
          setFieldDetails(data);
        }
      } catch (error) {
        console.error("Error fetching farm details:", error);
      }
    };

    if (id) {
      fetchFieldDetails();
    }
  }, [id]);

  const handleDeleteField = async () => {
    try {
      if (id) {
        await FieldService.deleteFieldById(id);
        navigate("/field");
      }
    } catch (error) {
      console.error("Error deleting field:", error);
    }
  };

  return {fieldDetails,handleDeleteField}
}