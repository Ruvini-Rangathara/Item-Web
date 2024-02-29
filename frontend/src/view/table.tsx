import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    code: string,
    description: string,
    unitPrice: number,
    qtyOnHand: number
) {
    return {code, description, unitPrice, qtyOnHand};
}

const rows = [
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
    createData('P001', "Keeri Samba", 200.0, 24),
];

export default function DenseTable() {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Item Code</strong></TableCell>
                            <TableCell align="right"><strong>Description</strong></TableCell>
                            <TableCell align="right"><strong>Unit Price&nbsp;(LKR)</strong></TableCell>
                            <TableCell align="right"><strong>Qty On Hand&nbsp;(unit)</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.code}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.code}
                                </TableCell>
                                <TableCell align="right">{row.description}</TableCell>
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