import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import Swal from "sweetalert2";


export default function DenseTable() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadMyItems();
    }, []);

    function createData(
        code: string,
        description: string,
        unitPrice: number,
        qtyOnHand: number
    ) {
        return {code, description, unitPrice, qtyOnHand};
    }

    const loadMyItems = () => {
        fetch("http://localhost:8080/api/item", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                console.log("data.content : ", data.content)
                const itemData = data.content.map(item =>
                    createData(item.code, item.description, item.unitPrice, item.qtyOnHand));
                setItems(itemData);
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: "There was an error fetching items."
                });
            });
    };




    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Item Code</strong></TableCell>
                            <TableCell align="left"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Description</strong></TableCell>
                            <TableCell align="right"><strong>Unit Price&nbsp;(LKR)</strong></TableCell>
                            <TableCell align="right"><strong>Qty On Hand&nbsp;(unit)</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((row) => (
                            <TableRow
                                key={row.code}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.code}
                                </TableCell>
                                <TableCell align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {row.description}</TableCell>
                                <TableCell align="right">{row.unitPrice}</TableCell>
                                <TableCell align="right">{row.qtyOnHand}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}