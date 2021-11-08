import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ModalAddMonitoring } from './ModalAddMonitoring';
import { useMonitoringsTable } from '../hooks/useMonitoringsTable';


export const MonitoringsTable = () => {

    const{ openModal,monitorings,setMonitoringSelected,deleteMonitoringById } = useMonitoringsTable();

    return (
        <div>
            <div style={{'padding':'0 5px'}}>
                <button
                type="button"
                className="btn btn-secondary btn-lg btn-block"
                style={{'margin':'10px 0'}}
                onClick={ openModal }
                >
                Add a new monitoring</button>
            </div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Matter</th>
                        <th scope="col">Assigned Monitor</th>
                        <th scope="col">Date</th>
                        <th scope="col">Classroom</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    monitorings.map((monitoring,idx)=>{
                        return(
                            <tr key={ idx }>
                                <th scope="row">{monitoring.id}</th>
                                <td>{monitoring.matter}</td>
                                <td>{monitoring.assignedMonitor}</td>
                                <td>{monitoring.date}</td>
                                <td>{monitoring.classroom}</td>
                                <td>
                            <button type="button"
                            className="btn btn-info"
                            style={{'margin':'3px'}}
                            onClick={ ()=>setMonitoringSelected(monitoring) }
                            >
                            <FontAwesomeIcon icon={faEdit} /> Edit</button>
                            <button
                            type="button"
                            className="btn btn-danger"
                            style={{'margin':'3px'}}
                            onClick={ ()=>deleteMonitoringById(monitoring.id) }
                            ><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <ModalAddMonitoring/>
        </div>
    )
}
