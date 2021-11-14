//React imports
import React from 'react';
//Lodash imports
import _ from "lodash/fp";
//Form imports
import {useForm} from "react-hook-form";
//Material UI imports
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const StudentFormDialog = (props) => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        props.handleSubmit(data);
    };

    return (
        // <Dialog fullWidth={true} open={props.open} onClose={props.handleClose} >
        //     <DialogTitle id="form-dialog-title">Routine Management System </DialogTitle>
        //     <DialogContent>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        inputRef={register({required: true})}
                        name="id"
                        autoFocus
                        margin="dense"
                        id="id"
                        label="Student Id"
                        type="text"
                        fullWidth
                        defaultValue={props.selected.id}
                        disabled={!!props.selected.id}
                    />
                    {_.get("id.type", errors) === "required" && (
                        <p className="error">This field is required</p>
                    )}
                    <TextField
                        inputRef={register({required: true})}
                        name="password"
                        margin="dense"
                        id="password"
                        label="Password"
                        type="text"
                        fullWidth
                        defaultValue={props.selected.password}
                    />
                    {_.get("password.type", errors) === "required" && (
                        <p className="error">This field is required</p>
                    )}
                    <TextField
                        inputRef={register({required: true})}
                        name="confpassword"
                        margin="dense"
                        id="confpassword"
                        label="Confirm Password"
                        type="text"
                        fullWidth
                        defaultValue={props.selected.confpassword}
                    />
                    {_.get("confpassword.type", errors) === "required" && (
                        <p>This field is required</p>
                    )}

                    <TextField
                        inputRef={register({required: true})}
                        name="sname"
                        margin="dense"
                        id="sname"
                        label="Student Name"
                        type="text"
                        fullWidth
                        defaultValue={props.selected.sname}
                    />
                    {_.get("sname.type", errors) === "required" && (
                        <p>This field is required</p>
                    )}

                    <TextField
                        inputRef={register({required: true})}
                        name="rollno"
                        margin="dense"
                        id="rollno"
                        label="Roll Number"
                        type="text"
                        fullWidth
                        defaultValue={props.selected.rollno}
                    />
                    {_.get("rollno.type", errors) === "required" && (
                        <p>This field is required</p>
                    )}

                    <TextField
                        inputRef={register({required: true})}
                        name="sec"
                        margin="dense"
                        id="sec"
                        label="Section"
                        type="text"
                        fullWidth
                        defaultValue={props.selected.sec}
                    />
                    {_.get("rollno.type", errors) === "required" && (
                        <p>This field is required</p>
                    )}

                    {/* <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button> */}
                    <Button type="submit" color="primary">
                        Submit
                    </Button>
                </form>
                </div>
        //     </DialogContent>
        // </Dialog>
    );
};

export default StudentFormDialog;
