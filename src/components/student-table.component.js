//React imports
import React from "react";
//Router imports
import {Link} from "@reach/router";
//Material UI imports
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';


export const StudentTable = (props) => {
    window.Students = props.rows
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Roll</TableCell>
                        <TableCell>Section</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <Link to={`/students/${row.id}`}>
                                    {row.sname}
                                </Link>
                            </TableCell>
                            <TableCell>{row.rollno}</TableCell>
                            <TableCell>{row.sec}</TableCell>

                            <TableCell>
                                {/* <EditIcon onClick={() => props.openEditModal(row)}/> */}
                                <DeleteIcon onClick={() => props.onDelete(row)}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
