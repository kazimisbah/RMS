//React imports
import React from 'react';
//Router imports
import {Redirect, Router} from "@reach/router";
//Local imports
import StudentList from "./components/student-list.component";
import StudentDetails from "./components/student-details.component";
import TimeTable from './components/timeTable';
import Login from './components/login';

const App = () => {
    return (
        <div>
            <div>
                <Router>
                    <StudentList path="students"/>
                    <StudentDetails path="students/:id"/>
                    <TimeTable path="timetable" />
                    <Login path ="login"/>
                    <Redirect from="/" to="/login" default noThrow/>
                </Router>
            </div>
        </div>
    );
};

export default App;
