import React from 'react'
import { FieldFormData } from '../components/Forms/FieldForm';
import FieldForm from '../components/Forms/FieldForm';
import styled from 'styled-components';

const FieldPageContainer = styled.div`
margin: 200px auto;
padding: 20px;
border: 1px solid #ddd;
border-radius: 5px;
width: 30%;
`;

function Field() {
  const handleFormSubmit = (fieldData: FieldFormData) => {
    console.log("field submitted", fieldData.error);
  };
  return (
    <FieldPageContainer>
      <FieldForm onSubmit={handleFormSubmit}></FieldForm>
    </FieldPageContainer>
  );
}

export default Field