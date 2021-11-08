import axios from "../config";

export const monitoringsServicies = () =>{

    const getMonitorings = () =>{
        return axios({
            method: 'GET',
            url : '/monitorings'
        })
    };

    const createMonitoring = (matter,assignedMonitor,date,classroom) =>{
        return axios({
            method: 'POST',
            url : '/monitorings',
            data:{
                matter,
                assignedMonitor,
                date,
                classroom
            }
        })
    };
    const updateMonitoring = (id,matter,assignedMonitor,date,classroom) =>{
        return axios({
            method: 'PATCH',
            url : `/monitors/${id}`,
            data:{
                matter,
                assignedMonitor,
                date,
                classroom
            }
        })
    };

    const deleteMonitoring = (id) =>{
        return axios({
            method: 'DELETE',
            url : `/monitorings/${id}`
        })
    };

    return{
        getMonitorings,
        createMonitoring,
        updateMonitoring,
        deleteMonitoring
    }
}