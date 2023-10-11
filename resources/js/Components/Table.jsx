import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import TableModal from "./TableModal";
import { Button } from "@mui/material";

const TableComponent = () => {
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    // Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/data")
            .then((response) => {
                setData(response.data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const columns = React.useMemo(
        () => [
            { Header: "ID", accessor: "id" },
            { Header: "Group", accessor: "filegroup" },
            { Header: "Filename", accessor: "filename" },
            { Header: "Description", accessor: "description" },
            { Header: "File Location", accessor: "location" },
            {
                Header: "Actions",
                accessor: "actions",
                Cell: () => (
                    <div className="space-x-5">
                        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Edit
                        </Button>
                        {openModal && <TableModal />}
                        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                        </Button>
                    </div>
                ),
            },
        ],
        []
    );

    const handleDelete = () => {
        // alert("Delete");
        alert("here here");
    };
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <table {...getTableProps()} className="border-collapse border w-full">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr
                        {...headerGroup.getHeaderGroupProps()}
                        className="bg-blue-300"
                    >
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps()}
                                className="border p-2"
                            >
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td
                                    {...cell.getCellProps()}
                                    className="border p-2 text-center"
                                >
                                    {cell.render("Cell")}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TableComponent;
