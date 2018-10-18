const data = {
    name: "kn",
    identity: {
        language: "kn"
    },
    territory: "IN",
    numbers: {
        symbols: {
            decimal: ".",
            group: ",",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "-",
            exponential: "E",
            superscriptingExponent: "×",
            perMille: "‰",
            infinity: "∞",
            nan: "NaN",
            timeSeparator: ":"
        },
        decimal: {
            patterns: [
                "n"
            ],
            groupSize: [
                3
            ]
        },
        scientific: {
            patterns: [
                "nEn"
            ],
            groupSize: []
        },
        percent: {
            patterns: [
                "n%"
            ],
            groupSize: [
                3
            ]
        },
        currency: {
            patterns: [
                "$n"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$n",
                "($n)"
            ],
            groupSize: [
                3
            ]
        },
        currencies: {
            ADP: {
                displayName: "ADP",
                symbol: "ADP"
            },
            AED: {
                displayName: "ಸಂಯುಕ್ತ ಅರಬ್‌ ಎಮಿರೇಟ್‌‌ಗಳ ದಿರಾಮ್‌‌",
                "displayName-count-one": "ಸಂಯುಕ್ತ ಅರಬ್‌ ಎಮಿರೇಟ್‌‌ಗಳ ದಿರಾಮ್‌‌",
                "displayName-count-other": "ಸಂಯುಕ್ತ ಅರಬ್‌ ಎಮಿರೇಟ್‌‌ಗಳ ದಿರಾಮ್‌‌‍ಗಳು",
                symbol: "AED"
            },
            AFA: {
                displayName: "AFA",
                symbol: "AFA"
            },
            AFN: {
                displayName: "ಅಫ್‌ಘನ್ ಅಫಘಾನಿ",
                "displayName-count-one": "ಅಫ್‌ಘನ್ ಅಫಘಾನಿ",
                "displayName-count-other": "ಅಫ್‌ಘನ್ ಅಫಘಾನಿಗಳು",
                symbol: "AFN"
            },
            ALK: {
                displayName: "ALK",
                symbol: "ALK"
            },
            ALL: {
                displayName: "ಅಲ್‌ಬೇನಿಯನ್ ಲೆಕ್",
                "displayName-count-one": "ಅಲ್‌ಬೇನಿಯನ್ ಲೆಕ್",
                "displayName-count-other": "ಅಲ್‌ಬೇನಿಯನ್ ಲೆಕ್",
                symbol: "ALL"
            },
            AMD: {
                displayName: "ಅರ್ಮೆನಿಯನ್ ಡ್ರಾಮ್",
                "displayName-count-one": "ಅರ್ಮೆನಿಯನ್ ಡ್ರಾಮ್",
                "displayName-count-other": "ಅರ್‌ಮೇನಿಯನ್ ಡ್ರಾಮ್‌ಗಳು",
                symbol: "AMD"
            },
            ANG: {
                displayName: "ನೆದರ್ಲೆಂಡ್ಸ್ ಆಂಟಿಲಿಯನ್ ಗಿಲ್ಡರ್",
                "displayName-count-one": "ನೆದರ್ಲೆಂಡ್ಸ್ ಆಂಟಿಲಿಯನ್ ಗಿಲ್ಡರ್",
                "displayName-count-other": "ನೆದರ್ಲೆಂಡ್ಸ್ ಆಂಟಿಲಿಯನ್ ಗಿಲ್ಡರ್‌ಗಳು",
                symbol: "ANG"
            },
            AOA: {
                displayName: "ಅಂಗೋಲಾದ ಕ್ವಾನ್ಝಾ",
                "displayName-count-one": "ಅಂಗೋಲಾದ ಕ್ವಾನ್ಝಾ",
                "displayName-count-other": "ಅಂಗೋಲಾದ ಕ್ವಾನ್ಝಾಗಳು",
                symbol: "AOA",
                "symbol-alt-narrow": "Kz"
            },
            AOK: {
                displayName: "AOK",
                symbol: "AOK"
            },
            AON: {
                displayName: "AON",
                symbol: "AON"
            },
            AOR: {
                displayName: "AOR",
                symbol: "AOR"
            },
            ARA: {
                displayName: "ARA",
                symbol: "ARA"
            },
            ARL: {
                displayName: "ARL",
                symbol: "ARL"
            },
            ARM: {
                displayName: "ARM",
                symbol: "ARM"
            },
            ARP: {
                displayName: "ARP",
                symbol: "ARP"
            },
            ARS: {
                displayName: "ಅರ್ಜೆಂಟಿನಾ ಪೆಸೊ",
                "displayName-count-one": "ಅರ್ಜೆಂಟಿನಾ ಪೆಸೊ",
                "displayName-count-other": "ಅರ್ಜೆಂಟಿನಾ ಪೆಸೊಗಳು",
                symbol: "ARS",
                "symbol-alt-narrow": "$"
            },
            ATS: {
                displayName: "ATS",
                symbol: "ATS"
            },
            AUD: {
                displayName: "ಆಸ್ಟ್ರೇಲಿಯನ್ ಡಾಲರ್‌",
                "displayName-count-one": "ಆಸ್ಟ್ರೇಲಿಯನ್ ಡಾಲರ್‌",
                "displayName-count-other": "ಆಸ್ಟ್ರೇಲಿಯನ್ ಡಾಲರ್‌‌ಗಳು",
                symbol: "A$",
                "symbol-alt-narrow": "$"
            },
            AWG: {
                displayName: "ಅರುಬನ್ ಫ್ಲೊರೀನ್‌‌",
                "displayName-count-one": "ಅರುಬನ್ ಫ್ಲೊರೀನ್‌‌",
                "displayName-count-other": "ಅರುಬನ್ ಫ್ಲೊರೀನ್‌‌",
                symbol: "AWG"
            },
            AZM: {
                displayName: "AZM",
                symbol: "AZM"
            },
            AZN: {
                displayName: "ಅಝರ್‌ಬೈಜಾನಿ ಮನಾತ್",
                "displayName-count-one": "ಅಝರ್‌ಬೈಜಾನಿ ಮನಾತ್",
                "displayName-count-other": "ಅಝರ್‌ಬೈಜಾನಿ ಮನಾತ್‌ಗಳು",
                symbol: "AZN"
            },
            BAD: {
                displayName: "BAD",
                symbol: "BAD"
            },
            BAM: {
                displayName: "ಬೋಸ್ನಿಯಾ-ಹರ್ಜ್‌ಗೋವಿನ ಪರಿವರ್ತನೀಯ ಗುರುತು",
                "displayName-count-one": "ಬೋಸ್ನಿಯಾ-ಹರ್ಜ್‌ಗೋವಿನ ಪರಿವರ್ತನೀಯ ಗುರುತು",
                "displayName-count-other": "ಬೋಸ್ನಿಯಾ-ಹರ್ಜ್‌ಗೋವಿನ ಪರಿವರ್ತನೀಯ ಗುರುತುಗಳು",
                symbol: "BAM",
                "symbol-alt-narrow": "KM"
            },
            BAN: {
                displayName: "BAN",
                symbol: "BAN"
            },
            BBD: {
                displayName: "ಬರ್ಬಾಡಿಯನ್ ಡಾಲರ್",
                "displayName-count-one": "ಬರ್ಬಾಡಿಯನ್ ಡಾಲರ್",
                "displayName-count-other": "ಬರ್ಬಾಡಿಯನ್ ಡಾಲರ್‌ಗಳು",
                symbol: "BBD",
                "symbol-alt-narrow": "$"
            },
            BDT: {
                displayName: "ಬಾಂಗ್ಲಾದೇಶದ ಟಾಕಾ",
                "displayName-count-one": "ಬಾಂಗ್ಲಾದೇಶದ ಟಾಕಾ",
                "displayName-count-other": "ಬಾಂಗ್ಲಾದೇಶದ ಟಾಕಾಗಳು",
                symbol: "BDT",
                "symbol-alt-narrow": "৳"
            },
            BEC: {
                displayName: "BEC",
                symbol: "BEC"
            },
            BEF: {
                displayName: "BEF",
                symbol: "BEF"
            },
            BEL: {
                displayName: "BEL",
                symbol: "BEL"
            },
            BGL: {
                displayName: "BGL",
                symbol: "BGL"
            },
            BGM: {
                displayName: "BGM",
                symbol: "BGM"
            },
            BGN: {
                displayName: "ಬಲ್ಗೇರಿಯನ್ ಲೆವ್",
                "displayName-count-one": "ಬಲ್ಗೇರಿಯನ್ ಲೆವ್",
                "displayName-count-other": "ಬಲ್ಗೇರಿಯನ್ ಲೀವಾ",
                symbol: "BGN"
            },
            BGO: {
                displayName: "BGO",
                symbol: "BGO"
            },
            BHD: {
                displayName: "ಬಹ್‌‌ರೈನಿ ದಿನಾರ್",
                "displayName-count-one": "ಬಹ್‌‌ರೈನಿ ದಿನಾರ್",
                "displayName-count-other": "ಬಹ್‌‌ರೈನಿ ದಿನಾರ್‌ಗಳು",
                symbol: "BHD"
            },
            BIF: {
                displayName: "ಬುರುಂದಿಯನ್ ಫ್ರಾಂಕ್",
                "displayName-count-one": "ಬುರುಂದಿಯನ್ ಫ್ರಾಂಕ್",
                "displayName-count-other": "ಬುರುಂದಿಯನ್ ಫ್ರಾಂಕ್‍ಗಳು",
                symbol: "BIF"
            },
            BMD: {
                displayName: "ಬರ್ಮುಡನ್ ಡಾಲರ್",
                "displayName-count-one": "ಬರ್ಮುಡನ್ ಡಾಲರ್",
                "displayName-count-other": "ಬರ್ಮುಡನ್ ಡಾಲರ್‌ಗಳು",
                symbol: "BMD",
                "symbol-alt-narrow": "$"
            },
            BND: {
                displayName: "ಬ್ರೂನಿ ಡಾಲರ್",
                "displayName-count-one": "ಬ್ರೂನಿ ಡಾಲರ್",
                "displayName-count-other": "ಬ್ರೂನಿ ಡಾಲರ್‌ಗಳು",
                symbol: "BND",
                "symbol-alt-narrow": "$"
            },
            BOB: {
                displayName: "ಬೊಲಿವಿಯಾದ ಬೊಲಿವಿಯಾನೊ",
                "displayName-count-one": "ಬೊಲಿವಿಯಾದ ಬೊಲಿವಿಯಾನೊ",
                "displayName-count-other": "ಬೊಲಿವಿಯಾದ ಬೊಲಿವಿಯಾನೊಗಳು",
                symbol: "BOB",
                "symbol-alt-narrow": "Bs"
            },
            BOL: {
                displayName: "BOL",
                symbol: "BOL"
            },
            BOP: {
                displayName: "BOP",
                symbol: "BOP"
            },
            BOV: {
                displayName: "BOV",
                symbol: "BOV"
            },
            BRB: {
                displayName: "BRB",
                symbol: "BRB"
            },
            BRC: {
                displayName: "BRC",
                symbol: "BRC"
            },
            BRE: {
                displayName: "BRE",
                symbol: "BRE"
            },
            BRL: {
                displayName: "ಬ್ರೆಜಿಲಿಯನ್‌ ರಿಯಲ್",
                "displayName-count-one": "ಬ್ರೆಜಿಲಿಯನ್‌ ರಿಯಲ್",
                "displayName-count-other": "ಬ್ರೆಜಿಲಿಯನ್ ರಿಯಲ್‍ಗಳು",
                symbol: "R$",
                "symbol-alt-narrow": "R$"
            },
            BRN: {
                displayName: "BRN",
                symbol: "BRN"
            },
            BRR: {
                displayName: "BRR",
                symbol: "BRR"
            },
            BRZ: {
                displayName: "BRZ",
                symbol: "BRZ"
            },
            BSD: {
                displayName: "ಬಹಾಮಿಯನ್ ಡಾಲರ್",
                "displayName-count-one": "ಬಹಾಮಿಯನ್ ಡಾಲರ್",
                "displayName-count-other": "ಬಹಾಮಿಯನ್ ಡಾಲರ್‌ಗಳು",
                symbol: "BSD",
                "symbol-alt-narrow": "$"
            },
            BTN: {
                displayName: "ಭೂತಾನೀಸ್ ನುಲ್ತರಮ್",
                "displayName-count-one": "ಭೂತಾನೀಸ್ ನುಲ್ತರಮ್",
                "displayName-count-other": "ಭೂತಾನೀಸ್ ನುಲ್ತರಮ್‌ಗಳು",
                symbol: "BTN"
            },
            BUK: {
                displayName: "BUK",
                symbol: "BUK"
            },
            BWP: {
                displayName: "ಬೋಟ್ಸ್‌ವಾನನ್ ಪುಲಾ",
                "displayName-count-one": "ಬೋಟ್ಸ್‌ವಾನನ್ ಪುಲಾ",
                "displayName-count-other": "ಬೋಟ್ಸ್‌ವಾನನ್ ಪುಲಾಗಳು",
                symbol: "BWP",
                "symbol-alt-narrow": "P"
            },
            BYB: {
                displayName: "BYB",
                symbol: "BYB"
            },
            BYN: {
                displayName: "ಬೆಲಾರುಸಿಯನ್ ರೂಬಲ್",
                "displayName-count-one": "ಬೆಲಾರುಸಿಯನ್ ರೂಬಲ್",
                "displayName-count-other": "ಬೆಲಾರುಸಿಯನ್ ರೂಬಲ್‍ಗಳು",
                symbol: "BYN",
                "symbol-alt-narrow": "р."
            },
            BYR: {
                displayName: "ಬೆಲಾರುಸಿಯನ್ ರೂಬಲ್ (2000–2016)",
                "displayName-count-one": "ಬೆಲಾರುಸಿಯನ್ ರೂಬಲ್ (2000–2016)",
                "displayName-count-other": "ಬೆಲಾರುಸಿಯನ್ ರೂಬಲ್‍ಗಳು (2000–2016)",
                symbol: "BYR"
            },
            BZD: {
                displayName: "ಬೆಲೀಜ್ ಡಾಲರ್",
                "displayName-count-one": "ಬೆಲೀಜ್ ಡಾಲರ್",
                "displayName-count-other": "ಬೆಲೀಜ್ ಡಾಲರ್‌‍ಗಳು",
                symbol: "BZD",
                "symbol-alt-narrow": "$"
            },
            CAD: {
                displayName: "ಕೆನಡಾದ ಡಾಲರ್",
                "displayName-count-one": "ಕೆನಡಾದ ಡಾಲರ್",
                "displayName-count-other": "ಕೆನಡಾದ ಡಾಲರ್‌ಗಳು",
                symbol: "CA$",
                "symbol-alt-narrow": "$"
            },
            CDF: {
                displayName: "ಕಾಂಗೋಲೀಸ್ ಫ್ರಾಂಕ್",
                "displayName-count-one": "ಕಾಂಗೋಲೀಸ್ ಫ್ರಾಂಕ್",
                "displayName-count-other": "ಕಾಂಗೋಲೀಸ್ ಫ್ರಾಂಕ್‍‌ಗಳು",
                symbol: "CDF"
            },
            CHE: {
                displayName: "CHE",
                symbol: "CHE"
            },
            CHF: {
                displayName: "ಸ್ವಿಸ್ ಫ್ರಾಂಕ್",
                "displayName-count-one": "ಸ್ವಿಸ್ ಫ್ರಾಂಕ್",
                "displayName-count-other": "ಸ್ವಿಸ್ ಫ್ರಾಂಕ್‍ಗಳು",
                symbol: "CHF"
            },
            CHW: {
                displayName: "CHW",
                symbol: "CHW"
            },
            CLE: {
                displayName: "CLE",
                symbol: "CLE"
            },
            CLF: {
                displayName: "CLF",
                symbol: "CLF"
            },
            CLP: {
                displayName: "ಚಿಲಿಯ ಪೆಸೊ",
                "displayName-count-one": "ಚಿಲಿಯ ಪೆಸೊ",
                "displayName-count-other": "ಚಿಲಿಯ ಪೆಸೊಗಳು",
                symbol: "CLP",
                "symbol-alt-narrow": "$"
            },
            CNH: {
                displayName: "CNH",
                "displayName-count-one": "CNH",
                "displayName-count-other": "CNH",
                symbol: "CNH"
            },
            CNX: {
                displayName: "CNX",
                symbol: "CNX"
            },
            CNY: {
                displayName: "ಚೈನೀಸ್ ಯುವಾನ್",
                "displayName-count-one": "ಚೈನೀಸ್ ಯುವಾನ್",
                "displayName-count-other": "ಚೈನೀಸ್ ಯುವಾನ್",
                symbol: "CN¥",
                "symbol-alt-narrow": "¥"
            },
            COP: {
                displayName: "ಕೊಲೊಂಬಿಯೋದ ಪೆಸೊ",
                "displayName-count-one": "ಕೊಲೊಂಬಿಯೋದ ಪೆಸೊ",
                "displayName-count-other": "ಕೊಲೊಂಬಿಯೋದ ಪೆಸೊಗಳು",
                symbol: "COP",
                "symbol-alt-narrow": "$"
            },
            COU: {
                displayName: "COU",
                symbol: "COU"
            },
            CRC: {
                displayName: "ಕೋಸ್ಟ ರಿಕನ್ ಕೊಲನ್",
                "displayName-count-one": "ಕೋಸ್ಟಾ ರಿಕಾದ ಕೊಲೊನ್‌",
                "displayName-count-other": "ಕೋಸ್ಟಾ ರಿಕಾದ ಕೊಲೊನ್‌ಗಳು",
                symbol: "CRC",
                "symbol-alt-narrow": "₡"
            },
            CSD: {
                displayName: "CSD",
                symbol: "CSD"
            },
            CSK: {
                displayName: "CSK",
                symbol: "CSK"
            },
            CUC: {
                displayName: "ಕ್ಯುಬಾದ ಪರಿವರ್ತನೀಯ ಪೆಸೊ",
                "displayName-count-one": "ಕ್ಯೂಬಾದ ಪರಿವರ್ತನೀಯ ಪೆಸೊ",
                "displayName-count-other": "ಕ್ಯೂಬಾದ ಪರಿವರ್ತನೀಯ ಪೆಸೊಗಳು",
                symbol: "CUC",
                "symbol-alt-narrow": "$"
            },
            CUP: {
                displayName: "ಕ್ಯೂಬಾದ ಪೆಸೊ",
                "displayName-count-one": "ಕ್ಯೂಬಾದ ಪೆಸೊ",
                "displayName-count-other": "ಕ್ಯೂಬಾದ ಪೆಸೊಗಳು",
                symbol: "CUP",
                "symbol-alt-narrow": "$"
            },
            CVE: {
                displayName: "ಕೇಪ್ ವರ್ಡಿನ್ ಎಸ್‌ಕೂಡೊ",
                "displayName-count-one": "ಕೇಪ್ ವರ್ಡಿನ್ ಎಸ್‌ಕೂಡೊ",
                "displayName-count-other": "ಕೇಪ್ ವರ್ಡಿನ್ ಎಸ್‌ಕೂಡೊಗಳು",
                symbol: "CVE"
            },
            CYP: {
                displayName: "CYP",
                symbol: "CYP"
            },
            CZK: {
                displayName: "ಝೆಕ್ ಗಣರಾಜ್ಯ ಕೊರೂನ",
                "displayName-count-one": "ಝೆಕ್ ಗಣರಾಜ್ಯ ಕೊರೂನ",
                "displayName-count-other": "ಝೆಕ್ ಗಣರಾಜ್ಯ ಕೊರೂನಗಳು",
                symbol: "CZK",
                "symbol-alt-narrow": "Kč"
            },
            DDM: {
                displayName: "DDM",
                symbol: "DDM"
            },
            DEM: {
                displayName: "DEM",
                symbol: "DEM"
            },
            DJF: {
                displayName: "ಜಿಬೊಟಿಯನ್ ಫ್ರಾಂಕ್",
                "displayName-count-one": "ಜಿಬೊಟಿಯನ್ ಫ್ರಾಂಕ್",
                "displayName-count-other": "ಜಿಬೊಟಿಯನ್ ಫ್ರಾಂಕ್‍ಗಳು",
                symbol: "DJF"
            },
            DKK: {
                displayName: "ಡ್ಯಾನಿಶ್ ಕ್ರೋನ್",
                "displayName-count-one": "ಡ್ಯಾನಿಶ್ ಕ್ರೋನ್",
                "displayName-count-other": "ಡ್ಯಾನಿಶ್ ಕ್ರೋನರ್",
                symbol: "DKK",
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                displayName: "ಡೊಮಿನಿಕನ್ ಪೆಸೊ",
                "displayName-count-one": "ಡೊಮಿನಿಕನ್ ಪೆಸೊ",
                "displayName-count-other": "ಡೊಮಿನಿಕನ್ ಪೆಸೊಗಳು",
                symbol: "DOP",
                "symbol-alt-narrow": "$"
            },
            DZD: {
                displayName: "ಅಲ್ಗೇರಿಯನ್ ದಿನಾರ್",
                "displayName-count-one": "ಅಲ್ಗೇರಿಯನ್ ದಿನಾರ್",
                "displayName-count-other": "ಅಲ್ಗೇರಿಯನ್ ದಿನಾರ್‌‍ಗಳು",
                symbol: "DZD"
            },
            ECS: {
                displayName: "ECS",
                symbol: "ECS"
            },
            ECV: {
                displayName: "ECV",
                symbol: "ECV"
            },
            EEK: {
                displayName: "EEK",
                symbol: "EEK"
            },
            EGP: {
                displayName: "ಈಜಿಪ್ಷಿಯನ್ ಪೌಂಡ್‍",
                "displayName-count-one": "ಈಜಿಪ್ಷಿಯನ್ ಪೌಂಡ್‍",
                "displayName-count-other": "ಈಜಿಪ್ಷಿಯನ್ ಪೌಂಡ್‍ಗಳು",
                symbol: "EGP",
                "symbol-alt-narrow": "E£"
            },
            ERN: {
                displayName: "ಎರಿತ್ರಿಯನ್ ನಕ್ಫಾ",
                "displayName-count-one": "ಎರಿತ್ರಿಯನ್ ನಕ್ಫಾ",
                "displayName-count-other": "ಎರಿತ್ರಿಯನ್ ನಕ್ಫಾಗಳು",
                symbol: "ERN"
            },
            ESA: {
                displayName: "ESA",
                symbol: "ESA"
            },
            ESB: {
                displayName: "ESB",
                symbol: "ESB"
            },
            ESP: {
                displayName: "ESP",
                symbol: "ESP",
                "symbol-alt-narrow": "₧"
            },
            ETB: {
                displayName: "ಇಥಿಯೋಪಿಯನ್ ಬಿರ್",
                "displayName-count-one": "ಇಥಿಯೋಪಿಯನ್ ಬಿರ್",
                "displayName-count-other": "ಇಥಿಯೋಪಿಯನ್ ಬಿರ್‌ಗಳು",
                symbol: "ETB"
            },
            EUR: {
                displayName: "ಯೂರೊ",
                "displayName-count-one": "ಯೂರೊ",
                "displayName-count-other": "ಯೂರೊ",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FIM: {
                displayName: "FIM",
                symbol: "FIM"
            },
            FJD: {
                displayName: "ಫಿಜಿಯನ್ ಡಾಲರ್",
                "displayName-count-one": "ಫಿಜಿಯನ್ ಡಾಲರ್",
                "displayName-count-other": "ಫಿಜಿಯನ್ ಡಾಲರ್‌ಗಳು",
                symbol: "FJD",
                "symbol-alt-narrow": "$"
            },
            FKP: {
                displayName: "ಫಾಲ್ಕ್‌ಲ್ಯಾಂಡ್ ದ್ವೀಪಗಳ ಪೌಂಡ್",
                "displayName-count-one": "ಫಾಲ್ಕ್‌ಲ್ಯಾಂಡ್ ದ್ವೀಪಗಳ ಪೌಂಡ್",
                "displayName-count-other": "ಫಾಲ್ಕ್‌ಲ್ಯಾಂಡ್ ದ್ವೀಪಗಳ ಪೌಂಡ್‍ಗಳು",
                symbol: "FKP",
                "symbol-alt-narrow": "£"
            },
            FRF: {
                displayName: "FRF",
                symbol: "FRF"
            },
            GBP: {
                displayName: "ಬ್ರಿಟೀಷ್ ಪೌಂಡ್",
                "displayName-count-one": "ಬ್ರಿಟಿಷ್ ಪೌಂಡ್",
                "displayName-count-other": "ಬ್ರಿಟೀಷ್ ಪೌಂಡ್‍ಗಳು",
                symbol: "£",
                "symbol-alt-narrow": "£"
            },
            GEK: {
                displayName: "GEK",
                symbol: "GEK"
            },
            GEL: {
                displayName: "ಜಾರ್ಜಿಯಾದ ಲಾರಿ",
                "displayName-count-one": "ಜಾರ್ಜಿಯಾದ ಲಾರಿ",
                "displayName-count-other": "ಜಾರ್ಜಿಯಾದ ಲಾರಿ",
                symbol: "GEL",
                "symbol-alt-narrow": "₾",
                "symbol-alt-variant": "₾"
            },
            GHC: {
                displayName: "GHC",
                symbol: "GHC"
            },
            GHS: {
                displayName: "ಘಾನಾದ ಸೆದಿ",
                "displayName-count-one": "ಘಾನಾದ ಸೆದಿ",
                "displayName-count-other": "ಘಾನಾದ ಸೆದಿಗಳು",
                symbol: "GHS"
            },
            GIP: {
                displayName: "ಗಿಬ್ರಾಲ್ಟರ್ ಪೌಂಡ್",
                "displayName-count-one": "ಗಿಬ್ರಾಲ್ಟರ್ ಪೌಂಡ್",
                "displayName-count-other": "ಗಿಬ್ರಾಲ್ಟರ್ ಪೌಂಡ್‍ಗಳು",
                symbol: "GIP",
                "symbol-alt-narrow": "£"
            },
            GMD: {
                displayName: "ಗ್ಯಾಂಬಿಯಾದ ದಲಾಸಿ",
                "displayName-count-one": "ಗ್ಯಾಂಬಿಯಾದ ದಲಾಸಿ",
                "displayName-count-other": "ಗ್ಯಾಂಬಿಯಾದ ದಲಾಸಿಗಳು",
                symbol: "GMD"
            },
            GNF: {
                displayName: "ಗಿನಿಯನ್ ಫ್ರಾಂಕ್",
                "displayName-count-one": "ಗಿನಿಯನ್ ಫ್ರಾಂಕ್",
                "displayName-count-other": "ಗಿನಿಯನ್ ಫ್ರಾಂಕ್‌ಗಳು",
                symbol: "GNF",
                "symbol-alt-narrow": "FG"
            },
            GNS: {
                displayName: "GNS",
                symbol: "GNS"
            },
            GQE: {
                displayName: "GQE",
                symbol: "GQE"
            },
            GRD: {
                displayName: "GRD",
                symbol: "GRD"
            },
            GTQ: {
                displayName: "ಗ್ವಾಟೆಮಾಲಾದ ಕುಯಿಟ್ಸಲ್‌‌",
                "displayName-count-one": "ಗ್ವಾಟೆಮಾಲಾದ ಕುಯಿಟ್ಸಲ್‌‌",
                "displayName-count-other": "ಗ್ವಾಟೆಮಾಲಾದ ಕುಯಿಟ್ಸಲ್‌‌‍ಗಳು",
                symbol: "GTQ",
                "symbol-alt-narrow": "Q"
            },
            GWE: {
                displayName: "GWE",
                symbol: "GWE"
            },
            GWP: {
                displayName: "GWP",
                symbol: "GWP"
            },
            GYD: {
                displayName: "ಗುಯಾನೀಸ್‌ ಡಾಲರ್‌",
                "displayName-count-one": "ಗುಯಾನೀಸ್‌ ಡಾಲರ್‌",
                "displayName-count-other": "ಗುಯಾನೀಸ್‌ ಡಾಲರ್‌‌ಗಳು",
                symbol: "GYD",
                "symbol-alt-narrow": "$"
            },
            HKD: {
                displayName: "ಹಾಂಗ್ ಕಾಂಗ್ ಡಾಲರ್",
                "displayName-count-one": "ಹಾಂಗ್ ಕಾಂಗ್ ಡಾಲರ್",
                "displayName-count-other": "ಹಾಂಗ್ ಕಾಂಗ್ ಡಾಲರ್‌ಗಳು",
                symbol: "HK$",
                "symbol-alt-narrow": "$"
            },
            HNL: {
                displayName: "ಹೊಂಡುರಾನ್‌ ಲೆಂಪಿರಾ",
                "displayName-count-one": "ಹೊಂಡುರಾನ್‌ ಲೆಂಪಿರಾ",
                "displayName-count-other": "ಹೊಂಡುರಾನ್‌ ಲೆಂಪಿರಾಗಳು",
                symbol: "HNL",
                "symbol-alt-narrow": "L"
            },
            HRD: {
                displayName: "HRD",
                symbol: "HRD"
            },
            HRK: {
                displayName: "ಕ್ರೊಯೆಷ್ಯಾದ ಕೂನಾ",
                "displayName-count-one": "ಕ್ರೊಯೆಷ್ಯಾದ ಕೂನಾ",
                "displayName-count-other": "ಕ್ರೊಯೆಷ್ಯಾದ ಕೂನಾಗಳು",
                symbol: "HRK",
                "symbol-alt-narrow": "kn"
            },
            HTG: {
                displayName: "ಹೈಟಿಯ ಗೋರ್ದೆ",
                "displayName-count-one": "ಹೈಟಿಯ ಗೋರ್ದೆ",
                "displayName-count-other": "ಹೈಟಿಯ ಗೋರ್ದೆಗಳು",
                symbol: "HTG"
            },
            HUF: {
                displayName: "ಹಂಗೇರಿಯನ್ ಫೋರಿಂಟ್",
                "displayName-count-one": "ಹಂಗೇರಿಯನ್ ಫೋರಿಂಟ್",
                "displayName-count-other": "ಹಂಗೇರಿಯನ್ ಫೋರಿಂಟ್‍ಗಳು",
                symbol: "HUF",
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                displayName: "ಇಂಡೊನೇಷ್ಯಾ ರುಪೈ",
                "displayName-count-one": "ಇಂಡೊನೇಷ್ಯಾ ರುಪೈ",
                "displayName-count-other": "ಇಂಡೊನೇಷ್ಯಾ ರುಪೈ",
                symbol: "IDR",
                "symbol-alt-narrow": "Rp"
            },
            IEP: {
                displayName: "IEP",
                symbol: "IEP"
            },
            ILP: {
                displayName: "ILP",
                symbol: "ILP"
            },
            ILR: {
                displayName: "ILR",
                symbol: "ILR"
            },
            ILS: {
                displayName: "ಇಸ್ರೇಲಿ ನ್ಯೂ ಶೇಖಲ್",
                "displayName-count-one": "ಇಸ್ರೇಲಿ ನ್ಯೂ ಶೇಖಲ್",
                "displayName-count-other": "ಇಸ್ರೇಲಿ ನ್ಯೂ ಶೇಖಲ್‍ಗಳು",
                symbol: "₪",
                "symbol-alt-narrow": "₪"
            },
            INR: {
                displayName: "ಭಾರತೀಯ ರೂಪಾಯಿ",
                "displayName-count-one": "ಭಾರತೀಯ ರೂಪಾಯಿ",
                "displayName-count-other": "ಭಾರತೀಯ ರೂಪಾಯಿಗಳು",
                symbol: "₹",
                "symbol-alt-narrow": "₹"
            },
            IQD: {
                displayName: "ಇರಾಕಿಯನ್ ದಿನಾರ್‌",
                "displayName-count-one": "ಇರಾಖಿಯನ್ ದಿನಾರ್",
                "displayName-count-other": "ಇರಾಕಿಯನ್ ದಿನಾರ್‌ಗಳು",
                symbol: "IQD"
            },
            IRR: {
                displayName: "ಇರಾನಿಯನ್ ರಿಯಲ್",
                "displayName-count-one": "ಇರಾನಿಯನ್ ರಿಯಲ್",
                "displayName-count-other": "ಇರಾನಿಯನ್ ರಿಯಲ್‌ಗಳು",
                symbol: "IRR"
            },
            ISJ: {
                displayName: "ISJ",
                symbol: "ISJ"
            },
            ISK: {
                displayName: "ಐಸ್‌ಲ್ಯಾಂಡಿಕ್ ಕ್ರೋನಾ",
                "displayName-count-one": "ಐಸ್‌ಲ್ಯಾಂಡಿಕ್ ಕ್ರೋನಾ",
                "displayName-count-other": "ಐಸ್‌ಲ್ಯಾಂಡಿಕ್ ಕ್ರೋನಾ",
                symbol: "ISK",
                "symbol-alt-narrow": "kr"
            },
            ITL: {
                displayName: "ITL",
                symbol: "ITL"
            },
            JMD: {
                displayName: "ಜಮೈಕನ್ ಡಾಲರ್",
                "displayName-count-one": "ಜಮೈಕನ್ ಡಾಲರ್",
                "displayName-count-other": "ಜಮೈಕನ್ ಡಾಲರ್‌ಗಳು",
                symbol: "JMD",
                "symbol-alt-narrow": "$"
            },
            JOD: {
                displayName: "ಜೋರ್ಡಾನಿಯನ್ ದಿನಾರ್",
                "displayName-count-one": "ಜೋರ್ಡಾನಿಯನ್ ದಿನಾರ್",
                "displayName-count-other": "ಜೋರ್ಡಾನಿಯನ್ ದಿನಾರ್‌ಗಳು",
                symbol: "JOD"
            },
            JPY: {
                displayName: "ಜಪಾನೀಸ್ ಯೆನ್",
                "displayName-count-one": "ಜಪಾನೀಸ್ ಯೆನ್",
                "displayName-count-other": "ಜಪಾನೀಸ್ ಯೆನ್",
                symbol: "JP¥",
                "symbol-alt-narrow": "¥"
            },
            KES: {
                displayName: "ಕೀನ್ಯಾದ ಶಿಲ್ಲಿಂಗ್‌",
                "displayName-count-one": "ಕೀನ್ಯಾದ ಶಿಲ್ಲಿಂಗ್‌",
                "displayName-count-other": "ಕೀನ್ಯಾದ ಶಿಲ್ಲಿಂಗ್‌ಗಳು",
                symbol: "KES"
            },
            KGS: {
                displayName: "ಕಿರ್ಗಿಸ್ತಾನಿ ಸೋಮ್",
                "displayName-count-one": "ಕಿರ್ಗಿಸ್ತಾನಿ ಸೋಮ್",
                "displayName-count-other": "ಕಿರ್ಗಿಸ್ತಾನಿ ಸೋಮ್",
                symbol: "KGS"
            },
            KHR: {
                displayName: "ಕಾಂಬೋಡಿಯನ್ ರಿಯಲ್",
                "displayName-count-one": "ಕಾಂಬೋಡಿಯನ್ ರಿಯಲ್",
                "displayName-count-other": "ಕಾಂಬೋಡಿಯನ್ ರಿಯಲ್‍ಗಳು",
                symbol: "KHR",
                "symbol-alt-narrow": "៛"
            },
            KMF: {
                displayName: "ಕೊಮೊರಿಯನ್ ಫ್ರಾಂಕ್",
                "displayName-count-one": "ಕೊಮೊರಿಯನ್ ಫ್ರಾಂಕ್",
                "displayName-count-other": "ಕೊಮೊರಿಯನ್ ಫ್ರಾಂಕ್‍ಗಳು",
                symbol: "KMF",
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                displayName: "ಉತ್ತರ ಕೊರಿಯನ್ ವೋನ್",
                "displayName-count-one": "ಉತ್ತರ ಕೊರಿಯನ್ ವೋನ್",
                "displayName-count-other": "ಉತ್ತರ ಕೊರಿಯನ್ ವೋನ್",
                symbol: "KPW",
                "symbol-alt-narrow": "₩"
            },
            KRH: {
                displayName: "KRH",
                symbol: "KRH"
            },
            KRO: {
                displayName: "KRO",
                symbol: "KRO"
            },
            KRW: {
                displayName: "ದಕ್ಷಿಣ ಕೊರಿಯನ್ ವೊನ್",
                "displayName-count-one": "ದಕ್ಷಿಣ ಕೊರಿಯನ್ ವೊನ್",
                "displayName-count-other": "ದಕ್ಷಿಣ ಕೊರಿಯನ್ ವೊನ್",
                symbol: "₩",
                "symbol-alt-narrow": "₩"
            },
            KWD: {
                displayName: "ಕುವೈತೀ ದಿನಾರ್",
                "displayName-count-one": "ಕುವೈತೀ ದಿನಾರ್",
                "displayName-count-other": "ಕುವೈತೀ ದಿನಾರ್‌ಗಳು",
                symbol: "KWD"
            },
            KYD: {
                displayName: "ಕೆಮ್ಯಾನ್‌ ಐಲ್ಯಾಂಡ್‌ನ ಡಾಲರ್‌",
                "displayName-count-one": "ಕೆಮ್ಯಾನ್‌ ಐಲ್ಯಾಂಡ್‌ನ ಡಾಲರ್‌",
                "displayName-count-other": "ಕೆಮ್ಯಾನ್‌ ಐಲ್ಯಾಂಡ್‌ನ ಡಾಲರ್‌‌ಗಳು",
                symbol: "KYD",
                "symbol-alt-narrow": "$"
            },
            KZT: {
                displayName: "ಕಜಾಕಿಸ್ತಾನಿ ತೆಂಗೆ",
                "displayName-count-one": "ಕಜಕಿಸ್ತಾನ್ ತೆಂಗೇ",
                "displayName-count-other": "ಕಜಾಕಿಸ್ತಾನಿ ತೆಂಗೆಗಳು",
                symbol: "KZT",
                "symbol-alt-narrow": "₸"
            },
            LAK: {
                displayName: "ಲೋಟಿಯನ್ ಕಿಪ್",
                "displayName-count-one": "ಲೋಟಿಯನ್ ಕಿಪ್",
                "displayName-count-other": "ಲೋಟಿಯನ್ ಕಿಪ್‍ಗಳು",
                symbol: "LAK",
                "symbol-alt-narrow": "₭"
            },
            LBP: {
                displayName: "ಲೆಬೆನೀಸ್ ಪೌಂಡ್",
                "displayName-count-one": "ಲೆಬೆನೀಸ್ ಪೌಂಡ್",
                "displayName-count-other": "ಲೆಬೆನೀಸ್ ಪೌಂಡ್‍ಗಳು",
                symbol: "LBP",
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                displayName: "ಶ್ರೀಲಂಕಾದ ರುಪೀ",
                "displayName-count-one": "ಶ್ರೀಲಂಕಾದ ರುಪೀ",
                "displayName-count-other": "ಶ್ರೀಲಂಕಾದ ರುಪೀಗಳು",
                symbol: "LKR",
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                displayName: "ಲಿಬೇರಿಯನ್ ಡಾಲರ್",
                "displayName-count-one": "ಲಿಬೇರಿಯನ್ ಡಾಲರ್",
                "displayName-count-other": "ಲಿಬೇರಿಯನ್ ಡಾಲರ್‌ಗಳು",
                symbol: "LRD",
                "symbol-alt-narrow": "$"
            },
            LSL: {
                displayName: "ಲೆಸೊತೊ ಲೊತಿ",
                symbol: "LSL"
            },
            LTL: {
                displayName: "ಲಿಥುನಿಯನ್‌ ಲಿತಾಸ್‌",
                "displayName-count-one": "ಲಿಥುನಿಯನ್‌ ಲಿತಾಸ್‌",
                "displayName-count-other": "ಲಿಥುನಿಯನ್‌ ಲಿತಾಯ್",
                symbol: "LTL",
                "symbol-alt-narrow": "Lt"
            },
            LTT: {
                displayName: "LTT",
                symbol: "LTT"
            },
            LUC: {
                displayName: "LUC",
                symbol: "LUC"
            },
            LUF: {
                displayName: "LUF",
                symbol: "LUF"
            },
            LUL: {
                displayName: "LUL",
                symbol: "LUL"
            },
            LVL: {
                displayName: "ಲ್ಯಾಟ್ವಿಯನ್ ಲ್ಯಾಟ್ಸ್",
                "displayName-count-one": "ಲ್ಯಾಟ್ವಿಯನ್ ಲ್ಯಾಟ್ಸ್",
                "displayName-count-other": "ಲ್ಯಾಟ್ವಿಯನ್ ಲ್ಯಾಟಿ",
                symbol: "LVL",
                "symbol-alt-narrow": "Ls"
            },
            LVR: {
                displayName: "LVR",
                symbol: "LVR"
            },
            LYD: {
                displayName: "ಲಿಬಿಯಾದ ದಿನಾರ್‌",
                "displayName-count-one": "ಲಿಬಿಯಾದ ದಿನಾರ್‌",
                "displayName-count-other": "ಲಿಬಿಯಾದ ದಿನಾರ್‌‍ಗಳು",
                symbol: "LYD"
            },
            MAD: {
                displayName: "ಮೊರೊಕನ್ ದಿರ್‌ಹಮ್",
                "displayName-count-one": "ಮೊರೊಕನ್ ದಿರ್‌ಹಮ್",
                "displayName-count-other": "ಮೊರೊಕನ್ ದಿರ್‌ಹಮ್‌ಗಳು",
                symbol: "MAD"
            },
            MAF: {
                displayName: "MAF",
                symbol: "MAF"
            },
            MCF: {
                displayName: "MCF",
                symbol: "MCF"
            },
            MDC: {
                displayName: "MDC",
                symbol: "MDC"
            },
            MDL: {
                displayName: "ಮಲ್ದೋವಾದ ಲೆವೂ",
                "displayName-count-one": "ಮಲ್ದೋವಾದ ಲೆವೂ",
                "displayName-count-other": "ಮಲ್ದೋವಾದ ಲೆಯ್",
                symbol: "MDL"
            },
            MGA: {
                displayName: "ಮಲಗಾಸಿ ಅರಿಯಾರಿ",
                "displayName-count-one": "ಮಲಗಾಸಿ ಅರಿಯಾರಿ",
                "displayName-count-other": "ಮಲಗಾಸಿ ಅರಿಯಾರಿಗಳು",
                symbol: "MGA",
                "symbol-alt-narrow": "Ar"
            },
            MGF: {
                displayName: "MGF",
                symbol: "MGF"
            },
            MKD: {
                displayName: "ಮೆಸಡೋನಿಯನ್ ದಿನಾರ್",
                "displayName-count-one": "ಮೆಸಡೋನಿಯನ್ ದಿನಾರ್",
                "displayName-count-other": "ಮೆಸಡೋನಿಯನ್ ದಿನಾರಿ",
                symbol: "MKD"
            },
            MKN: {
                displayName: "MKN",
                symbol: "MKN"
            },
            MLF: {
                displayName: "MLF",
                symbol: "MLF"
            },
            MMK: {
                displayName: "ಮ್ಯಾನ್ಮಾರ್ ಕ್ಯಾಟ್",
                "displayName-count-one": "ಮ್ಯಾನ್ಮಾರ್ ಕ್ಯಾಟ್",
                "displayName-count-other": "ಮ್ಯಾನ್ಮಾರ್ ಕ್ಯಾಟ್‍ಗಳು",
                symbol: "MMK",
                "symbol-alt-narrow": "K"
            },
            MNT: {
                displayName: "ಮಂಗೋಲಿಯಾದ ತುಗ್ರಿಕ್‌‌",
                "displayName-count-one": "ಮಂಗೋಲಿಯಾದ ತುಗ್ರಿಕ್‌‌",
                "displayName-count-other": "ಮಂಗೋಲಿಯಾದ ತುಗ್ರಿಕ್‌‌‌ಗಳು",
                symbol: "MNT",
                "symbol-alt-narrow": "₮"
            },
            MOP: {
                displayName: "ಮಕ್ಯೂದ ಪಟಕಾ",
                "displayName-count-one": "ಮಕ್ಯೂದ ಪಟಕಾ",
                "displayName-count-other": "ಮಕ್ಯೂದ ಪಟಕಾಗಳು",
                symbol: "MOP"
            },
            MRO: {
                displayName: "ಮೌರೀಶಿಯನಿಯನ್ ಒಗಿಯ (1973–2017)",
                "displayName-count-one": "ಮೌರೀಶಿಯನಿಯನ್ ಒಗಿಯ (1973–2017)",
                "displayName-count-other": "ಮೌರೀಶಿಯನಿಯನ್ ಒಗಿಯಗಳು (1973–2017)",
                symbol: "MRO"
            },
            MRU: {
                displayName: "ಮೌರೀಶಿಯನಿಯನ್ ಒಗಿಯ",
                "displayName-count-one": "ಮೌರೀಶಿಯನಿಯನ್ ಒಗಿಯ",
                "displayName-count-other": "ಮೌರೀಶಿಯನಿಯನ್ ಒಗಿಯಗಳು",
                symbol: "MRU"
            },
            MTL: {
                displayName: "MTL",
                symbol: "MTL"
            },
            MTP: {
                displayName: "MTP",
                symbol: "MTP"
            },
            MUR: {
                displayName: "ಮಾರಿಷಿಯನ್ ರುಪಿ",
                "displayName-count-one": "ಮಾರಿಷಿಯನ್ ರುಪಿ",
                "displayName-count-other": "ಮಾರಿಷಿಯನ್ ರುಪಿಗಳು",
                symbol: "MUR",
                "symbol-alt-narrow": "Rs"
            },
            MVP: {
                displayName: "MVP",
                symbol: "MVP"
            },
            MVR: {
                displayName: "ಮಾಲ್ಡೀವಿಯನ್ ರುಫಿಯಾ",
                "displayName-count-one": "ಮಾಲ್ಡೀವಿಯನ್ ರುಫಿಯಾ",
                "displayName-count-other": "ಮಾಲ್ಡೀವಿಯನ್ ರುಫಿಯಾಗಳು",
                symbol: "MVR"
            },
            MWK: {
                displayName: "ಮಲಾವಿಯ ಕ್ವಾಚ",
                "displayName-count-one": "ಮಲಾವಿಯ ಕ್ವಾಚ",
                "displayName-count-other": "ಮಲಾವಿಯ ಕ್ವಾಚಗಳು",
                symbol: "MWK"
            },
            MXN: {
                displayName: "ಮೆಕ್ಸಿಕೊದ ಪೆಸೊ",
                "displayName-count-one": "ಮೆಕ್ಸಿಕೊದ ಪೆಸೊ",
                "displayName-count-other": "ಮೆಕ್ಸಿಕೊದ ಪೆಸೊಗಳು",
                symbol: "MX$",
                "symbol-alt-narrow": "$"
            },
            MXP: {
                displayName: "MXP",
                symbol: "MXP"
            },
            MXV: {
                displayName: "MXV",
                symbol: "MXV"
            },
            MYR: {
                displayName: "ಮಲೇಶಿಯನ್ ರಿಂಗಿಟ್ಟ್",
                "displayName-count-one": "ಮಲೇಶಿಯನ್ ರಿಂಗಿಟ್ಟ್",
                "displayName-count-other": "ಮಲೇಶಿಯನ್ ರಿಂಗಿಟ್ಟ್‌ಗಳು",
                symbol: "MYR",
                "symbol-alt-narrow": "RM"
            },
            MZE: {
                displayName: "MZE",
                symbol: "MZE"
            },
            MZM: {
                displayName: "MZM",
                symbol: "MZM"
            },
            MZN: {
                displayName: "ಮೊಝಾಂಬಿಕನ್ ಮೆಟಿಕಲ್",
                "displayName-count-one": "ಮೊಝಾಂಬಿಕನ್ ಮೆಟಿಕಲ್",
                "displayName-count-other": "ಮೊಝಾಂಬಿಕನ್ ಮೆಟಿಕಲ್‍ಗಳು",
                symbol: "MZN"
            },
            NAD: {
                displayName: "ನಮೀಬಿಯನ್ ಡಾಲರ್",
                "displayName-count-one": "ನಮೀಬಿಯನ್ ಡಾಲರ್",
                "displayName-count-other": "ನಮೀಬಿಯನ್ ಡಾಲರ್‌‍ಗಳು",
                symbol: "NAD",
                "symbol-alt-narrow": "$"
            },
            NGN: {
                displayName: "ನೈಜೀರಿಯಾದ ನೇರಾ",
                "displayName-count-one": "ನೈಜೀರಿಯಾದ ನೇರಾ",
                "displayName-count-other": "ನೈಜೀರಿಯಾದ ನೇರಾಗಳು",
                symbol: "NGN",
                "symbol-alt-narrow": "₦"
            },
            NIC: {
                displayName: "NIC",
                symbol: "NIC"
            },
            NIO: {
                displayName: "ನಿಕಾರಗ್ವಾದ ಕರ್ದೊಬಾ",
                "displayName-count-one": "ನಿಕಾರಗ್ವಾದ ಕರ್ದೊಬಾ",
                "displayName-count-other": "ನಿಕಾರಗ್ವಾದ ಕರ್ದೊಬಾಗಳು",
                symbol: "NIO",
                "symbol-alt-narrow": "C$"
            },
            NLG: {
                displayName: "NLG",
                symbol: "NLG"
            },
            NOK: {
                displayName: "ನಾರ್ವೇಯ ಕ್ರೋನ್",
                "displayName-count-one": "ನಾರ್ವೇಯ ಕ್ರೋನ್",
                "displayName-count-other": "ನಾರ್ವೇಯ ಕ್ರೋನರ್",
                symbol: "NOK",
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                displayName: "ನೇಪಾಳದ ರುಪೀ",
                "displayName-count-one": "ನೇಪಾಳದ ರುಪೀ",
                "displayName-count-other": "ನೇಪಾಳದ ರುಪೀಗಳು",
                symbol: "NPR",
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                displayName: "ನ್ಯೂಜಿಲ್ಯಾಂಡ್ ಡಾಲರ್",
                "displayName-count-one": "ನ್ಯೂಜಿಲ್ಯಾಂಡ್ ಡಾಲರ್",
                "displayName-count-other": "ನ್ಯೂಜಿಲ್ಯಾಂಡ್ ಡಾಲರ್‌ಗಳು",
                symbol: "NZ$",
                "symbol-alt-narrow": "$"
            },
            OMR: {
                displayName: "ಒಮಾನಿ ರಿಯಲ್",
                "displayName-count-one": "ಒಮಾನಿ ರಿಯಲ್",
                "displayName-count-other": "ಒಮಾನಿ ರಿಯಲ್‍ಗಳು",
                symbol: "OMR"
            },
            PAB: {
                displayName: "ಪನಾಮಾನಿಯನ್ ಬಲ್ಬೋವಾ",
                "displayName-count-one": "ಪನಾಮಾನಿಯನ್ ಬಲ್ಬೋವಾ",
                "displayName-count-other": "ಪನಾಮಾನಿಯನ್ ಬಲ್ಬೋವಾಗಳು",
                symbol: "PAB"
            },
            PEI: {
                displayName: "PEI",
                symbol: "PEI"
            },
            PEN: {
                displayName: "ಪೆರುವಿಯನ್ ಸೊಲ್",
                "displayName-count-one": "ಪೆರುವಿಯನ್ ಸೊಲ್",
                "displayName-count-other": "ಪೆರುವಿಯನ್ ಸೊಲ್‍ಗಳು",
                symbol: "PEN"
            },
            PES: {
                displayName: "PES",
                symbol: "PES"
            },
            PGK: {
                displayName: "ಪಪುವಾ ನ್ಯೂ ಗಿನಿಯನ್ ಕಿನಾ",
                "displayName-count-one": "ಪಪುವಾ ನ್ಯೂ ಗಿನಿಯನ್ ಕಿನಾ",
                "displayName-count-other": "ಪಪುವಾ ನ್ಯೂ ಗಿನಿಯನ್ ಕಿನಾ",
                symbol: "PGK"
            },
            PHP: {
                displayName: "ಫಿಲಿಪ್ಪೈನ್ ಪೆಸೊ",
                "displayName-count-one": "ಫಿಲಿಪ್ಪೈನ್ ಪೆಸೊ",
                "displayName-count-other": "ಫಿಲಿಪ್ಪೈನ್ ಪೆಸೊಗಳು",
                symbol: "PHP",
                "symbol-alt-narrow": "₱"
            },
            PKR: {
                displayName: "ಪಾಕಿಸ್ತಾನದ ರುಪೀ",
                "displayName-count-one": "ಪಾಕಿಸ್ತಾನದ ರುಪೀ",
                "displayName-count-other": "ಪಾಕಿಸ್ತಾನದ ರುಪೀಗಳು",
                symbol: "PKR",
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                displayName: "ಪೊಲಿಶ್ ಝ್ಲೋಟಿ",
                "displayName-count-one": "ಪೊಲಿಶ್ ಝ್ಲೋಟಿ",
                "displayName-count-other": "ಪೊಲಿಶ್ ಝ್ಲೋಟಿಗಳು",
                symbol: "PLN",
                "symbol-alt-narrow": "zł"
            },
            PLZ: {
                displayName: "PLZ",
                symbol: "PLZ"
            },
            PTE: {
                displayName: "PTE",
                symbol: "PTE"
            },
            PYG: {
                displayName: "ಪೆರುಗ್ವೇಯ ಗ್ವಾರನೀ",
                "displayName-count-one": "ಪೆರುಗ್ವೇಯ ಗ್ವಾರನೀ",
                "displayName-count-other": "ಪೆರುಗ್ವೇಯ ಗ್ವಾರನೀಗಳು",
                symbol: "PYG",
                "symbol-alt-narrow": "₲"
            },
            QAR: {
                displayName: "ಖತಾರಿ ರಿಯಲ್",
                "displayName-count-one": "ಖತಾರಿ ರಿಯಲ್",
                "displayName-count-other": "ಖತಾರಿ ರಿಯಲ್‍ಗಳು",
                symbol: "QAR"
            },
            RHD: {
                displayName: "RHD",
                symbol: "RHD"
            },
            ROL: {
                displayName: "ROL",
                symbol: "ROL"
            },
            RON: {
                displayName: "ರೊಮೇನಿಯನ್ ಲೆವು",
                "displayName-count-one": "ರೊಮೇನಿಯನ್ ಲೆವು",
                "displayName-count-other": "ರೊಮೇನಿಯನ್ ಲೆಯ್",
                symbol: "RON",
                "symbol-alt-narrow": "ಲೀ"
            },
            RSD: {
                displayName: "ಸೆರ್ಬಿಯನ್ ದಿನಾರ್",
                "displayName-count-one": "ಸೆರ್ಬಿಯನ್ ದಿನಾರ್",
                "displayName-count-other": "ಸೆರ್ಬಿಯನ್ ದಿನಾರ್‌ಗಳು",
                symbol: "RSD"
            },
            RUB: {
                displayName: "ರಶಿಯನ್ ರೂಬಲ್",
                "displayName-count-one": "ರಶಿಯನ್ ರೂಬಲ್",
                "displayName-count-other": "ರಶಿಯನ್ ರೂಬಲ್‍ಗಳು",
                symbol: "RUB",
                "symbol-alt-narrow": "₽"
            },
            RUR: {
                displayName: "RUR",
                symbol: "RUR",
                "symbol-alt-narrow": "р."
            },
            RWF: {
                displayName: "ರುವಾಂಡನ್ ಫ್ರಾಂಕ್",
                "displayName-count-one": "ರುವಾಂಡನ್ ಫ್ರಾಂಕ್",
                "displayName-count-other": "ರುವಾಂಡನ್ ಫ್ರಾಂಕ್‍ಗಳು",
                symbol: "RWF",
                "symbol-alt-narrow": "RF"
            },
            SAR: {
                displayName: "ಸೌದಿ ರಿಯಾಲ್",
                "displayName-count-one": "ಸೌದಿ ರಿಯಾಲ್",
                "displayName-count-other": "ಸೌದಿ ರಿಯಾಲ್‍ಗಳು",
                symbol: "SAR"
            },
            SBD: {
                displayName: "ಸೊಲೊಮನ್ ದ್ವೀಪಗಳ ಡಾಲರ್",
                "displayName-count-one": "ಸೊಲೊಮನ್ ದ್ವೀಪಗಳ ಡಾಲರ್",
                "displayName-count-other": "ಸೊಲೊಮನ್ ದ್ವೀಪಗಳ ಡಾಲರ್‌ಗಳು",
                symbol: "SBD",
                "symbol-alt-narrow": "$"
            },
            SCR: {
                displayName: "ಸೆಚೊಲಿಯೊಸ್ ರುಪಿ",
                "displayName-count-one": "ಸೆಚೊಲಿಯೊಸ್ ರುಪಿ",
                "displayName-count-other": "ಸೆಚೊಲಿಯೊಸ್ ರುಪಿಗಳು",
                symbol: "SCR"
            },
            SDD: {
                displayName: "SDD",
                symbol: "SDD"
            },
            SDG: {
                displayName: "ಸುಡಾನೀಸ್ ಪೌಂಡ್",
                "displayName-count-one": "ಸುಡಾನೀಸ್ ಪೌಂಡ್",
                "displayName-count-other": "ಸುಡಾನೀಸ್ ಪೌಂಡ್",
                symbol: "SDG"
            },
            SDP: {
                displayName: "SDP",
                symbol: "SDP"
            },
            SEK: {
                displayName: "ಸ್ವೀಡಿಷ್ ಕ್ರೋನಾ",
                "displayName-count-one": "ಸ್ವೀಡಿಷ್ ಕ್ರೋನಾ",
                "displayName-count-other": "ಸ್ವೀಡಿಶ್ ಕ್ರೋನರ್",
                symbol: "SEK",
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                displayName: "ಸಿಂಗಾಪುರ್ ಡಾಲರ್‌",
                "displayName-count-one": "ಸಿಂಗಾಪುರ್ ಡಾಲರ್‌",
                "displayName-count-other": "ಸಿಂಗಾಪುರ್ ಡಾಲರ್‌‌ಗಳು",
                symbol: "SGD",
                "symbol-alt-narrow": "$"
            },
            SHP: {
                displayName: "ಸೇಂಟ್ ಹೆಲೇನಾ ಪೌಂಡ್",
                "displayName-count-one": "ಸೇಂಟ್ ಹೆಲೇನಾ ಪೌಂಡ್",
                "displayName-count-other": "ಸೇಂಟ್ ಹೆಲೇನಾ ಪೌಂಡ್",
                symbol: "SHP",
                "symbol-alt-narrow": "£"
            },
            SIT: {
                displayName: "SIT",
                symbol: "SIT"
            },
            SKK: {
                displayName: "SKK",
                symbol: "SKK"
            },
            SLL: {
                displayName: "ಸಿಯೆರಾ ಲಿಯೋನಿಯನ್ ಲಿಯೋನ್",
                "displayName-count-one": "ಸಿಯೆರಾ ಲಿಯೋನಿಯನ್ ಲಿಯೋನ್",
                "displayName-count-other": "ಸಿಯೆರಾ ಲಿಯೋನಿಯನ್ ಲಿಯೋನ್‌ಗಳು",
                symbol: "SLL"
            },
            SOS: {
                displayName: "ಸೊಮಾಲಿ ಶಿಲ್ಲಿಂಗ್",
                "displayName-count-one": "ಸೊಮಾಲಿ ಶಿಲ್ಲಿಂಗ್",
                "displayName-count-other": "ಸೊಮಾಲಿ ಶಿಲ್ಲಿಂಗ್‍ಗಳು",
                symbol: "SOS"
            },
            SRD: {
                displayName: "ಸುರಿನಾಮೀಸ್ ಡಾಲರ್",
                "displayName-count-one": "ಸುರಿನಾಮೀಸ್ ಡಾಲರ್",
                "displayName-count-other": "ಸುರಿನಾಮೀಸ್ ಡಾಲರ್‌ಗಳು",
                symbol: "SRD",
                "symbol-alt-narrow": "$"
            },
            SRG: {
                displayName: "SRG",
                symbol: "SRG"
            },
            SSP: {
                displayName: "ದಕ್ಷಿಣ ಸೂಡಾನೀಸ್ ಪೌಂಡ್‍",
                "displayName-count-one": "ದಕ್ಷಿಣ ಸೂಡಾನೀಸ್ ಪೌಂಡ್‍",
                "displayName-count-other": "ದಕ್ಷಿಣ ಸೂಡಾನೀಸ್ ಪೌಂಡ್‍‍ಗಳು",
                symbol: "SSP",
                "symbol-alt-narrow": "£"
            },
            STD: {
                displayName: "ಸಾವೊ ಟೋಮ್ ಮತ್ತು ಪ್ರಿನ್ಸಿಪ್ ದೊಬ್ರಾ (1977–2017)",
                "displayName-count-one": "ಸಾವೊ ಟೋಮ್ ಮತ್ತು ಪ್ರಿನ್ಸಿಪ್ ದೊಬ್ರಾ (1977–2017)",
                "displayName-count-other": "ಸಾವೊ ಟೋಮ್ ಮತ್ತು ಪ್ರಿನ್ಸಿಪ್ ದೊಬ್ರಾಗಳು (1977–2017)",
                symbol: "STD"
            },
            STN: {
                displayName: "ಸಾವೊ ಟೋಮ್ ಮತ್ತು ಪ್ರಿನ್ಸಿಪ್ ದೊಬ್ರಾ",
                "displayName-count-one": "ಸಾವೊ ಟೋಮ್ ಮತ್ತು ಪ್ರಿನ್ಸಿಪ್ ದೊಬ್ರಾ",
                "displayName-count-other": "ಸಾವೊ ಟೋಮ್ ಮತ್ತು ಪ್ರಿನ್ಸಿಪ್ ದೊಬ್ರಾಗಳು",
                symbol: "STN",
                "symbol-alt-narrow": "Db"
            },
            SUR: {
                displayName: "SUR",
                symbol: "SUR"
            },
            SVC: {
                displayName: "SVC",
                symbol: "SVC"
            },
            SYP: {
                displayName: "ಸಿರಿಯನ್ ಪೌಂಡ್",
                "displayName-count-one": "ಸಿರಿಯನ್ ಪೌಂಡ್",
                "displayName-count-other": "ಸಿರಿಯನ್ ಪೌಂಡ್‌ಗಳು",
                symbol: "SYP",
                "symbol-alt-narrow": "£"
            },
            SZL: {
                displayName: "ಸ್ವಾಜಿ ಲಿಲಂಗೆನಿ",
                "displayName-count-one": "ಸ್ವಾಜಿ ಲಿಲಂಗೆನಿ",
                "displayName-count-other": "ಸ್ವಾಜಿ ಎಮಲಂಗೆನಿ",
                symbol: "SZL"
            },
            THB: {
                displayName: "ಥಾಯ್ ಬಹ್ತ್",
                "displayName-count-one": "ಥಾಯ್ ಬಹ್ತ್",
                "displayName-count-other": "ಥಾಯ್ ಬಹ್ತ್",
                symbol: "฿",
                "symbol-alt-narrow": "฿"
            },
            TJR: {
                displayName: "TJR",
                symbol: "TJR"
            },
            TJS: {
                displayName: "ತಜಕಿಸ್ತಾನಿ ಸೊಮೋನಿ",
                "displayName-count-one": "ತಜಕಿಸ್ತಾನಿ ಸೊಮೋನಿ",
                "displayName-count-other": "ತಜಕಿಸ್ತಾನಿ ಸೊಮೋನಿಗಳು",
                symbol: "TJS"
            },
            TMM: {
                displayName: "TMM",
                symbol: "TMM"
            },
            TMT: {
                displayName: "ಟರ್ಕ್‍ಮೆನಿಸ್ತಾನ್ ಮನಾತ್",
                "displayName-count-one": "ಟರ್ಕ್‍ಮೆನಿಸ್ತಾನ್ ಮನಾತ್",
                "displayName-count-other": "ಟರ್ಕ್‍ಮೆನಿಸ್ತಾನ್ ಮನಾತ್",
                symbol: "TMT"
            },
            TND: {
                displayName: "ಟ್ಯುನೀಷಿಯನ್‌ ದಿನಾರ್",
                "displayName-count-one": "ತುನೀಸಿಯನ್ ದಿನಾರ್",
                "displayName-count-other": "ಟ್ಯುನೀಷಿಯನ್‌ ದಿನಾರ್‌ಗಳು",
                symbol: "TND"
            },
            TOP: {
                displayName: "ಟೊಂಗಾ ಪಾಂಗ",
                "displayName-count-one": "ಟೊಂಗಾ ಪಾಂಗ",
                "displayName-count-other": "ಟೊಂಗಾ ಪಾಂಗ",
                symbol: "TOP",
                "symbol-alt-narrow": "T$"
            },
            TPE: {
                displayName: "TPE",
                symbol: "TPE"
            },
            TRL: {
                displayName: "TRL",
                symbol: "TRL"
            },
            TRY: {
                displayName: "ಟರ್ಕಿಶ್ ಲಿರಾ",
                "displayName-count-one": "ಟರ್ಕಿಶ್ ಲಿರಾ",
                "displayName-count-other": "ಟರ್ಕಿಶ್ ಲಿರಾ",
                symbol: "TRY",
                "symbol-alt-narrow": "₺",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                displayName: "ಟ್ರಿನಿಡಾಡ್ ಮತ್ತು ಟೊಬಾಗೊ ಡಾಲರ್",
                "displayName-count-one": "ಟ್ರಿನಿಡಾಡ್ ಮತ್ತು ಟೊಬಾಗೊ ಡಾಲರ್",
                "displayName-count-other": "ಟ್ರಿನಿಡಾಡ್ ಮತ್ತು ಟೊಬಾಗೊ ಡಾಲರ್‌ಗಳು",
                symbol: "TTD",
                "symbol-alt-narrow": "$"
            },
            TWD: {
                displayName: "ನ್ಯೂ ತೈವಾನ್ ಡಾಲರ್",
                "displayName-count-one": "ನ್ಯೂ ತೈವಾನ್ ಡಾಲರ್",
                "displayName-count-other": "ನ್ಯೂ ತೈವಾನ್ ಡಾಲರ್‌ಗಳು",
                symbol: "NT$",
                "symbol-alt-narrow": "NT$"
            },
            TZS: {
                displayName: "ತಾನ್‌ಜೇನಿಯನ್ ಶಿಲ್ಲಿಂಗ್",
                "displayName-count-one": "ತಾನ್‌ಜೇನಿಯನ್ ಶಿಲ್ಲಿಂಗ್",
                "displayName-count-other": "ತಾನ್‌ಜೇನಿಯನ್ ಶಿಲ್ಲಿಂಗ್‍ಗಳು",
                symbol: "TZS"
            },
            UAH: {
                displayName: "ಉಕ್ರೇನಿಯನ್ ಹ್ರಿವ್ನೀಯ",
                "displayName-count-one": "ಉಕ್ರೇನಿಯನ್ ಹ್ರಿವ್ನೀಯ",
                "displayName-count-other": "ಉಕ್ರೇನಿಯನ್ ಹ್ರಿವ್ನೀಯಗಳು",
                symbol: "UAH",
                "symbol-alt-narrow": "₴"
            },
            UAK: {
                displayName: "UAK",
                symbol: "UAK"
            },
            UGS: {
                displayName: "UGS",
                symbol: "UGS"
            },
            UGX: {
                displayName: "ಉಗಾಂಡನ್ ಶಿಲ್ಲಿಂಗ್",
                "displayName-count-one": "ಉಗಾಂಡನ್ ಶಿಲ್ಲಿಂಗ್",
                "displayName-count-other": "ಉಗಾಂಡನ್ ಶಿಲ್ಲಿಂಗ್‍ಗಳು",
                symbol: "UGX"
            },
            USD: {
                displayName: "ಅಮೆರಿಕದ ಡಾಲರ್‌",
                "displayName-count-one": "ಅಮೆರಿಕದ ಡಾಲರ್‌",
                "displayName-count-other": "ಅಮೆರಿಕದ ಡಾಲರ್‌‌ಗಳು",
                symbol: "$",
                "symbol-alt-narrow": "$"
            },
            USN: {
                displayName: "USN",
                symbol: "USN"
            },
            USS: {
                displayName: "USS",
                symbol: "USS"
            },
            UYI: {
                displayName: "UYI",
                symbol: "UYI"
            },
            UYP: {
                displayName: "UYP",
                symbol: "UYP"
            },
            UYU: {
                displayName: "ಉರುಗ್ವೆಯ ಪೆಸೊ",
                "displayName-count-one": "ಉರುಗ್ವೆಯ ಪೆಸೊ",
                "displayName-count-other": "ಉರುಗ್ವೆಯ ಪೆಸೊಗಳು",
                symbol: "UYU",
                "symbol-alt-narrow": "$"
            },
            UYW: {
                displayName: "UYW",
                symbol: "UYW"
            },
            UZS: {
                displayName: "ಉಜ್ಬೇಕಿಸ್ತಾನ್ ಸೊಮ್",
                "displayName-count-one": "ಉಜ್ಬೇಕಿಸ್ತಾನ್ ಸೊಮ್",
                "displayName-count-other": "ಉಜ್ಬೇಕಿಸ್ತಾನ್ ಸೊಮ್",
                symbol: "UZS"
            },
            VEB: {
                displayName: "VEB",
                symbol: "VEB"
            },
            VEF: {
                displayName: "ವೆನಿಜುಲಿಯನ್ ಬೊಲಿವರ್ (2008–2018)",
                "displayName-count-one": "ವೆನಿಜುಲಿಯನ್ ಬೊಲಿವರ್ (2008–2018)",
                "displayName-count-other": "ವೆನಿಜುಲಿಯನ್ ಬೊಲಿವರ್‌ಗಳು (2008–2018)",
                symbol: "VEF",
                "symbol-alt-narrow": "Bs"
            },
            VES: {
                displayName: "ವೆನಿಜುಲಿಯನ್ ಬೊಲಿವರ್",
                "displayName-count-one": "ವೆನಿಜುಲಿಯನ್ ಬೊಲಿವರ್",
                "displayName-count-other": "ವೆನಿಜುಲಿಯನ್ ಬೊಲಿವರ್‌ಗಳು",
                symbol: "VES"
            },
            VND: {
                displayName: "ವಿಯೆಟ್ನಾಮೀಸ್ ಡಾಂಗ್",
                "displayName-count-one": "ವಿಯೆಟ್ನಾಮೀಸ್ ಡಾಂಗ್",
                "displayName-count-other": "ವಿಯೆಟ್ನಾಮೀಸ್ ಡಾಂಗ್",
                symbol: "₫",
                "symbol-alt-narrow": "₫"
            },
            VNN: {
                displayName: "VNN",
                symbol: "VNN"
            },
            VUV: {
                displayName: "ವನೂತು ವತು",
                "displayName-count-one": "ವನೂತು ವತು",
                "displayName-count-other": "ವನೂತು ವತುಗಳು",
                symbol: "VUV"
            },
            WST: {
                displayName: "ಸಮೋನ್ ತಲಾ",
                "displayName-count-one": "ಸಮೋನ್ ತಲಾ",
                "displayName-count-other": "ಸಮೋನ್ ತಲಾ",
                symbol: "WST"
            },
            XAF: {
                displayName: "ಮಧ್ಯ ಆಫ್ರಿಕನ್ CFA ಫ್ರಾಂಕ್",
                "displayName-count-one": "ಮಧ್ಯ ಆಫ್ರಿಕನ್ CFA ಫ್ರಾಂಕ್",
                "displayName-count-other": "ಮಧ್ಯ ಆಫ್ರಿಕನ್ CFA ಫ್ರಾಂಕ್‌ಗಳು",
                symbol: "FCFA"
            },
            XAG: {
                displayName: "XAG",
                symbol: "XAG"
            },
            XAU: {
                displayName: "XAU",
                symbol: "XAU"
            },
            XBA: {
                displayName: "XBA",
                symbol: "XBA"
            },
            XBB: {
                displayName: "XBB",
                symbol: "XBB"
            },
            XBC: {
                displayName: "XBC",
                symbol: "XBC"
            },
            XBD: {
                displayName: "XBD",
                symbol: "XBD"
            },
            XCD: {
                displayName: "ಪೂರ್ವ ಕೆರೀಬಿಯನ್ ಡಾಲರ್",
                "displayName-count-one": "ಪೂರ್ವ ಕೆರೀಬಿಯನ್ ಡಾಲರ್",
                "displayName-count-other": "ಪೂರ್ವ ಕೆರೀಬಿಯನ್ ಡಾಲರ್‌ಗಳು",
                symbol: "EC$",
                "symbol-alt-narrow": "$"
            },
            XDR: {
                displayName: "XDR",
                symbol: "XDR"
            },
            XEU: {
                displayName: "XEU",
                symbol: "XEU"
            },
            XFO: {
                displayName: "XFO",
                symbol: "XFO"
            },
            XFU: {
                displayName: "XFU",
                symbol: "XFU"
            },
            XOF: {
                displayName: "ಪಶ್ಚಿಮ ಆಫ್ರಿಕಾದ [CFA] ಫ್ರಾಂಕ್",
                "displayName-count-one": "ಪಶ್ಚಿಮ ಆಫ್ರಿಕಾದ [CFA] ಫ್ರಾಂಕ್‌",
                "displayName-count-other": "ಪಶ್ಚಿಮ ಆಫ್ರಿಕಾದ [CFA] ಫ್ರಾಂಕ್‌ಗಳು",
                symbol: "CFA"
            },
            XPD: {
                displayName: "XPD",
                symbol: "XPD"
            },
            XPF: {
                displayName: "[CFP] ಫ್ರಾಂಕ್",
                "displayName-count-one": "[CFP] ಫ್ರಾಂಕ್",
                "displayName-count-other": "[CFP] ಫ್ರಾಂಕ್‌ಗಳು",
                symbol: "CFPF"
            },
            XPT: {
                displayName: "XPT",
                symbol: "XPT"
            },
            XRE: {
                displayName: "XRE",
                symbol: "XRE"
            },
            XSU: {
                displayName: "XSU",
                symbol: "XSU"
            },
            XTS: {
                displayName: "XTS",
                symbol: "XTS"
            },
            XUA: {
                displayName: "XUA",
                symbol: "XUA"
            },
            XXX: {
                displayName: "ಅಪರಿಚಿತ ಕರೆನ್ಸಿ",
                "displayName-count-one": "(ಅಪರಿಚಿತ ಕರೆನ್ಸಿ ಯುನಿಟ್)",
                "displayName-count-other": "(ಅಪರಿಚಿತ ಕರೆನ್ಸಿ)",
                symbol: "¤"
            },
            YDD: {
                displayName: "YDD",
                symbol: "YDD"
            },
            YER: {
                displayName: "ಯೆಮೆನಿ ರಿಯಲ್",
                "displayName-count-one": "ಯೆಮೆನಿ ರಿಯಲ್",
                "displayName-count-other": "ಯೆಮೆನಿ ರಿಯಲ್‍ಗಳು",
                symbol: "YER"
            },
            YUD: {
                displayName: "YUD",
                symbol: "YUD"
            },
            YUM: {
                displayName: "YUM",
                symbol: "YUM"
            },
            YUN: {
                displayName: "YUN",
                symbol: "YUN"
            },
            YUR: {
                displayName: "YUR",
                symbol: "YUR"
            },
            ZAL: {
                displayName: "ZAL",
                symbol: "ZAL"
            },
            ZAR: {
                displayName: "ದಕ್ಷಿಣ ಆಫ್ರಿಕನ್ ರಾಂಡ್",
                "displayName-count-one": "ದಕ್ಷಿಣ ಆಫ್ರಿಕನ್ ರಾಂಡ್",
                "displayName-count-other": "ದಕ್ಷಿಣ ಆಫ್ರಿಕನ್ ರಾಂಡ್",
                symbol: "ZAR",
                "symbol-alt-narrow": "R"
            },
            ZMK: {
                displayName: "ಜಾಂಬಿಯಾ ಕ್ವಾಚ (1968–2012)",
                symbol: "ZMK"
            },
            ZMW: {
                displayName: "ಜಾಂಬಿಯಾ ಕ್ವಾಚ",
                "displayName-count-one": "ಜಾಂಬಿಯಾ ಕ್ವಾಚ",
                "displayName-count-other": "ಜಾಂಬಿಯಾ ಕ್ವಾಚಗಳು",
                symbol: "ZMW",
                "symbol-alt-narrow": "ZK"
            },
            ZRN: {
                displayName: "ZRN",
                symbol: "ZRN"
            },
            ZRZ: {
                displayName: "ZRZ",
                symbol: "ZRZ"
            },
            ZWD: {
                displayName: "ZWD",
                symbol: "ZWD"
            },
            ZWL: {
                displayName: "ZWL",
                symbol: "ZWL"
            },
            ZWR: {
                displayName: "ZWR",
                symbol: "ZWR"
            }
        },
        localeCurrency: "INR"
    },
    calendar: {
        patterns: {
            d: "d/M/y",
            D: "EEEE, MMMM d, y",
            m: "MMM d",
            M: "d MMMM",
            y: "MMM y",
            Y: "MMMM y",
            F: "EEEE, MMMM d, y hh:mm:ss a",
            g: "d/M/y hh:mm a",
            G: "d/M/y hh:mm:ss a",
            t: "hh:mm a",
            T: "hh:mm:ss a",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1} {0}",
            long: "{1} {0}",
            medium: "{1} {0}",
            short: "{1} {0}",
            availableFormats: {
                Bh: "h B",
                Bhm: "h:mm B",
                Bhms: "h:mm:ss B",
                d: "d",
                E: "ccc",
                EBhm: "E h:mm B",
                EBhms: "E h:mm:ss B",
                Ed: "d E",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "G y",
                GyMMM: "G y MMM",
                GyMMMd: "G y MMM d",
                GyMMMEd: "G y MMM d, E",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d/M",
                MEd: "d/M, E",
                MMdd: "dd-MM",
                MMM: "LLL",
                MMMd: "MMM d",
                MMMEd: "E, d MMM",
                MMMMd: "d MMMM",
                "MMMMW-count-one": "'week' W 'of' MMM",
                "MMMMW-count-other": "'week' W 'of' MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "E, M/d/y",
                yMM: "MM-y",
                yMMM: "MMM y",
                yMMMd: "MMM d,y",
                yMMMEd: "E, MMM d, y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-one": "'week' w 'of' Y",
                "yw-count-other": "'week' w 'of' Y"
            }
        },
        timeFormats: {
            full: "hh:mm:ss a zzzz",
            long: "hh:mm:ss a z",
            medium: "hh:mm:ss a",
            short: "hh:mm a"
        },
        dateFormats: {
            full: "EEEE, MMMM d, y",
            long: "MMMM d, y",
            medium: "MMM d, y",
            short: "d/M/yy"
        },
        days: {
            format: {
                abbreviated: [
                    "ಭಾನು",
                    "ಸೋಮ",
                    "ಮಂಗಳ",
                    "ಬುಧ",
                    "ಗುರು",
                    "ಶುಕ್ರ",
                    "ಶನಿ"
                ],
                narrow: [
                    "ಭಾ",
                    "ಸೋ",
                    "ಮಂ",
                    "ಬು",
                    "ಗು",
                    "ಶು",
                    "ಶ"
                ],
                short: [
                    "ಭಾನು",
                    "ಸೋಮ",
                    "ಮಂಗಳ",
                    "ಬುಧ",
                    "ಗುರು",
                    "ಶುಕ್ರ",
                    "ಶನಿ"
                ],
                wide: [
                    "ಭಾನುವಾರ",
                    "ಸೋಮವಾರ",
                    "ಮಂಗಳವಾರ",
                    "ಬುಧವಾರ",
                    "ಗುರುವಾರ",
                    "ಶುಕ್ರವಾರ",
                    "ಶನಿವಾರ"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ಭಾನು",
                    "ಸೋಮ",
                    "ಮಂಗಳ",
                    "ಬುಧ",
                    "ಗುರು",
                    "ಶುಕ್ರ",
                    "ಶನಿ"
                ],
                narrow: [
                    "ಭಾ",
                    "ಸೋ",
                    "ಮಂ",
                    "ಬು",
                    "ಗು",
                    "ಶು",
                    "ಶ"
                ],
                short: [
                    "ಭಾನು",
                    "ಸೋಮ",
                    "ಮಂಗಳ",
                    "ಬುಧ",
                    "ಗುರು",
                    "ಶುಕ್ರ",
                    "ಶನಿ"
                ],
                wide: [
                    "ಭಾನುವಾರ",
                    "ಸೋಮವಾರ",
                    "ಮಂಗಳವಾರ",
                    "ಬುಧವಾರ",
                    "ಗುರುವಾರ",
                    "ಶುಕ್ರವಾರ",
                    "ಶನಿವಾರ"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "ಜನವರಿ",
                    "ಫೆಬ್ರವರಿ",
                    "ಮಾರ್ಚ್",
                    "ಏಪ್ರಿ",
                    "ಮೇ",
                    "ಜೂನ್",
                    "ಜುಲೈ",
                    "ಆಗ",
                    "ಸೆಪ್ಟೆಂ",
                    "ಅಕ್ಟೋ",
                    "ನವೆಂ",
                    "ಡಿಸೆಂ"
                ],
                narrow: [
                    "ಜ",
                    "ಫೆ",
                    "ಮಾ",
                    "ಏ",
                    "ಮೇ",
                    "ಜೂ",
                    "ಜು",
                    "ಆ",
                    "ಸೆ",
                    "ಅ",
                    "ನ",
                    "ಡಿ"
                ],
                wide: [
                    "ಜನವರಿ",
                    "ಫೆಬ್ರವರಿ",
                    "ಮಾರ್ಚ್",
                    "ಏಪ್ರಿಲ್",
                    "ಮೇ",
                    "ಜೂನ್",
                    "ಜುಲೈ",
                    "ಆಗಸ್ಟ್",
                    "ಸೆಪ್ಟೆಂಬರ್",
                    "ಅಕ್ಟೋಬರ್",
                    "ನವೆಂಬರ್",
                    "ಡಿಸೆಂಬರ್"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ಜನ",
                    "ಫೆಬ್ರ",
                    "ಮಾರ್ಚ್",
                    "ಏಪ್ರಿ",
                    "ಮೇ",
                    "ಜೂನ್",
                    "ಜುಲೈ",
                    "ಆಗ",
                    "ಸೆಪ್ಟೆಂ",
                    "ಅಕ್ಟೋ",
                    "ನವೆಂ",
                    "ಡಿಸೆಂ"
                ],
                narrow: [
                    "ಜ",
                    "ಫೆ",
                    "ಮಾ",
                    "ಏ",
                    "ಮೇ",
                    "ಜೂ",
                    "ಜು",
                    "ಆ",
                    "ಸೆ",
                    "ಅ",
                    "ನ",
                    "ಡಿ"
                ],
                wide: [
                    "ಜನವರಿ",
                    "ಫೆಬ್ರವರಿ",
                    "ಮಾರ್ಚ್",
                    "ಏಪ್ರಿಲ್",
                    "ಮೇ",
                    "ಜೂನ್",
                    "ಜುಲೈ",
                    "ಆಗಸ್ಟ್",
                    "ಸೆಪ್ಟೆಂಬರ್",
                    "ಅಕ್ಟೋಬರ್",
                    "ನವೆಂಬರ್",
                    "ಡಿಸೆಂಬರ್"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "ತ್ರೈ 1",
                    "ತ್ರೈ 2",
                    "ತ್ರೈ 3",
                    "ತ್ರೈ 4"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1ನೇ ತ್ರೈಮಾಸಿಕ",
                    "2ನೇ ತ್ರೈಮಾಸಿಕ",
                    "3ನೇ ತ್ರೈಮಾಸಿಕ",
                    "4ನೇ ತ್ರೈಮಾಸಿಕ"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ತ್ರೈ 1",
                    "ತ್ರೈ 2",
                    "ತ್ರೈ 3",
                    "ತ್ರೈ 4"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1ನೇ ತ್ರೈಮಾಸಿಕ",
                    "2ನೇ ತ್ರೈಮಾಸಿಕ",
                    "3ನೇ ತ್ರೈಮಾಸಿಕ",
                    "4ನೇ ತ್ರೈಮಾಸಿಕ"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "ಮಧ್ಯ ರಾತ್ರಿ",
                    am: "ಪೂರ್ವಾಹ್ನ",
                    pm: "ಅಪರಾಹ್ನ",
                    morning1: "ಬೆಳಗ್ಗೆ",
                    afternoon1: "ಮಧ್ಯಾಹ್ನ",
                    evening1: "ಸಂಜೆ",
                    night1: "ರಾತ್ರಿ"
                },
                narrow: {
                    midnight: "ಮಧ್ಯರಾತ್ರಿ",
                    am: "ಪೂ",
                    pm: "ಅ",
                    morning1: "ಬೆಳಗ್ಗೆ",
                    afternoon1: "ಮಧ್ಯಾಹ್ನ",
                    evening1: "ಸಂಜೆ",
                    night1: "ರಾತ್ರಿ"
                },
                wide: {
                    midnight: "ಮಧ್ಯ ರಾತ್ರಿ",
                    am: "ಪೂರ್ವಾಹ್ನ",
                    pm: "ಅಪರಾಹ್ನ",
                    morning1: "ಬೆಳಗ್ಗೆ",
                    afternoon1: "ಮಧ್ಯಾಹ್ನ",
                    evening1: "ಸಂಜೆ",
                    night1: "ರಾತ್ರಿ"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "ಮಧ್ಯರಾತ್ರಿ",
                    am: "ಪೂರ್ವಾಹ್ನ",
                    pm: "ಅಪರಾಹ್ನ",
                    morning1: "ಬೆಳಗ್ಗೆ",
                    afternoon1: "ಮಧ್ಯಾಹ್ನ",
                    evening1: "ಸಂಜೆ",
                    night1: "ರಾತ್ರಿ"
                },
                narrow: {
                    midnight: "ಮಧ್ಯರಾತ್ರಿ",
                    am: "ಪೂರ್ವಾಹ್ನ",
                    pm: "ಅಪರಾಹ್ನ",
                    morning1: "ಬೆಳಗ್ಗೆ",
                    afternoon1: "ಮಧ್ಯಾಹ್ನ",
                    evening1: "ಸಂಜೆ",
                    night1: "ರಾತ್ರಿ"
                },
                wide: {
                    midnight: "ಮಧ್ಯರಾತ್ರಿ",
                    am: "ಪೂರ್ವಾಹ್ನ",
                    pm: "ಅಪರಾಹ್ನ",
                    morning1: "ಬೆಳಗ್ಗೆ",
                    afternoon1: "ಮಧ್ಯಾಹ್ನ",
                    evening1: "ಸಂಜೆ",
                    night1: "ರಾತ್ರಿ"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    0: "ಕ್ರಿಸ್ತ ಪೂರ್ವ",
                    1: "ಕ್ರಿಸ್ತ ಶಕ",
                    "0-alt-variant": "ಕ್ರಿ.ಪೂ.ಕಾಲ",
                    "1-alt-variant": "ಪ್ರಸಕ್ತ ಶಕ"
                },
                abbreviated: {
                    0: "ಕ್ರಿ.ಪೂ",
                    1: "ಕ್ರಿ.ಶ",
                    "0-alt-variant": "ಕ್ರಿ.ಪೂ.ಕಾಲ",
                    "1-alt-variant": "ಪ್ರಸಕ್ತ ಶಕ"
                },
                narrow: {
                    0: "ಕ್ರಿ.ಪೂ",
                    1: "ಕ್ರಿ.ಶ",
                    "0-alt-variant": "ಕ್ರಿ.ಪೂ.ಕಾಲ",
                    "1-alt-variant": "ಪ್ರಸಕ್ತ ಶಕ"
                }
            }
        },
        gmtFormat: "GMT{0}",
        gmtZeroFormat: "GMT",
        dateFields: {
            era: {
                wide: "ಯುಗ",
                short: "ಯುಗ",
                narrow: "ಯುಗ"
            },
            year: {
                wide: "ವರ್ಷ",
                short: "ವರ್ಷ",
                narrow: "ವರ್ಷ"
            },
            quarter: {
                wide: "ತ್ರೈಮಾಸಿಕ",
                short: "ತ್ರೈಮಾಸಿಕ",
                narrow: "ತ್ರೈಮಾಸಿಕ"
            },
            month: {
                wide: "ತಿಂಗಳು",
                short: "ತಿಂಗಳು",
                narrow: "ತಿಂಗಳು"
            },
            week: {
                wide: "ವಾರ",
                short: "ವಾರ",
                narrow: "ವಾರ"
            },
            weekOfMonth: {
                wide: "ತಿಂಗಳ ವಾರ",
                short: "ತಿಂಗಳ ವಾರ",
                narrow: "ತಿಂಗಳ ವಾರ"
            },
            day: {
                wide: "ದಿನ",
                short: "ದಿನ",
                narrow: "ದಿನ"
            },
            dayOfYear: {
                wide: "ವರ್ಷದ ದಿನ",
                short: "ವರ್ಷದ ದಿನ",
                narrow: "ವರ್ಷದ ದಿನ"
            },
            weekday: {
                wide: "ವಾರದ ದಿನ",
                short: "ವಾರದ ದಿನ",
                narrow: "ವಾರದ ದಿನ"
            },
            weekdayOfMonth: {
                wide: "ತಿಂಗಳ ವಾರದ ದಿನ",
                short: "ತಿಂಗಳ ವಾರದ ದಿನ",
                narrow: "ತಿಂಗಳ ವಾರದ ದಿನ"
            },
            dayperiod: {
                short: "ಪೂರ್ವಾಹ್ನ/ಅಪರಾಹ್ನ",
                wide: "AM/PM",
                narrow: "AM/PM"
            },
            hour: {
                wide: "ಗಂಟೆ",
                short: "ಗಂಟೆ",
                narrow: "ಗಂಟೆ"
            },
            minute: {
                wide: "ನಿಮಿಷ",
                short: "ನಿಮಿಷ",
                narrow: "ನಿಮಿಷ"
            },
            second: {
                wide: "ಸೆಕೆಂಡ್",
                short: "ಸೆಕೆಂಡ್",
                narrow: "ಸೆಕೆಂಡ್"
            },
            zone: {
                wide: "ಸಮಯ ವಲಯ",
                short: "ವಲಯ",
                narrow: "ವಲಯ"
            }
        }
    },
    firstDay: 0,
    likelySubtags: {
        kn: "kn-Knda-IN"
    }
};
export default data;

