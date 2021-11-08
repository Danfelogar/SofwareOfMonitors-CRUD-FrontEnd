import { types } from "../types/types";
import { monitorsServicies } from "../servicies/monitors";
import Swal from "sweetalert2";

const { getMonitors, createMonitor,updateMonitor ,deleteMonitor } = monitorsServicies();

const  actGetMonitors = () => async(dispatch) =>{
    try {
        const res = await getMonitors();
        const { data } = res;
        dispatch({
            type: types.getallMonitor,
            payload: data
        });
    } catch (error) {
        Swal.fire('Error',error.message, 'error' );
        alert(error.message)
    }
}

const  actCreateMonitor = ({names,lastsNames,academicProgram,semester,identificationCard,contactInformation}) => async(dispatch) =>{
    try {
        const { data } = await createMonitor(names,lastsNames,academicProgram,semester,identificationCard,contactInformation);

        dispatch({
            type: types.addNewMonitor,
            payload: {id: data.userID,names,lastsNames,academicProgram,semester,identificationCard,contactInformation}
        });
        dispatch({
            type: types.uiCloseModal
        });
    } catch (error) {
        Swal.fire('Error',error.message, 'error' );
    }
}

const actSetMonitorSelected = ({id,names,lastsNames,academicProgram,semester,identificationCard,contactInformation})=> (dispatch) =>{

    dispatch({
        type: types.setActiveMonitor,
        payload: {id,names,lastsNames,academicProgram,semester,identificationCard,contactInformation}
    });
}

const actClearMonitorSelected = () => (dispath) =>{
    dispath({
        type: types.clearActiveMonitor
    })
}

const  actUpdateMonitor = ({id,names,lastsNames,academicProgram,semester,identificationCard,contactInformation}) => async(dispatch) =>{
    try {
        await updateMonitor(id,names,lastsNames,academicProgram,semester,identificationCard,contactInformation);

        dispatch({
            type: types.updateMonitor,
            payload: {id,names,lastsNames,academicProgram,semester,identificationCard,contactInformation}
        });
        dispatch({
            type: types.uiCloseModal
        });
    } catch (error) {
        Swal.fire('Error',error.message, 'error' );
    }
}

const  actDeleteMonitor = (id) => async(dispatch) =>{
        try {
            await deleteMonitor(id);
            dispatch({
                type: types.deleteMonitor,
                payload: id
            });
        } catch (error) {
            Swal.fire('Error',error.message, 'error' );
        }
}

export const monitorsActions =()=>{
    return{
        actGetMonitors,
        actCreateMonitor,
        actSetMonitorSelected,
        actClearMonitorSelected,
        actUpdateMonitor,
        actDeleteMonitor
    }
}