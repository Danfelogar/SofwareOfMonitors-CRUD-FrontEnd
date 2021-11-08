import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { monitorsActions } from "../actions/monitors";
import { uiOpenModal } from "../actions/ui";


export const useMonitorsTable = () =>{
    const { actGetMonitors,actDeleteMonitor,actSetMonitorSelected,actClearMonitorSelected } = monitorsActions();

    const monitors = useSelector(state => state.monitors.data)

    const dispatch = useDispatch();

    const openModal = () =>{
        dispatch(actClearMonitorSelected());
        dispatch(uiOpenModal());
    };

    useEffect(() => {
        dispatch(actGetMonitors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setMonitorSelected = (monitor) =>{
        dispatch(actSetMonitorSelected(monitor));
        dispatch(uiOpenModal());
    }

    const deleteMonitorById = (id) =>{
        dispatch( actDeleteMonitor(id));
    }


    return{
        openModal,
        monitors,
        setMonitorSelected,
        deleteMonitorById
    }
}