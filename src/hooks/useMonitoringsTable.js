import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { monitoringsActions } from "../actions/monitorings";
import { uiOpenModal } from "../actions/ui";


export const useMonitoringsTable = () =>{
    const { actGetMonitorings,actDeleteMonitoring, actSetMonitoringSelected,actClearMonitoringSelected } = monitoringsActions();

    const monitorings = useSelector(state => state.monitorings.data)

    const dispatch = useDispatch();

    const openModal = () =>{
        dispatch(actClearMonitoringSelected());
        dispatch(uiOpenModal());
    };

    useEffect(() => {
        dispatch(actGetMonitorings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setMonitoringSelected = (monitoring) =>{
        dispatch(actSetMonitoringSelected(monitoring));
        dispatch(uiOpenModal());
    }

    const deleteMonitoringById = (id) =>{
        dispatch( actDeleteMonitoring(id));
    }


    return{
        openModal,
        monitorings,
        setMonitoringSelected,
        deleteMonitoringById
    }
}