import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import '../css/DB_Table.css'

function createData(name, ID, Phone, Email, Action) {
  return { name, ID, Phone, Email, Action };
}

const rows = [
  createData("Ram", 18908424, "9818035087", "example@gmail.com"),
  createData("Ram", 18908424, "9818035087", "example@gmail.com"),
  createData("Ram", 18908424, "9818035087", "example@gmail.com"),
  createData("Ram", 18908421, "9818035087", "example@gmail.com"),
];


export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Users</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Phone Number</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.ID}</TableCell>
                  <TableCell align="left">{row.Phone}</TableCell>
                  <TableCell align="left">
                    <span className="status">{row.Email}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Delete</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}