const countries = [
    "Albania",
    "Armenia",
    "Australia",
    "Austria",
    "Croatia",
    "Cyprus",
    "Chechia",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Iceland",
    "Ireland",
    "Israel",
    "Italy",
    "Latvia",
    "Lithuania",
    "Malta",
    "Moldova",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Serbia",
    "Spain",
    "Sweden",
    "Ukraine"
];

const artists = [
    "Albina & Familja Kelmendi",
    "Brunette",
    "Voyager",
    "Teya & Salena",
    "Let 3",
    "Andrew Lambrou",
    "Vesna",
    "Reiley",
    "Alika",
    "Käärijä",
    "La Zarra",
    "Iru",
    "Lord of the Lost",
    "Victor Vernicos",
    "Diljá",
    "Wild Youth",
    "Noa Kirel",
    "Marco Mengoni",
    "Sudden Lights",
    "Monika Linkytė",
    "The Busker",
    "Pasha Parfeni",
    "Alessandra",
    "Blanka",
    "Mimicat",
    "Theodor Andrei",
    "Luke Black",
    "Blanca Paloma",
    "Loreen",
    "TVORCHI"
]

const songs = [

]

for(let i = 0; i < countries.length; i++) {
    console.log(`{
        "id": ${i+1},
        "country_name": "${countries[i]}",
        "artist_name": "${artists[i]}",
        "song_name": "[PLACEHOLDER]",
        "video_id": "[PLACEHOLDER]",
        "flag_url": "https://raw.githubusercontent.com/gert-janvercauteren/mockapi/main/flags/esc_${countries[i].replace(" ", "").toLowerCase()}_rgb-heart.png"
      },`)
}