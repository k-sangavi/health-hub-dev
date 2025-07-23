// export const facilities = Array.from({ length: 100 }, (_, i) => ({
//   id: i + 1,
//   name: `Hospital ${i + 1}`,
//   email: `hospital${i + 1}@mail.com`,
//   contact: `98765432${(i % 10).toString().padStart(2, '0')}`,
// }));

export const facilities = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  hospitalId: (i % 10) + 1,
  bedAvailability: i % 3 === 0 ? 'Available' : 'Full',
  scanningFacility: i % 2 === 0 ? 'Yes' : 'No',
  injectionFacility: i % 2 === 1 ? 'Yes' : 'No',
  pharmacyFacility: i % 4 === 0 ? 'Yes' : 'No',
  urineTest: i % 2 === 0 ? 'Available' : 'Not Available',
  bloodTest: i % 3 === 0 ? 'Available' : 'Not Available',
}));