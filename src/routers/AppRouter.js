import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { MonitoringsTable } from '../components/MonitoringsTable';
import { MonitorsTable } from '../components/MonitorsTable';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
                <Switch>
                    <Route exact path="/" component={ MonitorsTable }
                    />
                    <Route exact path="/monitorings" component={ MonitoringsTable } />
                    <Redirect to="/" />
                </Switch>
            </Router>
    )
}
