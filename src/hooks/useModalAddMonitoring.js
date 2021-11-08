import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { monitoringsActions } from '../actions/monitorings';
import { uiCloseModal } from '../actions/ui';
import { useForm } from './useForm';

export const  useModalAddMonitoring = () =>{

    const form = useSelector(state => state.monitorings.monitoringSelected);

    const { modalOpen } = useSelector(state => state.ui);

    const [ values, handleInputChange, reset ] = useForm({
        matter:form.matter,
        assignedMonitor:form.assignedMonitor,
        date:form.date,
        classroom:form.classroom
    });
    const { matter,assignedMonitor,date,classroom } = values;

    const dispatch = useDispatch();

    const { actCreateMonitoring, actUpdateMonitoring } = monitoringsActions();

    useEffect(() => {
        reset( form )
    }, [form, reset]);

    const isFormForCreate= () =>{
        return !form.id
        ? true
        : false
    }

    const closeModal = () =>{
        dispatch( uiCloseModal() );
    }

    const handleGetForm = (e, values) =>{
        e.preventDefault();
        if( isFormForCreate() ){
            dispatch(actCreateMonitoring({...values}));
        }else{
            dispatch(actUpdateMonitoring({...values,id:form.id}));
        }
    }

    return{
        modalOpen,
        closeModal,
        handleGetForm,
        values,
        handleInputChange,
        matter,
        assignedMonitor,
        date,
        classroom,
        isFormForCreate
    }
}
