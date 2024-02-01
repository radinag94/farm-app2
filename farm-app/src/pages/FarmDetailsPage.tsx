import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import FarmService from "../components/farm/farmService";



const StyledFarmDetailsPage = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 28px;
    color: #333333;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 18px;
    margin-bottom: 15px;
    line-height: 1.5;
  }

  .loading {
    font-size: 18px;
    color: #888888;
  }
`;

const FarmDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [farmDetails, setFarmDetails] = useState<any>(null);
  const navigate = useNavigate()

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
       navigate('/farm')
      }
    } catch (error) {
      console.error("Error deleting farm:", error);
    }
  };

  return (
    <StyledFarmDetailsPage>
      <h2>Farm Details Page</h2>
      <button onClick={handleDeleteFarm}>Delete Farm</button>
      {farmDetails ? (
        <>
          <p>Farm Name: {farmDetails.name}</p>
          <p>Location: {JSON.stringify(farmDetails.location)}</p>
          <p>Created At: {farmDetails.createdAt}</p>
          <p>Updated At: {farmDetails.updatedAt}</p>
        </>
      ) : (
        <p className="loading">Loading farm details...</p>
      )}
    </StyledFarmDetailsPage>
  );
};

export default FarmDetailsPage;
