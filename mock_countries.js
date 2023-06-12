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

for(let i = 0; i < countries.length; i++) {
    console.log(`{
        "id": ${i+1},
        "name": "${countries[i]}",
        "flag_url": "https://raw.githubusercontent.com/gert-janvercauteren/mockapi/main/flags/esc_${countries[i].replace(" ", "").toLowerCase()}_rgb-heart.png"
      },`)
}