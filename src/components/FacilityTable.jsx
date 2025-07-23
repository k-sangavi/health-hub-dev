import React from 'react';
import DataTable from './DataTable';
import { facilities } from '../data/facilities';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'hospitalId', headerName: 'Hospital ID' },
  { field: 'bedAvailability', headerName: 'Bed Availability' },
  { field: 'scanningFacility', headerName: 'Scanning Facility' },
  { field: 'injectionFacility', headerName: 'Injection Facility' },
  { field: 'pharmacyFacility', headerName: 'Pharmacy Facility' },
  { field: 'urineTest', headerName: 'Urine Test' },
  { field: 'bloodTest', headerName: 'Blood Test' },
];

export default function FacilityTable() {
  return <DataTable columns={columns} rows={facilities} />;
}