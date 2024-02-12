import React from 'react'
import { UpdateMachinePageHeader } from './UpdateMachinePage.style,'
import UpdateMachineForm from '../../components/Forms/UpdateMachineForm/UpdateMachineForm'
import { useParams } from 'react-router'
function UpdateMachinePage() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
    <UpdateMachinePageHeader>Update Machine</UpdateMachinePageHeader>
      {id && <UpdateMachineForm id={id} />}
    </>
  )
}

export default UpdateMachinePage