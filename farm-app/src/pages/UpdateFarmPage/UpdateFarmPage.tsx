
import { useParams } from 'react-router'
import UpdateFarmForm from '../../components/Forms/UpdateFarmForm/UpdateFarmForm'
function UpdateFarmPage() {
    const {id} =useParams()
    console.log(id)
    return (
        <>
            {id && <UpdateFarmForm id={id} />} {/* Only render UpdateFarmForm if id is defined */}
        </>
    );
}

export default UpdateFarmPage