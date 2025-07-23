import React from 'react';
import DataTable from './DataTable';
import { hospitals } from '../data/hospitals';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Hospital Name' },
  { field: 'email', headerName: 'Email' },
  { field: 'contact', headerName: 'Contact' },
];

export default function HospitalTable() {
  return <DataTable columns={columns} rows={hospitals} />;
}