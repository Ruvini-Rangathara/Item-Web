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
import {MdOutlineEdit} from "react-icons/md";
import "/src/App.css";


export default function DenseTable() {
    const [items, setItems] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue);
        loadMyItems(searchTextValue);
    };

    useEffect(() => {
        loadMyItems();
    }, [searchText]);


    function createData(
        code: string,
        description: string,
        unitPrice: number,
        qtyOnHand: number
    ) {
        return {code, description, unitPrice, qtyOnHand};
    }

    const loadMyAllItems = () => {
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

    const loadMyItems = () => {
        if(searchText === ''){
            loadMyAllItems();
        }else{
            const url = "http://localhost:8080/api/item/byDescription/"+searchText;
            fetch(url, {
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
        }
    };
    const handleSearch = () => {
        loadMyItems();
    };

    return (
        <div>
            <div className={'flex mb-2 justify-between pt-4'}>
                <div className={'w-[80%]'}>
                    <input type={'text'} placeholder={'Search...'}
                           className={'w-[35%] h-[27px] border rounded-lg pl-4 hover:border-gray-500 focus:border-gray-500 focus:outline-none'}
                           value={searchText}
                           onChange={handleSearchTextChange}/>
                    <button className={'w-[12%] h-[25px] bg-[#87C331] text-white rounded-lg ml-4'}
                            onClick={handleSearch}>Search
                    </button>
                </div>
                <button className={'w-[30px] h-[25px] bg-[gray] text-white rounded-md ml-4 mt-[5px]'}>
                    <MdOutlineEdit className={'w-[20px] h-[20px] m-auto'}/>
                </button>
            </div>

            <div style={{ overflow: 'auto', height:"60vh"}} className={'overflow-auto'}>
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
        </div>
    );
}