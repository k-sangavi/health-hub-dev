const patientNames = [
  "Melisse Iacopini", "Flynn Bloyes", "Seumas Minigo", "Georgi Krauss", "Luis Hoffman",
  "Morten Gazzard", "Bret Kennifeck", "Romain MacMarcuis", "Beverlee Tortoishell", "Tabbie Lattimore",
  "Isabella McClay", "Guendolen Kiljan", "Menard McGray", "Benni Cattach", "Burl Condit",
  "Carla Cadney", "Brien Print", "Osmund Frend", "Vance Boate", "Valery Mitchiner",
  "Fairlie McRobbie", "Evonne Tunny", "Bronnie Brayford", "Gradeigh Thams", "Ameline White",
  "Gwynne Vanyard", "Shayna Watling", "Junina Oldacres", "Mathilda Edling", "Angus Jodlowski",
  "Moria Cardozo", "Josephina Churcher", "Franklyn Coy", "Sela Lensch", "Jordan Jebb",
  "Trudi Sings", "Devin Hurring", "Bill Gulberg", "Powell Mainston", "Lauritz McKain",
  "Bili Gurnett", "Xena McNeilly", "Morley Colmer", "Roda Baskerfield", "Charlena Turmel",
  "Chrystel Christophle", "Gennifer Dreng", "Willey Keenleyside", "Cull Huish", "Corilla Aleevy",
  "Val Halhead", "Denice Rosendorf", "Artemas Bleue", "Lelah Koche", "Bella Boissier",
  "Flor Brick", "Bil Labuschagne", "Doralynn Libermore", "Mandel Felderer", "Rayna Ockendon",
  "Carlyn Mulford", "Cheston Wayte", "Arin Tivers", "Khalil Workman", "Jo-anne Embra",
  "Ashia Nial", "Oliviero Horsley", "Winnifred Baly", "Christy Fearnyough", "Jack Riccardini",
  "Ruthe Cathery", "Kitty Grist", "Kendell Whitewood", "Anny McCahey", "Phedra Kempton",
  "Lavena Avrahamy", "Claus Campanelle", "Ruy Hulke", "Olivette Evens", "Skippie Cissen",
  "Domini Meale", "Tucky Syde", "Audrie Kobes", "Ichabod Newman", "Reuven Cardenoso",
  "Benedicta Reymers", "Emmalynne Pues", "Muhammad Wittman", "Panchito Halloway", "Mariquilla Purselowe",
  "Nora Hupe", "Prudy Adolfson", "Halette Guidini", "Nanci Attrie", "Farlay Trickey",
  "Bo Newcome", "Saunderson Allot", "Hilton Howchin", "Regine Calley", "Courtnay Bate"
  // ...add more names if needed for 250 patients
];

export const patients = Array.from({ length: 250 }, (_, i) => ({
  id: i + 1,
  name: patientNames[i % patientNames.length],
  age: 20 + ((i * 7) % 50), // more varied ages
  mobile: `98765${(3200 + i).toString().padStart(4, "0")}`,
  healthIssues: ["Diabetes", "Hypertension", "Asthma", "Allergy", "None"][i % 5],
  previousReports: `Report_${i + 1}.pdf`,
  appointmentDate: `2025-07-${(((i * 3) % 28) + 1).toString().padStart(2, "0")}`,
  appointmentTime: `${(8 + (i % 10)).toString().padStart(2, "0")}:00`
}));