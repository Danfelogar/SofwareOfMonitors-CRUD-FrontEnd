import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ModalAddMonitor } from './ModalAddMonitor';
import { useMonitorsTable } from '../hooks/useMontiorsTable';

export const MonitorsTable = () => {

    const { openModal,monitors,setMonitorSelected, deleteMonitorById } = useMonitorsTable();

    return (
    <div>
        <div style={{'padding':'0 5px'}}>
            <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            style={{'margin':'10px 0'}}
            onClick={ openModal }
            >
            Add a new monitor</button>
        </div>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Names</th>
                    <th scope="col">Lasts Names</th>
                    <th scope="col">Academic Program</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Identification Card</th>
                    <th scope="col">Contact Information</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    monitors.map((monitor,idx)=>{
                        return(
                            <tr key={ idx }>
                                <th scope="row">{monitor.id}</th>
                                <td>{monitor.names}</td>
                                <td>{monitor.lastsNames}</td>
                                <td>{monitor.academicProgram}</td>
                                <td>{monitor.semester}</td>
                                <td>{monitor.identificationCard}</td>
                                <td>{monitor.contactInformation}</td>
                                <td>
                            <button type="button"
                            className="btn btn-info"
                            style={{'margin':'3px'}}
                            onClick={ ()=>setMonitorSelected(monitor) }
                            >
                            <FontAwesomeIcon icon={faEdit} /> Edit</button>
                            <button
                            type="button"
                            className="btn btn-danger"
                            style={{'margin':'3px'}}
                            onClick={ ()=>deleteMonitorById(monitor.id) }
                            ><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <ModalAddMonitor/>
    </div>
    )
}
