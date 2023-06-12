const countries = [
    "Albania",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Belgium",
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
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "San Marino",
    "Serbia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Ukraine",
    "United Kingdom"
];

for(let i = 0; i < countries.length; i++) {
    console.log(`
    {
        "id": ${i+1},
        "name": "${countries[i]}",
        "flag_url": "https://raw.githubusercontent.com/gert-janvercauteren/mockapi/main/flags/esc_${countries[i].replace(" ", "").toLowerCase()}_rgb-heart.png"
      },
    `)
}