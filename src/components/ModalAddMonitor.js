import React from 'react';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';
import { useModalAddMonitor } from '../hooks/useModalAddMonitor';

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

export const ModalAddMonitor = () => {

    const { modalOpen,closeModal,handleGetForm,values,
        handleInputChange,names, lastsNames, academicProgram,semester,identificationCard, contactInformation,isFormForCreate} = useModalAddMonitor();

    return (
        <div>
            <Modal
            isOpen={ modalOpen }
            onRequestClose={ closeModal }
            style={customStyles}
            contentLabel="Example Modal"
            >
            {  isFormForCreate()
                    ?<h1> Create New Monitor </h1>
                    :<h1> Edit Monitor </h1>
            }
            <form onSubmit={ (e)=>handleGetForm(e,values) }  >
                <div className="form-group">
                    <label>Names</label>
                    <input
                    type="text"
                    className="form-control" placeholder="Enter your full name"
                    name="names"
                    onChange={ handleInputChange }
                    value={ names }
                    />
                </div>
                <div className="form-group">
                    <label>Lasts Names</label>
                    <input
                    type="text"
                    className="form-control" placeholder="Enter your full last name"
                    name="lastsNames"
                    onChange={ handleInputChange }
                    value={ lastsNames }
                    />
                </div>
                <div className="form-group">
                    <label>Academic Program</label>
                    <input
                    type="text"
                    className="form-control" placeholder="Enter your academic programe"
                    name="academicProgram"
                    onChange={ handleInputChange }
                    value={ academicProgram }
                    />
                </div>
                <div className="form-group">
                    <label>Semester</label>
                    <input
                    type="number"
                    min="0"
                    className="form-control" placeholder="Enter the semester you are taking"
                    name="semester"
                    onChange={ handleInputChange }
                    value={ semester }
                    />
                </div>
                <div className="form-group">
                    <label>Identification Card</label>
                    <input
                    type="number"
                    min="0"
                    className="form-control" placeholder="Enter the identification number"
                    name="identificationCard"
                    onChange={ handleInputChange }
                    value={ identificationCard }
                    />
                </div>
                <div className="form-group">
                    <label>Contact Information</label>
                    <input
                    type="number"
                    min="0"
                    className="form-control" placeholder="Enter your contact number"
                    name="contactInformation"
                    onChange={ handleInputChange }
                    value={ contactInformation }
                    />
                </div>
                    <button type="submit" className="btn btn-primary"> <FontAwesomeIcon icon={faSave} /> Save Changes </button>
                </form>
            </Modal>
        </div>
    );
}