import axios from "../config";

export const monitorsServicies = () =>{

    const getMonitors = () =>{
        return axios({
            method: 'GET',
            url : '/monitors'
        })
    };

    const createMonitor = (names,lastsNames,academicProgram,semester,identificationCard,contactInformation) =>{
        return axios({
            method: 'POST',
            url : '/monitors',
            data:{
                names,
                lastsNames,
                academicProgram,
                semester,
                identificationCard,
                contactInformation
            }
        })
    };

    const updateMonitor = (id,names,lastsNames,academicProgram,semester,identificationCard,contactInformation) =>{
        return axios({
            method: 'PATCH',
            url : `/monitors/${id}`,
            data:{
                names,
                lastsNames,
                academicProgram,
                semester,
                identificationCard,
                contactInformation
            }
        })
    };

    const deleteMonitor = (id) =>{
        return axios({
            method: 'DELETE',
            url : `/monitors/${id}`
        })
    };

    return{
        getMonitors,
        createMonitor,
        updateMonitor,
        deleteMonitor
    }
}