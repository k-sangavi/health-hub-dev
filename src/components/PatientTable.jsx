import React from 'react';
import DataTable from './DataTable';
import { patients } from '../data/patients';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Patient Name' },
  { field: 'age', headerName: 'Age' },
  { field: 'mobile', headerName: 'Mobile Number' },
  { field: 'healthIssues', headerName: 'Health Issues' },
  { field: 'previousReports', headerName: 'Previous Reports' },
  { field: 'appointmentDate', headerName: 'Appointment Date' },
  { field: 'appointmentTime', headerName: 'Appointment Time' },
];

export default function PatientTable() {
  return <DataTable columns={columns} rows={patients} />;
}