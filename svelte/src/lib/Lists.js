export const complaintNature = [
  "Consumer complaints",
  "Police complaints",
  "Landlord-tenant complaints",
  "Employment complaints",
  "Traffic complaints",
  "Corruption complaints",
  "Tax complaints",
  "Education complaints",
  "Medical complaints",
  "Banking and finance complaints",
  "Electricity complaints",
  "Environmental complaints",
  "Telecommunications complaints",
  "Insurance complaints",
  "Housing complaints",
  "Cybercrime complaints",
  "Missing person cases",
  "Domestic violence complaints",
];

export const stationTypes = [
  "District Police Station",
  "City Police Station",
  "Rural Police Station",
  "Traffic Police Station",
  "Women Police Station",
  "Anti-Corruption Bureau Police Station",
  "Cyber Crime Police Station",
  "Economic Offenses Police Station",
  "Narcotics Police Station",
  "Special Branch Police Station",
];

export const districts = [
  "Alappuzha",
  "Ernakulam",
  "Idukki",
  "Kannur",
  "Kasaragod",
  "Kollam",
  "Kottayam",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Pathanamthitta",
  "Thiruvananthapuram",
  "Thrissur",
  "Wayanad",
];

export const getPoliceStation = (districtName) => {
  const district = policeStations.find((d) => d.district === districtName);
  return district ? district.stations : [];
};

const policeStations = [
  {
    district: "Alappuzha",
    stations: [
      "Alappuzha North",
      "Alappuzha South",
      "Ambalappuzha",
      "Aroor",
      "Chengannur",
      "Cherthala",
      "Haripad",
      "Kayamkulam",
      "Kuttanad",
      "Mannar",
      "Mavelikkara",
      "Pandalam",
      "Pattanakkad",
      "Thanneermukkom",
    ],
  },
  {
    district: "Ernakulam",
    stations: [
      "Alangad",
      "Aluva",
      "Angamaly",
      "Chellanam",
      "Cheranalloor",
      "Chottanikkara",
      "Edappally",
      "Elamakkara",
      "Ernakulam Central",
      "Ernakulam North",
      "Ernakulam South",
      "Fort Kochi",
      "Kalamassery",
      "Kanayannur",
      "Kochi",
      "Koothattukulam",
      "Kunnathunad",
      "Maradu",
      "Mattancherry",
      "Muvattupuzha",
      "Nedumbassery",
      "North Paravur",
      "Palluruthy",
      "Perumbavoor",
      "Piravom",
      "Thiruvankulam",
      "Thrikkakara",
      "Thrippunithura",
      "Vadakkekara",
    ],
  },
  {
    district: "Idukki",
    stations: [
      "Adimali",
      "Chinnakanal",
      "Devikulam",
      "Elappara",
      "Idukki",
      "Kattappana",
      "Munnar",
      "Nedumkandam",
      "Pampadumpara",
      "Peermade",
      "Thodupuzha",
      "Udumbanchola",
    ],
  },
  {
    district: "Kannur",
    stations: [
      "Iritty",
      "Kannur City",
      "Kannur Rural",
      "Kuthuparamba",
      "Mattannur",
      "Nadapuram",
      "Panoor",
      "Payyannur",
      "Taliparamba",
      "Thalassery",
    ],
  },
  {
    district: "Kasaragod",
    stations: [
      "Badiadka",
      "Bekal",
      "Chandera",
      "Hosdurg",
      "Kanhangad",
      "Kasaragod",
      "Kumbla",
      "Manjeshwaram",
      "Meenja",
      "Muliyar",
      "Nileshwaram",
      "Pallikkara",
      "Paivalike",
      "Trikkaripur",
    ],
  },
  {
    district: "Kollam",
    stations: [
      "Chathannoor",
      "Chavara",
      "Kadakkal",
      "Karunagappally",
      "Kollam City",
      "Kollam Rural",
      "Kottarakkara",
      "Kundara",
      "Kulathupuzha",
      "Mayyanad",
      "Punalur",
      "Sakthikulangara",
    ],
  },
  {
    district: "Kottayam",
    stations: [
      "Changanassery",
      "Erattupetta",
      "Kanjirappally",
      "Kottayam East",
      "Kottayam West",
      "Kuravilangad",
      "Pala",
      "Perumbaikad",
      "Vaikom",
    ],
  },
  {
    district: "Malappuram",
    stations: [
      "Areacode",
      "Edavannappara",
      "Edappal",
      "Kalikavu",
      "Karipur",
      "Kondotty",
      "Malappuram",
      "Manjeri",
      "Nilambur",
      "Pandikkad",
      "Parappanangadi",
      "Perinthalmanna",
      "Ponnani",
      "Tanur",
      "Tirur",
      "Valanchery",
      "Wandoor",
    ],
  },
  {
    district: "Palakkad",
    stations: [
      "Alathur",
      "Cherpulassery",
      "Kongad",
      "Mannarkkad",
      "Nemmara",
      "Ottappalam",
      "Palakkad",
      "Pattambi",
      "Shoranur",
      "Thrithala",
    ],
  },
  {
    district: "Pathanamthitta",
    stations: [
      "Adoor",
      "Kadambanad",
      "Kalanjoor",
      "Konni",
      "Kozhencherry",
      "Mallapally",
      "Muloor",
      "Pathanamthitta",
      "Ranni",
      "Thiruvalla",
    ],
  },
  {
    district: "Thiruvananthapuram",
    stations: [
      "Attingal",
      "Kallambalam",
      "Kanakakunnu",
      "Kattakkada",
      "Kilimanoor",
      "Kovalam",
      "Neyyattinkara",
      "Pothencode",
      "Sarkara",
      "Varkala",
      "Vattappara",
      "Vizhinjam",
    ],
  },
  {
    district: "Thrissur",
    stations: [
      "Chalakudy",
      "Chavakkad",
      "Guruvayur",
      "Irinjalakuda",
      "Kodungallur",
      "Kunnamkulam",
      "Mala",
      "Mannuthy",
      "Nadathara",
      "Ollur",
      "Pavaratty",
      "Puthukkad",
      "Thrissur City",
      "Thrissur Rural",
      "Vadanappally",
      "Wadakkanchery",
    ],
  },
];
