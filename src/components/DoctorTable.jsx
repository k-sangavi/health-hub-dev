import React from 'react';
import DataTable from './DataTable';
import { doctors } from '../data/doctors';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'hospitalId', headerName: 'Hospital ID' },
  { field: 'name', headerName: 'Doctor Name' },
  { field: 'speciality', headerName: 'Speciality' },
  { field: 'availability', headerName: 'Availability' },
  { field: 'consultingTime', headerName: 'Consulting Time' },
];

export default function DoctorTable() {
  return <DataTable columns={columns} rows={doctors} />;
}


// import React, { useState } from 'react';
// import DataTable from './DataTable';
// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
// } from '@tanstack/react-query';
// import axios from 'axios';
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   IconButton,
// } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';

// const columns = [
//   { field: 'id', headerName: 'ID' },
//   { field: 'hospitalId', headerName: 'Hospital ID' },
//   { field: 'name', headerName: 'Doctor Name' },
//   { field: 'speciality', headerName: 'Speciality' },
//   { field: 'availability', headerName: 'Availability' },
//   { field: 'consultingTime', headerName: 'Consulting Time' },
//   {
//     field: 'actions',
//     headerName: 'Actions',
//     renderCell: (params) => params.value,
//   },
// ];

// function DoctorForm({ open, onClose, onSubmit, initialData }) {
//   const [form, setForm] = useState(
//     initialData || {
//       hospitalId: '',
//       name: '',
//       speciality: '',
//       availability: '',
//       consultingTime: '',
//     }
//   );

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>{initialData ? 'Edit Doctor' : 'Add Doctor'}</DialogTitle>
//       <DialogContent>
//         <TextField
//           margin="dense"
//           label="Hospital ID"
//           name="hospitalId"
//           value={form.hospitalId}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           margin="dense"
//           label="Doctor Name"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           margin="dense"
//           label="Speciality"
//           name="speciality"
//           value={form.speciality}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           margin="dense"
//           label="Availability"
//           name="availability"
//           value={form.availability}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           margin="dense"
//           label="Consulting Time"
//           name="consultingTime"
//           value={form.consultingTime}
//           onChange={handleChange}
//           fullWidth
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button
//           variant="contained"
//           onClick={() => onSubmit(form)}
//         >
//           {initialData ? 'Update' : 'Add'}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

// export default function DoctorTable() {
//   const queryClient = useQueryClient();
//   const [formOpen, setFormOpen] = useState(false);
//   const [editData, setEditData] = useState(null);

//   // Fetch doctors
//   const { data: doctors = [], isLoading } = useQuery({
//     queryKey: ['doctors'],
//     queryFn: async () => {
//       const res = await axios.get('/api/doctors');
//       return res.data;
//     },
//   });

//   // Add doctor
//   const addMutation = useMutation({
//     mutationFn: (newDoctor) => axios.post('/api/doctors', newDoctor),
//     onSuccess: () => {
//       queryClient.invalidateQueries(['doctors']);
//       setFormOpen(false);
//     },
//   });

//   // Edit doctor
//   const editMutation = useMutation({
//     mutationFn: (doctor) => axios.put(`/api/doctors/${doctor.id}`, doctor),
//     onSuccess: () => {
//       queryClient.invalidateQueries(['doctors']);
//       setFormOpen(false);
//       setEditData(null);
//     },
//   });

//   // Delete doctor
//   const deleteMutation = useMutation({
//     mutationFn: (id) => axios.delete(`/api/doctors/${id}`),
//     onSuccess: () => {
//       queryClient.invalidateQueries(['doctors']);
//     },
//   });

//   // Handle add/edit
//   const handleSubmit = (form) => {
//     if (editData) {
//       editMutation.mutate({ ...editData, ...form });
//     } else {
//       addMutation.mutate(form);
//     }
//   };

//   // Render actions
//   const rows = doctors.map((row) => ({
//     ...row,
//     actions: (
//       <>
//         <IconButton
//           color="primary"
//           onClick={() => {
//             setEditData(row);
//             setFormOpen(true);
//           }}
//         >
//           <EditIcon />
//         </IconButton>
//         <IconButton
//           color="error"
//           onClick={() => deleteMutation.mutate(row.id)}
//         >
//           <DeleteIcon />
//         </IconButton>
//       </>
//     ),
//   }));

//   return (
//     <>
//       <Button
//         variant="contained"
//         startIcon={<AddIcon />}
//         sx={{ mb: 2 }}
//         onClick={() => {
//           setEditData(null);
//           setFormOpen(true);
//         }}
//       >
//         Add Doctor
//       </Button>
//       <DataTable columns={columns} rows={rows} loading={isLoading} />
//       <DoctorForm
//         open={formOpen}
//         onClose={() => {
//           setFormOpen(false);
//           setEditData(null);
//         }}
//         onSubmit={handleSubmit}
//         initialData={editData}
//       />
//     </>
//   );
// }