import React from 'react';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';
import { useModalAddMonitoring } from '../hooks/useModalAddMonitoring';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

export const ModalAddMonitoring = () => {

    const { modalOpen, closeModal,handleGetForm, values,handleInputChange,matter,assignedMonitor,date,classroom, isFormForCreate } = useModalAddMonitoring();

    return (
        <div>
            <Modal
            isOpen={ modalOpen }
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            {
                isFormForCreate()
                    ?<h1> Create New Monitoring </h1>
                    :<h1> Edit Monitoring</h1>
            }
            <form onSubmit={ (e)=>handleGetForm(e,values) } >
                <div className="form-group">
                    <label>Matter</label>
                    <input
                    type="text"
                    className="form-control" placeholder="Enter the matter to be taught"
                    name="matter"
                    onChange={ handleInputChange }
                    value={ matter }
                    />
                </div>
                <div className="form-group">
                    <label>Assigned Monitor</label>
                    <input
                    type="text"
                    className="form-control" placeholder="Enter the full name of the monitor"
                    name="assignedMonitor"
                    onChange={ handleInputChange }
                    value={ assignedMonitor }
                    />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input
                    type="date"
                    className="form-control"
                    name="date"
                    onChange={ handleInputChange }
                    value={ date }
                    />
                </div>
                <div className="form-group">
                    <label>Classroom</label>
                    <input
                    type="text"
                    className="form-control" placeholder='Enter the classroom: example "101a"'
                    name="classroom"
                    onChange={ handleInputChange }
                    value={ classroom }
                    />
                </div>
                    <button type="submit" className="btn btn-primary"> <FontAwesomeIcon icon={faSave} /> Save Changes </button>
                </form>
            </Modal>
        </div>
    );
}