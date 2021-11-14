//React imports
import React, {useEffect, useState} from "react";
//Material UI imports
import Button from "@material-ui/core/Button";
//Local imports
import {createStudent, getAllStudents, removeStudent, updateStudent} from "../services/routine-http.service";
import StudentFormDialog from "./student-form-dialog.component";
import {StudentTable} from "./student-table.component";
import {AlertBar} from "./alert-bar.component";
import {Link} from "@reach/router";

import './component.css'

const StudentList = () => {
    const [rows, setRows] = useState([]);
    const [alertMeta, setAlertMeta] = useState({severity: '', message: ''});
    const [isCountryListManipulated, setCountryListManipulated] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(true);
    const [isAlertOpen, setAlertOpen] = useState(false);
    const [selected, setSelected] = useState({id: '', name: '', capital: ''});

    useEffect(() => {
        getAllStudents().then(res => setRows(res.data));
    }, []);

    useEffect(() => {
        if (isCountryListManipulated) {
            getAllStudents().then(res => setRows(res.data));
        }
        setCountryListManipulated(false);
    }, [isCountryListManipulated]);

    const add = (data) => {
        createStudent(data)
            .then(() => {
                showAlert("success", "Create success");
                closeDialog();
            })
            .catch(() => showAlert("error", "Create failed"));
    };

    const showAlert = (severity, message) => {
        setCountryListManipulated(true);
        setAlertMeta({severity, message});
        setAlertOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
        setSelected({id: '', name: '', capital: ''});
    };

    const edit = (data) => {
        data.id = selected.id;
        updateStudent(data.id, data)
            .then(() => {
                showAlert("success", "Update success");
                closeDialog();
            })
            .catch(() => showAlert("error", "Update failed"));
    };

    const remove = (row) => {
        removeStudent(row.id)
            .then(() => showAlert("success", "Delete success"))
            .catch(() => showAlert("error", "Delete failed"));
    };

    const openCreateDialog = () => {
        openStudentFormDialog({id: '', name: '', capital: ''});
    };

    const openEditDialog = (row) => {
        openStudentFormDialog(row);
    };

    const openStudentFormDialog = (row) => {
        setDialogOpen(true);
        setSelected(row);
    };

    const handleSubmit = (country) => {
        if (selected.id) {
            edit(country);
        } else {
            add(country);
        }
    };

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };

    return (
        <div className="main-container">
            <div className="heading">School Routine Management</div>

            <div className="view-table">
        <Link to={`/`}>
            Log Out
            </Link>
        </div>
            
        <div className="dash-container">
            <div className="left-container">
            <StudentFormDialog open={true} handleClose={closeDialog} handleSubmit={handleSubmit}
                               selected={selected}/>
            </div>
            <div className="right-container" >
            <StudentTable rows={rows} onDelete={remove} openEditModal={openEditDialog}/>

            </div>
        </div>
       
        
        </div>
    );
};

export default StudentList;
