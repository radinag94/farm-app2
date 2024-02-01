import React from 'react'
import { useMachines } from '../components/hooks/useMachines'
import { useFarms } from '../components/hooks/useFarms'
import styled from 'styled-components'
import EmptyList from '../components/EmptyList/EmptyListMessage'
import MachineForm, { MachineFormData } from '../components/Forms/MachineForm'

const MachinePageContainer = styled.div`
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
`

function Machine() {
  const machines = useMachines()
  const farms = useFarms()

  const handleFormSubmit = (machineData:MachineFormData) => {
    console.log("field submitted", machineData.error);
  };

  return (
    <MachinePageContainer>
    <h2>Machine List</h2>
      {machines.length > 0 ? (
        machines.map((machine) => {
          const associatedFarm = farms.find(
            (farm) => farm.id === machine.farmId
          );

          return (
            <div key={machine.id}>
              <strong>Name: {machine.name}</strong>
              <p>Brand: {machine.brand}</p>
              <p>Register Number: {machine.registerNumber}</p>
              {associatedFarm && (
                <div>
                  <p>Farm Name: {associatedFarm.name}</p>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <EmptyList message="No machines available. Create a machine to get started!" />
      )}
      <MachineForm onSubmit={handleFormSubmit}></MachineForm>
      </MachinePageContainer>
  )
}

export default Machine