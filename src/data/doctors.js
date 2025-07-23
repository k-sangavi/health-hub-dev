const doctorNames = [
  "Cole Yurkov", "Cori Delong", "Bird Lempke", "Jorie Yarmouth", "Maxie Rabbatts",
  "Simone Kittley", "Sanders Lovart", "Arnaldo Cammidge", "Abra Enriquez", "Salli Sheather",
  "Brynna Zettler", "Dulsea Blair", "Bradly Popland", "Jocelyn Benfell", "Edgar Philson",
  "Corinna McCotter", "Ariadne Insko", "Worth Scurlock", "Aleece Nutty", "Cortney Elphinston",
  "Rubetta Manuel", "Bear Tidmarsh", "Marya Troctor", "Archer Dudmesh", "Rora Thatcher",
  "Vale Mar", "Ladonna Reap", "Brigid Hassall", "Ario Segrott", "Lusa Morrallee",
  "Dicky Trayes", "Sanderson Mebius", "Toby Bampford", "Virgil Sargeaunt", "Raffarty Carstairs",
  "Merrill Mathivet", "Josepha Lawtie", "Bobby Eslie", "Erda Malarkey", "Twila Ballham",
  "Pearla Dovidian", "Marleah Rogier", "Micheline Rantoul", "Gayler Tenaunt", "Eloisa Labbey",
  "Halsy Schlagman", "Maridel Denington", "Waverley Huntar", "Almeda Eilles", "Agnella Klossmann",
  "Shaylynn Kitchenside", "Loree Heinel", "Andrei Reiling", "Gabriel Darey", "Harp McWhannel",
  "Orsa Gidley", "Theodora Eddies", "Charleen Petriello", "Chrissie Wife", "Neille Burgum",
  "Frederic Glasby", "Bee Valentim", "Genny Neath", "Jasen Osban", "Jenna Farrall",
  "Franciska Byrne", "Chloette McLagan", "Liam Crichten", "Lorene Frodsam", "Amalee Waliszewski",
  "Emmie Manthorpe", "Marci Clows", "Kittie Pentercost", "Marketa Thow", "Papagena Janoschek",
  "Enrique Gaynesford", "Sam Severn", "Evvy Webben", "Fay Reisin", "Avery Di Matteo",
  "Odelinda Mountcastle", "Bernadina Dallison", "Ambur Adair", "Lennie Braniff", "Quent Epsly",
  "Lilli Jennaway", "Jillene Risebarer", "Elliot Broggetti", "Guillermo Gniewosz", "Marget Raikes",
  "Tait Speerman", "Idalina Neeves", "Alard O'Grogane", "Joelle Albon", "Kendra Elsip",
  "Ursa Vercruysse", "Orion Biggerdike", "Lion Halcro", "Tatiania Harrowing", "Reinhold Jirak",
  "Johnath Campling", "Andree Gonnely", "Tobin Scotchford", "Gerald McPhillimey", "Olly Merriott",
  "Zara Dybell", "Pru Janatka", "Matelda McIlenna", "Nissie Nobes", "Maure Pankettman",
  "Stern Domange", "Crosby Brookbank", "Prisca Locock", "Garrard Morstatt", "Ermina Peete",
  "Justis Whiteford", "Thedrick Bortolini", "Lauren Betun", "Hashim Clayhill", "Bethina McCrea",
  "Manny Bondy", "Darlene Umbers", "Reinold Edridge", "Caty Hector", "Kellyann Edwards",
  "Inna Purveys", "Cecilla Ettery", "Alane Fass", "Tabby Stops", "Marta Fice",
  "Albie Baulch", "Betta Rutty", "Torrance Tuck", "Valentia Gurdon", "Syman Sebrook",
  "Xenos Folshom", "Lind Debnam", "Ellis Brittin", "Melissa Rosenzwig", "Cherye Duffet",
  "Sammie Polini", "Garvy Elias", "Monro Gobeaux", "Willy Faltskog", "Charis McNea",
  "Neal Bleckly", "Mel Hegges", "Hobey Docharty", "Meghann Stainsby", "Terrel Carloni"
];

const specialities = [
  "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "General"
];

export const doctors = Array.from({ length: 150 }, (_, i) => ({
  id: i + 1,
  hospitalId: (i % 10) + 1,
  name: `Dr. ${doctorNames[i % doctorNames.length]}`,
  speciality: specialities[i % specialities.length],
  availability: i % 2 === 0 ? "Available" : "Unavailable",
  consultingTime: `${9 + (i % 10)}:00 - ${10 + (i % 10)}:00`
}));