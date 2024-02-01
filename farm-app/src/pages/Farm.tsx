import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useFarms } from "../components/hooks/useFarms";
import FarmCard from "../components/FarmCard/FarmCard";
import EmptyList from "../components/EmptyList/EmptyListMessage";
import FarmForm, { FarmFormData } from "../components/Forms/FarmForm";
import Button from "../ui-elements/button";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const FarmPageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    color: #25c40c;
    margin-bottom: 20px;
    font-size: 24px;
    width: 100%;
    text-align: center;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContentWrapper = styled.div`
  background: #fff;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.1);
`;

function Farm() {
  const farms = useFarms();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCreateFarm = () => {
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
  };

  return (
    <FarmPageContainer>
      <Button
        label="Create Farm"
        color="#afb2ad"
        onClick={handleCreateFarm}
      ></Button>
      <h2>Your Farms</h2>
      {farms.length > 0 ? (
        farms.map((farm) => <FarmCard key={farm.id} farm={farm} />)
      ) : (
        <EmptyList message="No farms available. Create a farm to get started!" />
      )}

      {showModal && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContentWrapper ref={modalRef}>
            <FarmForm onSubmit={handleFormSubmit} />
          </ModalContentWrapper>
        </ModalOverlay>
      )}
    </FarmPageContainer>
  );
}

export default Farm;
