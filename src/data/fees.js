export const fees = Array.from({ length: 50}, (_, i) => ({
  id: i + 1,
  hospitalId: (i % 50) + 1,
  consultingFees: 200 + (i % 5) * 50,
  scanningFees: 500 + (i % 3) * 100,
  pharmacyBill: 100 + (i % 10) * 20,
  pharmacyFees: 50 + (i % 4) * 10,
  nextCheckup: `2025-07-${(i % 28) + 1} ${(9 + (i % 8))}:00`,
}));