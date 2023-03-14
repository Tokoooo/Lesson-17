// let button = document.querySelector('.remove')
// const imageAppend = document.querySelector('.image-place')
//
// button.addEventListener('click', () => {
//     button.remove()
// })
//
// const image = document.createElement('img')
// image.src = 'https://picsum.photos/1400/800'
// image.setAttribute('alt', 'photo');
// image.setAttribute('height', '350')
// image.setAttribute('width', '550')
// imageAppend.appendChild(image)


const countries = [
    {
        name: {
            common: "Georgia",
            official: "Georgia",
            nativeName: {
                kat: {
                    official: "საქართველო",
                    common: "საქართველო",
                },
            },
        },
        tld: [".ge"],
        cca2: "GE",
        ccn3: "268",
        cca3: "GEO",
        cioc: "GEO",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            GEL: {
                name: "lari",
                symbol: "₾",
            },
        },
        idd: {
            root: "+9",
            suffixes: ["95"],
        },
        capital: ["Tbilisi"],
        altSpellings: ["GE", "Sakartvelo"],
        region: "Asia",
        subregion: "Western Asia",
        languages: {
            kat: "Georgian",
        },
        translations: {
            ara: {
                official: "جورجيا",
                common: "جورجيا",
            },
            bre: {
                official: "Republik Jorjia",
                common: "Jorjia",
            },
            ces: {
                official: "Gruzie",
                common: "Gruzie",
            },
            cym: {
                official: "Georgia",
                common: "Georgia",
            },
            deu: {
                official: "Georgien",
                common: "Georgien",
            },
            est: {
                official: "Gruusia",
                common: "Gruusia",
            },
            fin: {
                official: "Georgia",
                common: "Georgia",
            },
            fra: {
                official: "République de Géorgie",
                common: "Géorgie",
            },
            hrv: {
                official: "Gruzija",
                common: "Gruzija",
            },
            hun: {
                official: "Grúzia",
                common: "Grúzia",
            },
            ita: {
                official: "Georgia",
                common: "Georgia",
            },
            jpn: {
                official: "グルジア",
                common: "グルジア",
            },
            kor: {
                official: "조지아",
                common: "조지아",
            },
            nld: {
                official: "Georgia",
                common: "Georgië",
            },
            per: {
                official: "گرجستان",
                common: "گرجستان",
            },
            pol: {
                official: "Gruzja",
                common: "Gruzja",
            },
            por: {
                official: "Georgia",
                common: "Geórgia",
            },
            rus: {
                official: "Грузия",
                common: "Грузия",
            },
            slk: {
                official: "Gruzínsko",
                common: "Gruzínsko",
            },
            spa: {
                official: "Georgia",
                common: "Georgia",
            },
            srp: {
                official: "Грузија",
                common: "Грузија",
            },
            swe: {
                official: "Georgien",
                common: "Georgien",
            },
            tur: {
                official: "Gürcistan",
                common: "Gürcistan",
            },
            urd: {
                official: "جارجیا",
                common: "جارجیا",
            },
            zho: {
                official: "格鲁吉亚",
                common: "格鲁吉亚",
            },
        },
        latlng: [42, 43.5],
        landlocked: false,
        borders: ["ARM", "AZE", "RUS", "TUR"],
        area: 69700,
        demonyms: {
            eng: {
                f: "Georgian",
                m: "Georgian",
            },
            fra: {
                f: "Géorgienne",
                m: "Géorgien",
            },
        },
        flag: "🇬🇪",
        maps: {
            googleMaps: "https://goo.gl/maps/bvCaGBePR1ZEDK5cA",
            openStreetMaps: "https://www.openstreetmap.org/relation/28699",
        },
        population: 3714000,
        gini: {
            2019: 35.9,
        },
        fifa: "GEO",
        car: {
            signs: ["GE"],
            side: "right",
        },
        timezones: ["UTC+04:00"],
        continents: ["Asia"],
        flags: {
            png: "https://flagcdn.com/w320/ge.png",
            svg: "https://flagcdn.com/ge.svg",
            alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter.",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/ge.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/ge.svg",
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [41.68, 44.83],
        },
        postalCode: {
            format: "####",
            regex: "^(\\d{4})$",
        },
    },
    {
        name: {
            common: "Germany",
            official: "Federal Republic of Germany",
            nativeName: {
                deu: {
                    official: "Bundesrepublik Deutschland",
                    common: "Deutschland",
                },
            },
        },
        tld: [".de"],
        cca2: "DE",
        ccn3: "276",
        cca3: "DEU",
        cioc: "GER",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        idd: {
            root: "+4",
            suffixes: ["9"],
        },
        capital: ["Berlin"],
        altSpellings: [
            "DE",
            "Federal Republic of Germany",
            "Bundesrepublik Deutschland",
        ],
        region: "Europe",
        subregion: "Western Europe",
        languages: {
            deu: "German",
        },
        translations: {
            ara: {
                official: "جمهورية ألمانيا الاتحادية",
                common: "ألمانيا",
            },
            bre: {
                official: "Republik Kevreadel Alamagn",
                common: "Alamagn",
            },
            ces: {
                official: "Spolková republika Německo",
                common: "Německo",
            },
            cym: {
                official: "Federal Republic of Germany",
                common: "Germany",
            },
            deu: {
                official: "Bundesrepublik Deutschland",
                common: "Deutschland",
            },
            est: {
                official: "Saksamaa Liitvabariik",
                common: "Saksamaa",
            },
            fin: {
                official: "Saksan liittotasavalta",
                common: "Saksa",
            },
            fra: {
                official: "République fédérale d'Allemagne",
                common: "Allemagne",
            },
            hrv: {
                official: "Njemačka Federativna Republika",
                common: "Njemačka",
            },
            hun: {
                official: "Német Szövetségi Köztársaság",
                common: "Németország",
            },
            ita: {
                official: "Repubblica federale di Germania",
                common: "Germania",
            },
            jpn: {
                official: "ドイツ連邦共和国",
                common: "ドイツ",
            },
            kor: {
                official: "독일 연방 공화국",
                common: "독일",
            },
            nld: {
                official: "Bondsrepubliek Duitsland",
                common: "Duitsland",
            },
            per: {
                official: "جمهوری فدرال آلمان",
                common: "آلمان",
            },
            pol: {
                official: "Republika Federalna Niemiec",
                common: "Niemcy",
            },
            por: {
                official: "República Federal da Alemanha",
                common: "Alemanha",
            },
            rus: {
                official: "Федеративная Республика Германия",
                common: "Германия",
            },
            slk: {
                official: "Nemecká spolková republika",
                common: "Nemecko",
            },
            spa: {
                official: "República Federal de Alemania",
                common: "Alemania",
            },
            srp: {
                official: "Савезна Република Немачка",
                common: "Немачка",
            },
            swe: {
                official: "Förbundsrepubliken Tyskland",
                common: "Tyskland",
            },
            tur: {
                official: "Almanya Federal Cumhuriyeti",
                common: "Almanya",
            },
            urd: {
                official: "وفاقی جمہوریہ جرمنی",
                common: "جرمنی",
            },
            zho: {
                official: "德意志联邦共和国",
                common: "德国",
            },
        },
        latlng: [51, 9],
        landlocked: false,
        borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
        area: 357114,
        demonyms: {
            eng: {
                f: "German",
                m: "German",
            },
            fra: {
                f: "Allemande",
                m: "Allemand",
            },
        },
        flag: "🇩🇪",
        maps: {
            googleMaps: "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
            openStreetMaps: "https://www.openstreetmap.org/relation/51477",
        },
        population: 83240525,
        gini: {
            2016: 31.9,
        },
        fifa: "GER",
        car: {
            signs: ["DY"],
            side: "right",
        },
        timezones: ["UTC+01:00"],
        continents: ["Europe"],
        flags: {
            png: "https://flagcdn.com/w320/de.png",
            svg: "https://flagcdn.com/de.svg",
            alt: "The flag of Germany is composed of three equal horizontal bands of black, red and gold.",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/de.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/de.svg",
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [52.52, 13.4],
        },
        postalCode: {
            format: "#####",
            regex: "^(\\d{5})$",
        },
    },
    {
        name: {
            common: "United States",
            official: "United States of America",
            nativeName: {
                eng: {
                    official: "United States of America",
                    common: "United States",
                },
            },
        },
        tld: [".us"],
        cca2: "US",
        ccn3: "840",
        cca3: "USA",
        cioc: "USA",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        idd: {
            root: "+1",
            suffixes: [
                "201",
                "202",
                "203",
                "205",
                "206",
                "207",
                "208",
                "209",
                "210",
                "212",
                "213",
                "214",
                "215",
                "216",
                "217",
                "218",
                "219",
                "220",
                "224",
                "225",
                "227",
                "228",
                "229",
                "231",
                "234",
                "239",
                "240",
                "248",
                "251",
                "252",
                "253",
                "254",
                "256",
                "260",
                "262",
                "267",
                "269",
                "270",
                "272",
                "274",
                "276",
                "281",
                "283",
                "301",
                "302",
                "303",
                "304",
                "305",
                "307",
                "308",
                "309",
                "310",
                "312",
                "313",
                "314",
                "315",
                "316",
                "317",
                "318",
                "319",
                "320",
                "321",
                "323",
                "325",
                "327",
                "330",
                "331",
                "334",
                "336",
                "337",
                "339",
                "346",
                "347",
                "351",
                "352",
                "360",
                "361",
                "364",
                "380",
                "385",
                "386",
                "401",
                "402",
                "404",
                "405",
                "406",
                "407",
                "408",
                "409",
                "410",
                "412",
                "413",
                "414",
                "415",
                "417",
                "419",
                "423",
                "424",
                "425",
                "430",
                "432",
                "434",
                "435",
                "440",
                "442",
                "443",
                "447",
                "458",
                "463",
                "464",
                "469",
                "470",
                "475",
                "478",
                "479",
                "480",
                "484",
                "501",
                "502",
                "503",
                "504",
                "505",
                "507",
                "508",
                "509",
                "510",
                "512",
                "513",
                "515",
                "516",
                "517",
                "518",
                "520",
                "530",
                "531",
                "534",
                "539",
                "540",
                "541",
                "551",
                "559",
                "561",
                "562",
                "563",
                "564",
                "567",
                "570",
                "571",
                "573",
                "574",
                "575",
                "580",
                "585",
                "586",
                "601",
                "602",
                "603",
                "605",
                "606",
                "607",
                "608",
                "609",
                "610",
                "612",
                "614",
                "615",
                "616",
                "617",
                "618",
                "619",
                "620",
                "623",
                "626",
                "628",
                "629",
                "630",
                "631",
                "636",
                "641",
                "646",
                "650",
                "651",
                "657",
                "660",
                "661",
                "662",
                "667",
                "669",
                "678",
                "681",
                "682",
                "701",
                "702",
                "703",
                "704",
                "706",
                "707",
                "708",
                "712",
                "713",
                "714",
                "715",
                "716",
                "717",
                "718",
                "719",
                "720",
                "724",
                "725",
                "727",
                "730",
                "731",
                "732",
                "734",
                "737",
                "740",
                "743",
                "747",
                "754",
                "757",
                "760",
                "762",
                "763",
                "765",
                "769",
                "770",
                "772",
                "773",
                "774",
                "775",
                "779",
                "781",
                "785",
                "786",
                "801",
                "802",
                "803",
                "804",
                "805",
                "806",
                "808",
                "810",
                "812",
                "813",
                "814",
                "815",
                "816",
                "817",
                "818",
                "828",
                "830",
                "831",
                "832",
                "843",
                "845",
                "847",
                "848",
                "850",
                "854",
                "856",
                "857",
                "858",
                "859",
                "860",
                "862",
                "863",
                "864",
                "865",
                "870",
                "872",
                "878",
                "901",
                "903",
                "904",
                "906",
                "907",
                "908",
                "909",
                "910",
                "912",
                "913",
                "914",
                "915",
                "916",
                "917",
                "918",
                "919",
                "920",
                "925",
                "928",
                "929",
                "930",
                "931",
                "934",
                "936",
                "937",
                "938",
                "940",
                "941",
                "947",
                "949",
                "951",
                "952",
                "954",
                "956",
                "959",
                "970",
                "971",
                "972",
                "973",
                "975",
                "978",
                "979",
                "980",
                "984",
                "985",
                "989",
            ],
        },
        capital: ["Washington, D.C."],
        altSpellings: ["US", "USA", "United States of America"],
        region: "Americas",
        subregion: "North America",
        languages: {
            eng: "English",
        },
        translations: {
            ara: {
                official: "الولايات المتحدة الامريكية",
                common: "الولايات المتحدة",
            },
            bre: {
                official: "Stadoù-Unanet Amerika",
                common: "Stadoù-Unanet",
            },
            ces: {
                official: "Spojené státy americké",
                common: "Spojené státy",
            },
            cym: {
                official: "United States of America",
                common: "United States",
            },
            deu: {
                official: "Vereinigte Staaten von Amerika",
                common: "Vereinigte Staaten",
            },
            est: {
                official: "Ameerika Ühendriigid",
                common: "Ameerika Ühendriigid",
            },
            fin: {
                official: "Amerikan yhdysvallat",
                common: "Yhdysvallat",
            },
            fra: {
                official: "Les états-unis d'Amérique",
                common: "États-Unis",
            },
            hrv: {
                official: "Sjedinjene Države Amerike",
                common: "Sjedinjene Američke Države",
            },
            hun: {
                official: "Amerikai Egyesült Államok",
                common: "Amerikai Egyesült Államok",
            },
            ita: {
                official: "Stati Uniti d'America",
                common: "Stati Uniti d'America",
            },
            jpn: {
                official: "アメリカ合衆国",
                common: "アメリカ合衆国",
            },
            kor: {
                official: "아메리카 합중국",
                common: "미국",
            },
            nld: {
                official: "Verenigde Staten van Amerika",
                common: "Verenigde Staten",
            },
            per: {
                official: "ایالات متحده آمریکا",
                common: "ایالات متحده آمریکا",
            },
            pol: {
                official: "Stany Zjednoczone Ameryki",
                common: "Stany Zjednoczone",
            },
            por: {
                official: "Estados Unidos da América",
                common: "Estados Unidos",
            },
            rus: {
                official: "Соединенные Штаты Америки",
                common: "Соединённые Штаты Америки",
            },
            slk: {
                official: "Spojené štáty Americké",
                common: "Spojené štáty americké",
            },
            spa: {
                official: "Estados Unidos de América",
                common: "Estados Unidos",
            },
            srp: {
                official: "Сједињене Америчке Државе",
                common: "Сједињене Америчке Државе",
            },
            swe: {
                official: "Amerikas förenta stater",
                common: "USA",
            },
            tur: {
                official: "Amerika Birleşik Devletleri",
                common: "Amerika Birleşik Devletleri",
            },
            urd: {
                official: "ریاستہائے متحدہ امریکا",
                common: "ریاستہائے متحدہ",
            },
            zho: {
                official: "美利坚合众国",
                common: "美国",
            },
        },
        latlng: [38, -97],
        landlocked: false,
        borders: ["CAN", "MEX"],
        area: 9372610,
        demonyms: {
            eng: {
                f: "American",
                m: "American",
            },
            fra: {
                f: "Américaine",
                m: "Américain",
            },
        },
        flag: "🇺🇸",
        maps: {
            googleMaps: "https://goo.gl/maps/e8M246zY4BSjkjAv6",
            openStreetMaps:
                "https://www.openstreetmap.org/relation/148838#map=2/20.6/-85.8",
        },
        population: 329484123,
        gini: {
            2018: 41.4,
        },
        fifa: "USA",
        car: {
            signs: ["USA"],
            side: "right",
        },
        timezones: [
            "UTC-12:00",
            "UTC-11:00",
            "UTC-10:00",
            "UTC-09:00",
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC+10:00",
            "UTC+12:00",
        ],
        continents: ["North America"],
        flags: {
            png: "https://flagcdn.com/w320/us.png",
            svg: "https://flagcdn.com/us.svg",
            alt: "The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton.",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/us.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/us.svg",
        },
        startOfWeek: "sunday",
        capitalInfo: {
            latlng: [38.89, -77.05],
        },
        postalCode: {
            format: "#####-####",
            regex: "^\\d{5}(-\\d{4})?$",
        },
    },
    {
        name: {
            common: "France",
            official: "French Republic",
            nativeName: {
                fra: {
                    official: "République française",
                    common: "France",
                },
            },
        },
        tld: [".fr"],
        cca2: "FR",
        ccn3: "250",
        cca3: "FRA",
        cioc: "FRA",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        idd: {
            root: "+3",
            suffixes: ["3"],
        },
        capital: ["Paris"],
        altSpellings: ["FR", "French Republic", "République française"],
        region: "Europe",
        subregion: "Western Europe",
        languages: {
            fra: "French",
        },
        translations: {
            ara: {
                official: "الجمهورية الفرنسية",
                common: "فرنسا",
            },
            bre: {
                official: "Republik Frañs",
                common: "Frañs",
            },
            ces: {
                official: "Francouzská republika",
                common: "Francie",
            },
            cym: {
                official: "French Republic",
                common: "France",
            },
            deu: {
                official: "Französische Republik",
                common: "Frankreich",
            },
            est: {
                official: "Prantsuse Vabariik",
                common: "Prantsusmaa",
            },
            fin: {
                official: "Ranskan tasavalta",
                common: "Ranska",
            },
            fra: {
                official: "République française",
                common: "France",
            },
            hrv: {
                official: "Francuska Republika",
                common: "Francuska",
            },
            hun: {
                official: "Francia Köztársaság",
                common: "Franciaország",
            },
            ita: {
                official: "Repubblica francese",
                common: "Francia",
            },
            jpn: {
                official: "フランス共和国",
                common: "フランス",
            },
            kor: {
                official: "프랑스 공화국",
                common: "프랑스",
            },
            nld: {
                official: "Franse Republiek",
                common: "Frankrijk",
            },
            per: {
                official: "جمهوری فرانسه",
                common: "فرانسه",
            },
            pol: {
                official: "Republika Francuska",
                common: "Francja",
            },
            por: {
                official: "República Francesa",
                common: "França",
            },
            rus: {
                official: "Французская Республика",
                common: "Франция",
            },
            slk: {
                official: "Francúzska republika",
                common: "Francúzsko",
            },
            spa: {
                official: "República francés",
                common: "Francia",
            },
            srp: {
                official: "Француска Република",
                common: "Француска",
            },
            swe: {
                official: "Republiken Frankrike",
                common: "Frankrike",
            },
            tur: {
                official: "Fransa Cumhuriyeti",
                common: "Fransa",
            },
            urd: {
                official: "جمہوریہ فرانس",
                common: "فرانس",
            },
            zho: {
                official: "法兰西共和国",
                common: "法国",
            },
        },
        latlng: [46, 2],
        landlocked: false,
        borders: ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
        area: 551695,
        demonyms: {
            eng: {
                f: "French",
                m: "French",
            },
            fra: {
                f: "Française",
                m: "Français",
            },
        },
        flag: "🇫🇷",
        maps: {
            googleMaps: "https://goo.gl/maps/g7QxxSFsWyTPKuzd7",
            openStreetMaps: "https://www.openstreetmap.org/relation/1403916",
        },
        population: 67391582,
        gini: {
            2018: 32.4,
        },
        fifa: "FRA",
        car: {
            signs: ["F"],
            side: "right",
        },
        timezones: [
            "UTC-10:00",
            "UTC-09:30",
            "UTC-09:00",
            "UTC-08:00",
            "UTC-04:00",
            "UTC-03:00",
            "UTC+01:00",
            "UTC+02:00",
            "UTC+03:00",
            "UTC+04:00",
            "UTC+05:00",
            "UTC+10:00",
            "UTC+11:00",
            "UTC+12:00",
        ],
        continents: ["Europe"],
        flags: {
            png: "https://flagcdn.com/w320/fr.png",
            svg: "https://flagcdn.com/fr.svg",
            alt: "The flag of France is composed of three equal vertical bands of blue, white and red.",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/fr.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/fr.svg",
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [48.87, 2.33],
        },
        postalCode: {
            format: "#####",
            regex: "^(\\d{5})$",
        },
    },
];



function filterCountries () {

    const seeMore = document.getElementById('more')

    seeMore.addEventListener('click', () => {
        alert('Javascript')
    })
    let country;
    country = countries.map((countries) => {
        return `<div class="card">
                   <img src="${countries.flags.png}" alt="${countries.flags.alt}" >
                   <h1>${countries.name.official}</h1>
                   <div class="bottom-section">
                      <div class="see-more">
                            <button id="more">See More</button>
                            <table>
                                <tr>
                                    <td>
                                      Capital  
                                   </td>
                                   <td>
                                      ${countries.capital}  
                                   </td>
                                </tr>
                                <tr>
                                    <td>
                                      Area  
                                   </td>
                                   <td>
                                      ${countries.area}  
                                   </td>
                                </tr>
                                <tr>
                                    <td>
                                      Population  
                                   </td>
                                   <td>
                                      ${countries.population}  
                                   </td>
                                </tr>
                            </table>
                      </div>
                      <div class="remove-element">
                            <button id="remove">Remove Element</button>
                      </div>
                  </div>
               </div>`
    })

    let showContent = document.querySelector('.country')
    showContent.innerHTML = country
    showContent.style.display = 'flex'
    showContent.style.justifyContent = 'center'
    showContent.style.gap = '15px'
}



filterCountries()


