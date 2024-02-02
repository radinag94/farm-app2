import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { FarmData } from "../../components/statics/interfaces";
import FarmService from "../../services/farmService";

export const useFarmDetailsLogic = () => {
    const { id } = useParams<{ id: string }>();
  const [farmDetails, setFarmDetails] = useState<FarmData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFarmDetails = async () => {
      try {
        if (id) {
          const data = await FarmService.fetchFarmById(id);
          setFarmDetails(data);
        }
      } catch (error) {
        console.error("Error fetching farm details:", error);
      }
    };
    
    if (id) {
      fetchFarmDetails();
    }
  }, [id]);

  const handleDeleteFarm = async () => {
    try {
      if (id) {
        await FarmService.deleteFarmById(id);
        navigate("/farm");
      }
    } catch (error) {
      console.error("Error deleting farm:", error);
    }
  };

  return {farmDetails,handleDeleteFarm}
}