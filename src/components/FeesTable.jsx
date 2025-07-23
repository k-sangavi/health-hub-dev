import React from 'react';
import DataTable from './DataTable';
import { fees } from '../data/fees';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'hospitalId', headerName: 'Hospital ID' },
  { field: 'consultingFees', headerName: 'Consulting Fees' },
  { field: 'scanningFees', headerName: 'Scanning Fees' },
  { field: 'pharmacyBill', headerName: 'Pharmacy Bill' },
  { field: 'pharmacyFees', headerName: 'Pharmacy Fees' },
  { field: 'nextCheckup', headerName: 'Next Checkup Appointment' },
];

export default function FeesTable() {
  return <DataTable columns={columns} rows={fees} />;
}