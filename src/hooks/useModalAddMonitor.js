/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { monitorsActions } from '../actions/monitors';
import { uiCloseModal } from '../actions/ui';
import { useForm } from './useForm';

export const  useModalAddMonitor = () =>{

    const form = useSelector(state => state.monitors.monitorSelected);

    const { modalOpen } = useSelector(state => state.ui);

    const [ values, handleInputChange, reset ] = useForm({
        names: form.names,
        lastsNames: form.lastNames,
        academicProgram: form.academicProgram,
        semester: form.semester,
        identificationCard: form.identificationCard,
        contactInformation: form.contactInformation
    });
    const { names, lastsNames, academicProgram,semester,identificationCard, contactInformation } = values;

    const dispatch = useDispatch();

    const { actCreateMonitor, actUpdateMonitor } = monitorsActions();

    useEffect(() => {
        reset( form )
    }, [form]);

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
            dispatch(actCreateMonitor({...values}));
        }else{
            dispatch(actUpdateMonitor({...values,id:form.id}));
        }
    }

    return{
        modalOpen,
        closeModal,
        handleGetForm,
        values,
        handleInputChange,
        names,
        lastsNames,
        academicProgram,semester,
        identificationCard,
        contactInformation,
        isFormForCreate
    }
}
