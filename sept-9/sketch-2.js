// copied from https://editor.p5js.org/ahaha333/sketches/uhUQJ6py5

let nations = 
    ["Abkhazia", "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua  ", "Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "the Bahamas ", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire", "Bosnia", "Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China ", "Taiwan", "Christmas Island", "Cocos Islands", "Colombia", "Comoros", "the DRC", "the Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "England", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "European Union", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "the French Southern Territories", "Gabon", "the Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island", "McDonald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Côte d'Ivoire", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "South Korea", "North Korea", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "the Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Macedonia", "Northern Ireland", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "the Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russia", "Rwanda", "Saba", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts ", "Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre ", "Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "São Tomé and Príncipe", "Saudi Arabia", "Scotland", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Eustatius", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "Somaliland", "South Africa", "South Georgia ", "the South Sandwich Islands", "South Ossetia", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad", "Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turk Islands", "Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "the Emirates", "Britain", "the US", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];

let demonyms = 
    ["Abkhazians", "Afghans", "Åland Islanders", "Albanians", "Algerians", "Andorrans", "Angolans", "Anguillans", "Antarctic residents", "Antiguans", "Barbudans", "Argentines", "Armenians", "Arubans", "Australians", "Austrians", "Azeris", "Bahamians", "Bahrainis", "Bangladeshis", "Barbadians", "Belarusians", "Belgians", "Belizeans", "Beninese", "Bermudians", "Bhutanese", "Bolivians", "Bonaire Dutch", "Bosnians", "Herzegovinians", "Botswanans", "Bouvet Islanders", "Brazilians", "British", "Bruneians", "Bulgarians", "Burkinabès", "Burmese", "Burundians", "Cabo Verdeans", "Cambodians", "Cameroonians", "Canadians", "Caymanians", "Central Africans", "Chadians", "Chileans", "Chinese", "Taiwanese", "Christmas Islanders", "Cocos Islanders", "Colombians", "Comorians", "Congolese", "Congolese", "Cook Islanders", "Costa Ricans", "Croatians", "Cubans", "Curaçaoans", "Cypriots", "Czechs", "Danes", "Djiboutians", "Dominicans", "Dominicans", "Timorese", "Ecuadorians", "Egyptians", "Salvadorans", "English", "Equatoguineans", "Eritreans", "Estonians", "Swazis", "Ethiopians", "Europeans", "Falkland Islanders", "Faroese", "Fijians", "Finns", "French", "French Guianese", "French Polynesians", "French", "Gabonese", "Gambians", "Georgians", "Germans", "Ghanaians", "Gibraltarians", "Greeks", "Greenlanders", "Grenadians", "Guadeloupians", "Guamanians", "Guatemalans", "Channel Islanders", "Guineans", "Bissau-Guineans", "Guyanese", "Haitians", "Heard Islanders", "McDonald Islanders", "Hondurans", "Hongkongers", "Hungarians", "Icelanders", "Indians", "Indonesians", "Iranians", "Iraqis", "Irish", "Manx", "Israelis", "Italians", "Ivorians", "Jamaicans", "Japanese", "Channel Islanders", "Jordanians", "Kazakhs", "Kenyans", "I-Kiribati", "Koreans", "Koreans", "Kosovars", "Kuwaitis", "Kyrgyz", "Laotians", "Latvians", "Lebanese", "Basotho", "Liberians", "Libyans", "Liechtensteiners", "Lithuanians", "Luxembourgers", "Macanese", "Malagasy", "Malawians", "Malaysians", "Maldivians", "Malians", "Maltese", "Marshallese", "Martiniquais", "Mauritanians", "Mauritians", "Mahorans", "Mexicans", "Micronesians", "Moldovans", "Monégasques", "Mongolians", "Montenegrins", "Montserratians", "Moroccans", "Mozambicans", "Myanmars", "Namibians", "Nauruans", "Nepali", "Dutch", "New Caledonians", "New Zealanders", "Nicaraguans", "Nigeriens", "Nigerians", "Niueans", "Norfolk Islanders", "Macedonians", "Northern Irish", "Northern Marianans", "Norwegians", "Omanis", "Pakistanis", "Palauans", "Palestinians", "Panamanians", "Papua New Guineans", "Paraguayans", "Peruvians", "Filipinos", "Pitcairn Islanders", "Poles", "Portuguese", "Puerto Ricans", "Qataris", "Réunionese", "Romanians", "Russians", "Rwandans", "Saba Dutch", "Barthélemois", "Saint Helenians", "Kittitians", "Nevisians", "Saint Lucians", "Saint-Martinois", "Saint-Pierrais", "Miquelonnais", "Saint Vincentians", "Samoans", "Sammarinese", "São Toméans", "Saudis", "Scots", "Senegalese", "Serbs", "Seychellois", "Sierra Leoneans", "Singaporeans", "Statians", "Sint Maarteners", "Slovaks", "Slovenes", "Solomon Islanders", "Somalis", "Somalilanders", "South Africans", "South Georgia Islanders", "South Sandwich Islanders", "South Ossetians", "South Sudanese", "Spaniards", "Sri Lankans", "Sudanese", "Surinamers", "Svalbard residents", "Swazis", "Swedes", "Swiss", "Syrians", "Tajiks", "Tanzanians", "Thai", "Timorese", "Togolese", "Tokelauans", "Tongans", "Trinidadians", "Tobagonians", "Tunisians", "Turks", "Turkmens", "Turk Islanders", "Caicos Islanders", "Tuvaluans", "Ugandans", "Ukrainians", "Emiratis", "British", "Americans", "Uruguayans", "Uzbeks", "Ni-Vanuatu", "Vatican citizens", "Venezuelans", "Vietnamese", "Virgin Islanders", "Welsh", "Wallisians", "Futunans", "Sahrawis", "Yemenis", "Zambians", "Zimbabweans"];

let val = 0;

function preload() {
    // font = loadFont('Changa-SemiBold.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
        
    background(28,36,40);
    
    let nation = random(nations);
    let demonym = random(demonyms);
    
    let sentence = 'there\'s ' + demonym + ' in ' + nation;
  
    // `there's ${demonym} in ${nation}`
    
    fill (220,226,229);
    textSize(width*0.05);
    // textFont(font);
    textLeading(width*0.05);
    text('and the next thing you know,', width/20, height/2.5);
    text(sentence, width/20, height/2.5 + width*0.05, width/1.1);  
}



function mousePressed() {
    val = val + 1;

    if (val % 2 != 0) {
        noLoop();
    } else {
        loop();
    }; 
}


