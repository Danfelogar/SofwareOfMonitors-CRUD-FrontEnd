import { types } from "../types/types";
import { monitoringsServicies } from "../servicies/monitorins";
import Swal from "sweetalert2";

const { getMonitorings, createMonitoring, updateMonitoring,deleteMonitoring } = monitoringsServicies();

const  actGetMonitorings = () => async(dispatch) =>{
    try {
        const res = await getMonitorings();
        const { data } = res;
        dispatch({
            type: types.getallMonitoring,
            payload: data
        });
    } catch (error) {
        Swal.fire('Error',error.message, 'error' );
    }
}

const  actCreateMonitoring = ({matter,assignedMonitor,date,classroom}) => async(dispatch) =>{
    try {
        const { data } = await createMonitoring(matter,assignedMonitor,date,classroom);

        dispatch({
            type: types.addNewMonitoring,
            payload: {id: data.id,matter,assignedMonitor,date,classroom}
        });
        dispatch({
            type: types.uiCloseModal
        });
    } catch (error) {
        Swal.fire('Error',error.message, 'error' );
    }
}

const actSetMonitoringSelected = ({id,matter,assignedMonitor,date,classroom})=> (dispatch) =>{

    dispatch({
        type: types.setActiveMonitoring,
        payload: {id,matter,assignedMonitor,date,classroom}
    });
}

const actClearMonitoringSelected = () => (dispath) =>{
    dispath({
        type: types.clearActiveMonitoring
    })
}

const  actUpdateMonitoring = ({id,matter,assignedMonitor,date,classroom}) => async(dispatch) =>{
    try {
        await updateMonitoring(id,matter,assignedMonitor,date,classroom);

        dispatch({
            type: types.updateMonitoring,
            payload: {id,matter,assignedMonitor,date,classroom}
        });
        dispatch({
            type: types.uiCloseModal
        });
    } catch (error) {
        Swal.fire('Error',error.message, 'error' );
    }
}

const  actDeleteMonitoring = (id) => async(dispatch) =>{
        try {
            await deleteMonitoring(id);
            dispatch({
                type: types.deleteMonitoring,
                payload: id
            });
        } catch (error) {
            Swal.fire('Error',error.message, 'error' );
        }
}

export const monitoringsActions =()=>{
    return{
        actGetMonitorings,
        actCreateMonitoring,
        actSetMonitoringSelected,
        actClearMonitoringSelected,
        actUpdateMonitoring,
        actDeleteMonitoring
    }
}