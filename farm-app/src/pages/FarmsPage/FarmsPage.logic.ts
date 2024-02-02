import { useFarms } from "../../hooks/useFarms";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { FarmFormData } from "../../components/statics/interfaces";

export const useFarmsPageLogic = () => {
  const farms = useFarms();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCreateFarm = () => {
    const queryParams = "?showModal=true&create=true";

    navigate(`/farm${queryParams}`);
    setShowModal(true);
  };

  const handleFormSubmit = (farmData: FarmFormData) => {
    console.log("Farm submitted:", farmData);
    setShowModal(false);
    navigate("/farm");
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShowModal(false);
    }

    navigate(`/farm`);
  };

  return {
    farms,
    showModal,
    handleCreateFarm,
    handleFormSubmit,
    handleOverlayClick,
    modalRef,
  };
};
