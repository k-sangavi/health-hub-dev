// import * as React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// export default function DataTable({ columns, rows }) {zx
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             {columns.map((col) => (
//               <TableCell key={col.field}>{col.headerName}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, idx) => (
//             <TableRow key={idx}>
//               {columns.map((col) => (
//                 <TableCell key={col.field}>{row[col.field]}</TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function DataTable({ columns, rows }) {
  const [search, setSearch] = React.useState("");
  const [filterCol, setFilterCol] = React.useState("");
  const [filterVal, setFilterVal] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Filter and search logic
  const filteredRows = rows.filter((row) => {
    // Search
    const matchesSearch = search ? columns.some((col) => String(row[col.field]).toLowerCase().includes(search.toLowerCase())) : true;
    // Filter
    const matchesFilter = filterCol && filterVal ? String(row[filterCol]) === String(filterVal) : true;
    return matchesSearch && matchesFilter;
  });

  // Pagination logic
  const paginatedRows = filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Unique values for filter dropdown
  const filterOptions = filterCol ? [...new Set(rows.map((row) => row[filterCol]))] : [];

  return (
    <Paper sx={{ padding: 2 }}>
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
        />
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Filter Column</InputLabel>
          <Select
            label="Filter Column"
            value={filterCol}
            onChange={(e) => {
              setFilterCol(e.target.value);
              setFilterVal("");
              setPage(0);
            }}
          >
            <MenuItem value="">None</MenuItem>
            {columns.map((col) => (
              <MenuItem key={col.field} value={col.field}>
                {col.headerName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {filterCol && (
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Filter Value</InputLabel>
            <Select
              label="Filter Value"
              value={filterVal}
              onChange={(e) => {
                setFilterVal(e.target.value);
                setPage(0);
              }}
            >
              <MenuItem value="">All</MenuItem>
              {filterOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.field}>{col.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row, idx) => (
              <TableRow key={idx}>
                {columns.map((col) => (
                  <TableCell key={col.field}>{row[col.field]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredRows.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 20, 50]}
      />
    </Paper>
  );
}
