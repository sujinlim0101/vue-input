export type CountryCode =
  | 'AC'
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TA'
  | 'TC'
  | 'TD'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'XK'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'

export type CountryInfo = {
  [key in CountryCode]: {
    name: string
    native: string
    calling: string
    languages: string[]
    emoji: string
  }
}

const countries: CountryInfo = {
  AC: {
    name: 'Ascension',
    native: 'Ascension',
    calling: '247',
    languages: ['en'],
    emoji: '🇦🇨',
  },
  AD: {
    name: 'Andorra',
    native: 'Andorra',
    calling: '376',
    languages: ['ca'],
    emoji: '🇦🇩',
  },
  AE: {
    name: 'United Arab Emirates',
    native: 'دولة الإمارات العربية المتحدة',
    calling: '971',
    languages: ['ar'],
    emoji: '🇦🇪',
  },
  AF: {
    name: 'Afghanistan',
    native: 'افغانستان',
    calling: '93',
    languages: ['ps', 'uz', 'tk'],
    emoji: '🇦🇫',
  },
  AG: {
    name: 'Antigua and Barbuda',
    native: 'Antigua and Barbuda',
    calling: '1',
    languages: ['en'],
    emoji: '🇦🇬',
  },
  AI: {
    name: 'Anguilla',
    native: 'Anguilla',
    calling: '1',
    languages: ['en'],
    emoji: '🇦🇮',
  },
  AL: {
    name: 'Albania',
    native: 'Shqipëria',
    calling: '355',
    languages: ['sq'],
    emoji: '🇦🇱',
  },
  AM: {
    name: 'Armenia',
    native: 'Հայաստան',
    calling: '374',
    languages: ['hy', 'ru'],
    emoji: '🇦🇲',
  },
  AO: {
    name: 'Angola',
    native: 'Angola',
    calling: '244',
    languages: ['pt'],
    emoji: '🇦🇴',
  },
  AR: {
    name: 'Argentina',
    native: 'Argentina',
    calling: '54',
    languages: ['es', 'gn'],
    emoji: '🇦🇷',
  },
  AS: {
    name: 'American Samoa',
    native: 'American Samoa',
    calling: '1',
    languages: ['en', 'sm'],
    emoji: '🇦🇸',
  },
  AT: {
    name: 'Austria',
    native: 'Österreich',
    calling: '43',
    languages: ['de'],
    emoji: '🇦🇹',
  },
  AU: {
    name: 'Australia',
    native: 'Australia',
    calling: '61',
    languages: ['en'],
    emoji: '🇦🇺',
  },
  AW: {
    name: 'Aruba',
    native: 'Aruba',
    calling: '297',
    languages: ['nl', 'pa'],
    emoji: '🇦🇼',
  },
  AX: {
    name: 'Åland',
    native: 'Åland',
    calling: '358',
    languages: ['sv'],
    emoji: '🇦🇽',
  },
  AZ: {
    name: 'Azerbaijan',
    native: 'Azərbaycan',
    calling: '994',
    languages: ['az'],
    emoji: '🇦🇿',
  },
  BA: {
    name: 'Bosnia and Herzegovina',
    native: 'Bosna i Hercegovina',
    calling: '387',
    languages: ['bs', 'hr', 'sr'],
    emoji: '🇧🇦',
  },
  BB: {
    name: 'Barbados',
    native: 'Barbados',
    calling: '1',
    languages: ['en'],
    emoji: '🇧🇧',
  },
  BD: {
    name: 'Bangladesh',
    native: 'Bangladesh',
    calling: '880',
    languages: ['bn'],
    emoji: '🇧🇩',
  },
  BE: {
    name: 'Belgium',
    native: 'België',
    calling: '32',
    languages: ['nl', 'fr', 'de'],
    emoji: '🇧🇪',
  },
  BF: {
    name: 'Burkina Faso',
    native: 'Burkina Faso',
    calling: '226',
    languages: ['fr', 'ff'],
    emoji: '🇧🇫',
  },
  BG: {
    name: 'Bulgaria',
    native: 'България',
    calling: '359',
    languages: ['bg'],
    emoji: '🇧🇬',
  },
  BH: {
    name: 'Bahrain',
    native: '‏البحرين',
    calling: '973',
    languages: ['ar'],
    emoji: '🇧🇭',
  },
  BI: {
    name: 'Burundi',
    native: 'Burundi',
    calling: '257',
    languages: ['fr', 'rn'],
    emoji: '🇧🇮',
  },
  BJ: {
    name: 'Benin',
    native: 'Bénin',
    calling: '229',
    languages: ['fr'],
    emoji: '🇧🇯',
  },
  BL: {
    name: 'Saint Barthélemy',
    native: 'Saint-Barthélemy',
    calling: '590',
    languages: ['fr'],
    emoji: '🇧🇱',
  },
  BM: {
    name: 'Bermuda',
    native: 'Bermuda',
    calling: '1',
    languages: ['en'],
    emoji: '🇧🇲',
  },
  BN: {
    name: 'Brunei',
    native: 'Negara Brunei Darussalam',
    calling: '673',
    languages: ['ms'],
    emoji: '🇧🇳',
  },
  BO: {
    name: 'Bolivia',
    native: 'Bolivia',
    calling: '591',
    languages: ['es', 'ay', 'qu'],
    emoji: '🇧🇴',
  },
  BQ: {
    name: 'Bonaire',
    native: 'Bonaire',
    calling: '599',
    languages: ['nl'],
    emoji: '🇧🇶',
  },
  BR: {
    name: 'Brazil',
    native: 'Brasil',
    calling: '55',
    languages: ['pt'],
    emoji: '🇧🇷',
  },
  BS: {
    name: 'Bahamas',
    native: 'Bahamas',
    calling: '1',
    languages: ['en'],
    emoji: '🇧🇸',
  },
  BT: {
    name: 'Bhutan',
    native: 'ʼbrug-yul',
    calling: '975',
    languages: ['dz'],
    emoji: '🇧🇹',
  },
  BW: {
    name: 'Botswana',
    native: 'Botswana',
    calling: '267',
    languages: ['en', 'tn'],
    emoji: '🇧🇼',
  },
  BY: {
    name: 'Belarus',
    native: 'Белару́сь',
    calling: '375',
    languages: ['be', 'ru'],
    emoji: '🇧🇾',
  },
  BZ: {
    name: 'Belize',
    native: 'Belize',
    calling: '501',
    languages: ['en', 'es'],
    emoji: '🇧🇿',
  },
  CA: {
    name: 'Canada',
    native: 'Canada',
    calling: '1',
    languages: ['en', 'fr'],
    emoji: '🇨🇦',
  },
  CC: {
    name: 'Cocos [Keeling] Islands',
    native: 'Cocos (Keeling) Islands',
    calling: '61',
    languages: ['en'],
    emoji: '🇨🇨',
  },
  CD: {
    name: 'Democratic Republic of the Congo',
    native: 'République démocratique du Congo',
    calling: '243',
    languages: ['fr', 'ln', 'kg', 'sw', 'lu'],
    emoji: '🇨🇩',
  },
  CF: {
    name: 'Central African Republic',
    native: 'Ködörösêse tî Bêafrîka',
    calling: '236',
    languages: ['fr', 'sg'],
    emoji: '🇨🇫',
  },
  CG: {
    name: 'Republic of the Congo',
    native: 'République du Congo',
    calling: '242',
    languages: ['fr', 'ln'],
    emoji: '🇨🇬',
  },
  CH: {
    name: 'Switzerland',
    native: 'Schweiz',
    calling: '41',
    languages: ['de', 'fr', 'it'],
    emoji: '🇨🇭',
  },
  CI: {
    name: 'Ivory Coast',
    native: "Côte d'Ivoire",
    calling: '225',
    languages: ['fr'],
    emoji: '🇨🇮',
  },
  CK: {
    name: 'Cook Islands',
    native: 'Cook Islands',
    calling: '682',
    languages: ['en'],
    emoji: '🇨🇰',
  },
  CL: {
    name: 'Chile',
    native: 'Chile',
    calling: '56',
    languages: ['es'],
    emoji: '🇨🇱',
  },
  CM: {
    name: 'Cameroon',
    native: 'Cameroon',
    calling: '237',
    languages: ['en', 'fr'],
    emoji: '🇨🇲',
  },
  CN: {
    name: 'China',
    native: '中国',
    calling: '86',
    languages: ['zh'],
    emoji: '🇨🇳',
  },
  CO: {
    name: 'Colombia',
    native: 'Colombia',
    calling: '57',
    languages: ['es'],
    emoji: '🇨🇴',
  },
  CR: {
    name: 'Costa Rica',
    native: 'Costa Rica',
    calling: '506',
    languages: ['es'],
    emoji: '🇨🇷',
  },
  CU: {
    name: 'Cuba',
    native: 'Cuba',
    calling: '53',
    languages: ['es'],
    emoji: '🇨🇺',
  },
  CV: {
    name: 'Cape Verde',
    native: 'Cabo Verde',
    calling: '238',
    languages: ['pt'],
    emoji: '🇨🇻',
  },
  CW: {
    name: 'Curacao',
    native: 'Curaçao',
    calling: '599',
    languages: ['nl', 'pa', 'en'],
    emoji: '🇨🇼',
  },
  CX: {
    name: 'Christmas Island',
    native: 'Christmas Island',
    calling: '61',
    languages: ['en'],
    emoji: '🇨🇽',
  },
  CY: {
    name: 'Cyprus',
    native: 'Κύπρος',
    calling: '357',
    languages: ['el', 'tr', 'hy'],
    emoji: '🇨🇾',
  },
  CZ: {
    name: 'Czech Republic',
    native: 'Česká republika',
    calling: '420',
    languages: ['cs', 'sk'],
    emoji: '🇨🇿',
  },
  DE: {
    name: 'Germany',
    native: 'Deutschland',
    calling: '49',
    languages: ['de'],
    emoji: '🇩🇪',
  },
  DJ: {
    name: 'Djibouti',
    native: 'Djibouti',
    calling: '253',
    languages: ['fr', 'ar'],
    emoji: '🇩🇯',
  },
  DK: {
    name: 'Denmark',
    native: 'Danmark',
    calling: '45',
    languages: ['da'],
    emoji: '🇩🇰',
  },
  DM: {
    name: 'Dominica',
    native: 'Dominica',
    calling: '1',
    languages: ['en'],
    emoji: '🇩🇲',
  },
  DO: {
    name: 'Dominican Republic',
    native: 'República Dominicana',
    calling: '1',
    languages: ['es'],
    emoji: '🇩🇴',
  },
  DZ: {
    name: 'Algeria',
    native: 'الجزائر',
    calling: '213',
    languages: ['ar'],
    emoji: '🇩🇿',
  },
  EC: {
    name: 'Ecuador',
    native: 'Ecuador',
    calling: '593',
    languages: ['es'],
    emoji: '🇪🇨',
  },
  EE: {
    name: 'Estonia',
    native: 'Eesti',
    calling: '372',
    languages: ['et'],
    emoji: '🇪🇪',
  },
  EG: {
    name: 'Egypt',
    native: 'مصر‎',
    calling: '20',
    languages: ['ar'],
    emoji: '🇪🇬',
  },
  EH: {
    name: 'Western Sahara',
    native: 'الصحراء الغربية',
    calling: '212',
    languages: ['es'],
    emoji: '🇪🇭',
  },
  ER: {
    name: 'Eritrea',
    native: 'ኤርትራ',
    calling: '291',
    languages: ['ti', 'ar', 'en'],
    emoji: '🇪🇷',
  },
  ES: {
    name: 'Spain',
    native: 'España',
    calling: '34',
    languages: ['es', 'eu', 'ca', 'gl', 'oc'],
    emoji: '🇪🇸',
  },
  ET: {
    name: 'Ethiopia',
    native: 'ኢትዮጵያ',
    calling: '251',
    languages: ['am'],
    emoji: '🇪🇹',
  },
  FI: {
    name: 'Finland',
    native: 'Suomi',
    calling: '358',
    languages: ['fi', 'sv'],
    emoji: '🇫🇮',
  },
  FJ: {
    name: 'Fiji',
    native: 'Fiji',
    calling: '679',
    languages: ['en', 'fj', 'hi', 'ur'],
    emoji: '🇫🇯',
  },
  FK: {
    name: 'Falkland Islands',
    native: 'Falkland Islands',
    calling: '500',
    languages: ['en'],
    emoji: '🇫🇰',
  },
  FM: {
    name: 'Micronesia',
    native: 'Micronesia',
    calling: '691',
    languages: ['en'],
    emoji: '🇫🇲',
  },
  FO: {
    name: 'Faroe Islands',
    native: 'Føroyar',
    calling: '298',
    languages: ['fo'],
    emoji: '🇫🇴',
  },
  FR: {
    name: 'France',
    native: 'France',
    calling: '33',
    languages: ['fr'],
    emoji: '🇫🇷',
  },
  GA: {
    name: 'Gabon',
    native: 'Gabon',
    calling: '241',
    languages: ['fr'],
    emoji: '🇬🇦',
  },
  GB: {
    name: 'United Kingdom',
    native: 'United Kingdom',
    calling: '44',
    languages: ['en'],
    emoji: '🇬🇧',
  },
  GD: {
    name: 'Grenada',
    native: 'Grenada',
    calling: '1',
    languages: ['en'],
    emoji: '🇬🇩',
  },
  GE: {
    name: 'Georgia',
    native: 'საქართველო',
    calling: '995',
    languages: ['ka'],
    emoji: '🇬🇪',
  },
  GF: {
    name: 'French Guiana',
    native: 'Guyane française',
    calling: '594',
    languages: ['fr'],
    emoji: '🇬🇫',
  },
  GG: {
    name: 'Guernsey',
    native: 'Guernsey',
    calling: '44',
    languages: ['en', 'fr'],
    emoji: '🇬🇬',
  },
  GH: {
    name: 'Ghana',
    native: 'Ghana',
    calling: '233',
    languages: ['en'],
    emoji: '🇬🇭',
  },
  GI: {
    name: 'Gibraltar',
    native: 'Gibraltar',
    calling: '350',
    languages: ['en'],
    emoji: '🇬🇮',
  },
  GL: {
    name: 'Greenland',
    native: 'Kalaallit Nunaat',
    calling: '299',
    languages: ['kl'],
    emoji: '🇬🇱',
  },
  GM: {
    name: 'Gambia',
    native: 'Gambia',
    calling: '220',
    languages: ['en'],
    emoji: '🇬🇲',
  },
  GN: {
    name: 'Guinea',
    native: 'Guinée',
    calling: '224',
    languages: ['fr', 'ff'],
    emoji: '🇬🇳',
  },
  GP: {
    name: 'Guadeloupe',
    native: 'Guadeloupe',
    calling: '590',
    languages: ['fr'],
    emoji: '🇬🇵',
  },
  GQ: {
    name: 'Equatorial Guinea',
    native: 'Guinea Ecuatorial',
    calling: '240',
    languages: ['es', 'fr'],
    emoji: '🇬🇶',
  },
  GR: {
    name: 'Greece',
    native: 'Ελλάδα',
    calling: '30',
    languages: ['el'],
    emoji: '🇬🇷',
  },
  GT: {
    name: 'Guatemala',
    native: 'Guatemala',
    calling: '502',
    languages: ['es'],
    emoji: '🇬🇹',
  },
  GU: {
    name: 'Guam',
    native: 'Guam',
    calling: '1',
    languages: ['en', 'ch', 'es'],
    emoji: '🇬🇺',
  },
  GW: {
    name: 'Guinea-Bissau',
    native: 'Guiné-Bissau',
    calling: '245',
    languages: ['pt'],
    emoji: '🇬🇼',
  },
  GY: {
    name: 'Guyana',
    native: 'Guyana',
    calling: '592',
    languages: ['en'],
    emoji: '🇬🇾',
  },
  HK: {
    name: 'Hong Kong',
    native: '香港',
    calling: '852',
    languages: ['zh', 'en'],
    emoji: '🇭🇰',
  },
  HN: {
    name: 'Honduras',
    native: 'Honduras',
    calling: '504',
    languages: ['es'],
    emoji: '🇭🇳',
  },
  HR: {
    name: 'Croatia',
    native: 'Hrvatska',
    calling: '385',
    languages: ['hr'],
    emoji: '🇭🇷',
  },
  HT: {
    name: 'Haiti',
    native: 'Haïti',
    calling: '509',
    languages: ['fr', 'ht'],
    emoji: '🇭🇹',
  },
  HU: {
    name: 'Hungary',
    native: 'Magyarország',
    calling: '36',
    languages: ['hu'],
    emoji: '🇭🇺',
  },
  ID: {
    name: 'Indonesia',
    native: 'Indonesia',
    calling: '62',
    languages: ['id'],
    emoji: '🇮🇩',
  },
  IE: {
    name: 'Ireland',
    native: 'Éire',
    calling: '353',
    languages: ['ga', 'en'],
    emoji: '🇮🇪',
  },
  IL: {
    name: 'Israel',
    native: 'יִשְׂרָאֵל',
    calling: '972',
    languages: ['he', 'ar'],
    emoji: '🇮🇱',
  },
  IM: {
    name: 'Isle of Man',
    native: 'Isle of Man',
    calling: '44',
    languages: ['en', 'gv'],
    emoji: '🇮🇲',
  },
  IN: {
    name: 'India',
    native: 'भारत',
    calling: '91',
    languages: ['hi', 'en'],
    emoji: '🇮🇳',
  },
  IO: {
    name: 'British Indian Ocean Territory',
    native: 'British Indian Ocean Territory',
    calling: '246',
    languages: ['en'],
    emoji: '🇮🇴',
  },
  IQ: {
    name: 'Iraq',
    native: 'العراق',
    calling: '964',
    languages: ['ar', 'ku'],
    emoji: '🇮🇶',
  },
  IR: {
    name: 'Iran',
    native: 'ایران',
    calling: '98',
    languages: ['fa'],
    emoji: '🇮🇷',
  },
  IS: {
    name: 'Iceland',
    native: 'Ísland',
    calling: '354',
    languages: ['is'],
    emoji: '🇮🇸',
  },
  IT: {
    name: 'Italy',
    native: 'Italia',
    calling: '39',
    languages: ['it'],
    emoji: '🇮🇹',
  },
  JE: {
    name: 'Jersey',
    native: 'Jersey',
    calling: '44',
    languages: ['en', 'fr'],
    emoji: '🇯🇪',
  },
  JM: {
    name: 'Jamaica',
    native: 'Jamaica',
    calling: '1',
    languages: ['en'],
    emoji: '🇯🇲',
  },
  JO: {
    name: 'Jordan',
    native: 'الأردن',
    calling: '962',
    languages: ['ar'],
    emoji: '🇯🇴',
  },
  JP: {
    name: 'Japan',
    native: '日本',
    calling: '81',
    languages: ['ja'],
    emoji: '🇯🇵',
  },
  KE: {
    name: 'Kenya',
    native: 'Kenya',
    calling: '254',
    languages: ['en', 'sw'],
    emoji: '🇰🇪',
  },
  KG: {
    name: 'Kyrgyzstan',
    native: 'Кыргызстан',
    calling: '996',
    languages: ['ky', 'ru'],
    emoji: '🇰🇬',
  },
  KH: {
    name: 'Cambodia',
    native: 'Kâmpŭchéa',
    calling: '855',
    languages: ['km'],
    emoji: '🇰🇭',
  },
  KI: {
    name: 'Kiribati',
    native: 'Kiribati',
    calling: '686',
    languages: ['en'],
    emoji: '🇰🇮',
  },
  KM: {
    name: 'Comoros',
    native: 'Komori',
    calling: '269',
    languages: ['ar', 'fr'],
    emoji: '🇰🇲',
  },
  KN: {
    name: 'Saint Kitts and Nevis',
    native: 'Saint Kitts and Nevis',
    calling: '1',
    languages: ['en'],
    emoji: '🇰🇳',
  },
  KP: {
    name: 'North Korea',
    native: '북한',
    calling: '850',
    languages: ['ko'],
    emoji: '🇰🇵',
  },
  KR: {
    name: 'South Korea',
    native: '대한민국',
    calling: '82',
    languages: ['ko'],
    emoji: '🇰🇷',
  },
  KW: {
    name: 'Kuwait',
    native: 'الكويت',
    calling: '965',
    languages: ['ar'],
    emoji: '🇰🇼',
  },
  KY: {
    name: 'Cayman Islands',
    native: 'Cayman Islands',
    calling: '1',
    languages: ['en'],
    emoji: '🇰🇾',
  },
  KZ: {
    name: 'Kazakhstan',
    native: 'Қазақстан',
    calling: '7',
    languages: ['kk', 'ru'],
    emoji: '🇰🇿',
  },
  LA: {
    name: 'Laos',
    native: 'ສປປລາວ',
    calling: '856',
    languages: ['lo'],
    emoji: '🇱🇦',
  },
  LB: {
    name: 'Lebanon',
    native: 'لبنان',
    calling: '961',
    languages: ['ar', 'fr'],
    emoji: '🇱🇧',
  },
  LC: {
    name: 'Saint Lucia',
    native: 'Saint Lucia',
    calling: '1',
    languages: ['en'],
    emoji: '🇱🇨',
  },
  LI: {
    name: 'Liechtenstein',
    native: 'Liechtenstein',
    calling: '423',
    languages: ['de'],
    emoji: '🇱🇮',
  },
  LK: {
    name: 'Sri Lanka',
    native: 'śrī laṃkāva',
    calling: '94',
    languages: ['si', 'ta'],
    emoji: '🇱🇰',
  },
  LR: {
    name: 'Liberia',
    native: 'Liberia',
    calling: '231',
    languages: ['en'],
    emoji: '🇱🇷',
  },
  LS: {
    name: 'Lesotho',
    native: 'Lesotho',
    calling: '266',
    languages: ['en', 'st'],
    emoji: '🇱🇸',
  },
  LT: {
    name: 'Lithuania',
    native: 'Lietuva',
    calling: '370',
    languages: ['lt'],
    emoji: '🇱🇹',
  },
  LU: {
    name: 'Luxembourg',
    native: 'Luxembourg',
    calling: '352',
    languages: ['fr', 'de', 'lb'],
    emoji: '🇱🇺',
  },
  LV: {
    name: 'Latvia',
    native: 'Latvija',
    calling: '371',
    languages: ['lv'],
    emoji: '🇱🇻',
  },
  LY: {
    name: 'Libya',
    native: '‏ليبيا',
    calling: '218',
    languages: ['ar'],
    emoji: '🇱🇾',
  },
  MA: {
    name: 'Morocco',
    native: 'المغرب',
    calling: '212',
    languages: ['ar'],
    emoji: '🇲🇦',
  },
  MC: {
    name: 'Monaco',
    native: 'Monaco',
    calling: '377',
    languages: ['fr'],
    emoji: '🇲🇨',
  },
  MD: {
    name: 'Moldova',
    native: 'Moldova',
    calling: '373',
    languages: ['ro'],
    emoji: '🇲🇩',
  },
  ME: {
    name: 'Montenegro',
    native: 'Црна Гора',
    calling: '382',
    languages: ['sr', 'bs', 'sq', 'hr'],
    emoji: '🇲🇪',
  },
  MF: {
    name: 'Saint Martin',
    native: 'Saint-Martin',
    calling: '590',
    languages: ['en', 'fr', 'nl'],
    emoji: '🇲🇫',
  },
  MG: {
    name: 'Madagascar',
    native: 'Madagasikara',
    calling: '261',
    languages: ['fr', 'mg'],
    emoji: '🇲🇬',
  },
  MH: {
    name: 'Marshall Islands',
    native: 'M̧ajeļ',
    calling: '692',
    languages: ['en', 'mh'],
    emoji: '🇲🇭',
  },
  MK: {
    name: 'North Macedonia',
    native: 'Северна Македонија',
    calling: '389',
    languages: ['mk'],
    emoji: '🇲🇰',
  },
  ML: {
    name: 'Mali',
    native: 'Mali',
    calling: '223',
    languages: ['fr'],
    emoji: '🇲🇱',
  },
  MM: {
    name: 'Myanmar [Burma]',
    native: 'မြန်မာ',
    calling: '95',
    languages: ['my'],
    emoji: '🇲🇲',
  },
  MN: {
    name: 'Mongolia',
    native: 'Монгол улс',
    calling: '976',
    languages: ['mn'],
    emoji: '🇲🇳',
  },
  MO: {
    name: 'Macao',
    native: '澳門',
    calling: '853',
    languages: ['zh', 'pt'],
    emoji: '🇲🇴',
  },
  MP: {
    name: 'Northern Mariana Islands',
    native: 'Northern Mariana Islands',
    calling: '1',
    languages: ['en', 'ch'],
    emoji: '🇲🇵',
  },
  MQ: {
    name: 'Martinique',
    native: 'Martinique',
    calling: '596',
    languages: ['fr'],
    emoji: '🇲🇶',
  },
  MR: {
    name: 'Mauritania',
    native: 'موريتانيا',
    calling: '222',
    languages: ['ar'],
    emoji: '🇲🇷',
  },
  MS: {
    name: 'Montserrat',
    native: 'Montserrat',
    calling: '1',
    languages: ['en'],
    emoji: '🇲🇸',
  },
  MT: {
    name: 'Malta',
    native: 'Malta',
    calling: '356',
    languages: ['mt', 'en'],
    emoji: '🇲🇹',
  },
  MU: {
    name: 'Mauritius',
    native: 'Maurice',
    calling: '230',
    languages: ['en'],
    emoji: '🇲🇺',
  },
  MV: {
    name: 'Maldives',
    native: 'Maldives',
    calling: '960',
    languages: ['dv'],
    emoji: '🇲🇻',
  },
  MW: {
    name: 'Malawi',
    native: 'Malawi',
    calling: '265',
    languages: ['en', 'ny'],
    emoji: '🇲🇼',
  },
  MX: {
    name: 'Mexico',
    native: 'México',
    calling: '52',
    languages: ['es'],
    emoji: '🇲🇽',
  },
  MY: {
    name: 'Malaysia',
    native: 'Malaysia',
    calling: '60',
    languages: ['ms'],
    emoji: '🇲🇾',
  },
  MZ: {
    name: 'Mozambique',
    native: 'Moçambique',
    calling: '258',
    languages: ['pt'],
    emoji: '🇲🇿',
  },
  NA: {
    name: 'Namibia',
    native: 'Namibia',
    calling: '264',
    languages: ['en', 'af'],
    emoji: '🇳🇦',
  },
  NC: {
    name: 'New Caledonia',
    native: 'Nouvelle-Calédonie',
    calling: '687',
    languages: ['fr'],
    emoji: '🇳🇨',
  },
  NE: {
    name: 'Niger',
    native: 'Niger',
    calling: '227',
    languages: ['fr'],
    emoji: '🇳🇪',
  },
  NF: {
    name: 'Norfolk Island',
    native: 'Norfolk Island',
    calling: '672',
    languages: ['en'],
    emoji: '🇳🇫',
  },
  NG: {
    name: 'Nigeria',
    native: 'Nigeria',
    calling: '234',
    languages: ['en'],
    emoji: '🇳🇬',
  },
  NI: {
    name: 'Nicaragua',
    native: 'Nicaragua',
    calling: '505',
    languages: ['es'],
    emoji: '🇳🇮',
  },
  NL: {
    name: 'Netherlands',
    native: 'Nederland',
    calling: '31',
    languages: ['nl'],
    emoji: '🇳🇱',
  },
  NO: {
    name: 'Norway',
    native: 'Norge',
    calling: '47',
    languages: ['no', 'nb', 'nn'],
    emoji: '🇳🇴',
  },
  NP: {
    name: 'Nepal',
    native: 'नपल',
    calling: '977',
    languages: ['ne'],
    emoji: '🇳🇵',
  },
  NR: {
    name: 'Nauru',
    native: 'Nauru',
    calling: '674',
    languages: ['en', 'na'],
    emoji: '🇳🇷',
  },
  NU: {
    name: 'Niue',
    native: 'Niuē',
    calling: '683',
    languages: ['en'],
    emoji: '🇳🇺',
  },
  NZ: {
    name: 'New Zealand',
    native: 'New Zealand',
    calling: '64',
    languages: ['en', 'mi'],
    emoji: '🇳🇿',
  },
  OM: {
    name: 'Oman',
    native: 'عمان',
    calling: '968',
    languages: ['ar'],
    emoji: '🇴🇲',
  },
  PA: {
    name: 'Panama',
    native: 'Panamá',
    calling: '507',
    languages: ['es'],
    emoji: '🇵🇦',
  },
  PE: {
    name: 'Peru',
    native: 'Perú',
    calling: '51',
    languages: ['es'],
    emoji: '🇵🇪',
  },
  PF: {
    name: 'French Polynesia',
    native: 'Polynésie française',
    calling: '689',
    languages: ['fr'],
    emoji: '🇵🇫',
  },
  PG: {
    name: 'Papua New Guinea',
    native: 'Papua Niugini',
    calling: '675',
    languages: ['en'],
    emoji: '🇵🇬',
  },
  PH: {
    name: 'Philippines',
    native: 'Pilipinas',
    calling: '63',
    languages: ['en'],
    emoji: '🇵🇭',
  },
  PK: {
    name: 'Pakistan',
    native: 'Pakistan',
    calling: '92',
    languages: ['en', 'ur'],
    emoji: '🇵🇰',
  },
  PL: {
    name: 'Poland',
    native: 'Polska',
    calling: '48',
    languages: ['pl'],
    emoji: '🇵🇱',
  },
  PM: {
    name: 'Saint Pierre and Miquelon',
    native: 'Saint-Pierre-et-Miquelon',
    calling: '508',
    languages: ['fr'],
    emoji: '🇵🇲',
  },
  PR: {
    name: 'Puerto Rico',
    native: 'Puerto Rico',
    calling: '1',
    languages: ['es', 'en'],
    emoji: '🇵🇷',
  },
  PS: {
    name: 'Palestine',
    native: 'فلسطين',
    calling: '970',
    languages: ['ar'],
    emoji: '🇵🇸',
  },
  PT: {
    name: 'Portugal',
    native: 'Portugal',
    calling: '351',
    languages: ['pt'],
    emoji: '🇵🇹',
  },
  PW: {
    name: 'Palau',
    native: 'Palau',
    calling: '680',
    languages: ['en'],
    emoji: '🇵🇼',
  },
  PY: {
    name: 'Paraguay',
    native: 'Paraguay',
    calling: '595',
    languages: ['es', 'gn'],
    emoji: '🇵🇾',
  },
  QA: {
    name: 'Qatar',
    native: 'قطر',
    calling: '974',
    languages: ['ar'],
    emoji: '🇶🇦',
  },
  RE: {
    name: 'Réunion',
    native: 'La Réunion',
    calling: '262',
    languages: ['fr'],
    emoji: '🇷🇪',
  },
  RO: {
    name: 'Romania',
    native: 'România',
    calling: '40',
    languages: ['ro'],
    emoji: '🇷🇴',
  },
  RS: {
    name: 'Serbia',
    native: 'Србија',
    calling: '381',
    languages: ['sr'],
    emoji: '🇷🇸',
  },
  RU: {
    name: 'Russia',
    native: 'Россия',
    calling: '7',
    languages: ['ru'],
    emoji: '🇷🇺',
  },
  RW: {
    name: 'Rwanda',
    native: 'Rwanda',
    calling: '250',
    languages: ['rw', 'en', 'fr'],
    emoji: '🇷🇼',
  },
  SA: {
    name: 'Saudi Arabia',
    native: 'العربية السعودية',
    calling: '966',
    languages: ['ar'],
    emoji: '🇸🇦',
  },
  SB: {
    name: 'Solomon Islands',
    native: 'Solomon Islands',
    calling: '677',
    languages: ['en'],
    emoji: '🇸🇧',
  },
  SC: {
    name: 'Seychelles',
    native: 'Seychelles',
    calling: '248',
    languages: ['fr', 'en'],
    emoji: '🇸🇨',
  },
  SD: {
    name: 'Sudan',
    native: 'السودان',
    calling: '249',
    languages: ['ar', 'en'],
    emoji: '🇸🇩',
  },
  SE: {
    name: 'Sweden',
    native: 'Sverige',
    calling: '46',
    languages: ['sv'],
    emoji: '🇸🇪',
  },
  SG: {
    name: 'Singapore',
    native: 'Singapore',
    calling: '65',
    languages: ['en', 'ms', 'ta', 'zh'],
    emoji: '🇸🇬',
  },
  SH: {
    name: 'Saint Helena',
    native: 'Saint Helena',
    calling: '290',
    languages: ['en'],
    emoji: '🇸🇭',
  },
  SI: {
    name: 'Slovenia',
    native: 'Slovenija',
    calling: '386',
    languages: ['sl'],
    emoji: '🇸🇮',
  },
  SJ: {
    name: 'Svalbard and Jan Mayen',
    native: 'Svalbard og Jan Mayen',
    calling: '47',
    languages: ['no'],
    emoji: '🇸🇯',
  },
  SK: {
    name: 'Slovakia',
    native: 'Slovensko',
    calling: '421',
    languages: ['sk'],
    emoji: '🇸🇰',
  },
  SL: {
    name: 'Sierra Leone',
    native: 'Sierra Leone',
    calling: '232',
    languages: ['en'],
    emoji: '🇸🇱',
  },
  SM: {
    name: 'San Marino',
    native: 'San Marino',
    calling: '378',
    languages: ['it'],
    emoji: '🇸🇲',
  },
  SN: {
    name: 'Senegal',
    native: 'Sénégal',
    calling: '221',
    languages: ['fr'],
    emoji: '🇸🇳',
  },
  SO: {
    name: 'Somalia',
    native: 'Soomaaliya',
    calling: '252',
    languages: ['so', 'ar'],
    emoji: '🇸🇴',
  },
  SR: {
    name: 'Suriname',
    native: 'Suriname',
    calling: '597',
    languages: ['nl'],
    emoji: '🇸🇷',
  },
  SS: {
    name: 'South Sudan',
    native: 'South Sudan',
    calling: '211',
    languages: ['en'],
    emoji: '🇸🇸',
  },
  ST: {
    name: 'São Tomé and Príncipe',
    native: 'São Tomé e Príncipe',
    calling: '239',
    languages: ['pt'],
    emoji: '🇸🇹',
  },
  SV: {
    name: 'El Salvador',
    native: 'El Salvador',
    calling: '503',
    languages: ['es'],
    emoji: '🇸🇻',
  },
  SX: {
    name: 'Sint Maarten',
    native: 'Sint Maarten',
    calling: '1',
    languages: ['nl', 'en'],
    emoji: '🇸🇽',
  },
  SY: {
    name: 'Syria',
    native: 'سوريا',
    calling: '963',
    languages: ['ar'],
    emoji: '🇸🇾',
  },
  SZ: {
    name: 'Swaziland',
    native: 'Swaziland',
    calling: '268',
    languages: ['en', 'ss'],
    emoji: '🇸🇿',
  },
  TA: {
    name: 'Tristan da Cunha',
    native: 'Tristan da Cunha',
    calling: '993',
    languages: ['en'],
    emoji: '🇹🇦',
  },
  TC: {
    name: 'Turks and Caicos Islands',
    native: 'Turks and Caicos Islands',
    calling: '1',
    languages: ['en'],
    emoji: '🇹🇨',
  },
  TD: {
    name: 'Chad',
    native: 'Tchad',
    calling: '235',
    languages: ['fr', 'ar'],
    emoji: '🇹🇩',
  },
  TG: {
    name: 'Togo',
    native: 'Togo',
    calling: '228',
    languages: ['fr'],
    emoji: '🇹🇬',
  },
  TH: {
    name: 'Thailand',
    native: 'ประเทศไทย',
    calling: '66',
    languages: ['th'],
    emoji: '🇹🇭',
  },
  TJ: {
    name: 'Tajikistan',
    native: 'Тоҷикистон',
    calling: '992',
    languages: ['tg', 'ru'],
    emoji: '🇹🇯',
  },
  TK: {
    name: 'Tokelau',
    native: 'Tokelau',
    calling: '690',
    languages: ['en'],
    emoji: '🇹🇰',
  },
  TL: {
    name: 'East Timor',
    native: 'Timor-Leste',
    calling: '670',
    languages: ['pt'],
    emoji: '🇹🇱',
  },
  TM: {
    name: 'Turkmenistan',
    native: 'Türkmenistan',
    calling: '993',
    languages: ['tk', 'ru'],
    emoji: '🇹🇲',
  },
  TN: {
    name: 'Tunisia',
    native: 'تونس',
    calling: '216',
    languages: ['ar'],
    emoji: '🇹🇳',
  },
  TO: {
    name: 'Tonga',
    native: 'Tonga',
    calling: '676',
    languages: ['en', 'to'],
    emoji: '🇹🇴',
  },
  TR: {
    name: 'Turkey',
    native: 'Türkiye',
    calling: '90',
    languages: ['tr'],
    emoji: '🇹🇷',
  },
  TT: {
    name: 'Trinidad and Tobago',
    native: 'Trinidad and Tobago',
    calling: '1',
    languages: ['en'],
    emoji: '🇹🇹',
  },
  TV: {
    name: 'Tuvalu',
    native: 'Tuvalu',
    calling: '688',
    languages: ['en'],
    emoji: '🇹🇻',
  },
  TW: {
    name: 'Taiwan',
    native: '臺灣',
    calling: '886',
    languages: ['zh'],
    emoji: '🇹🇼',
  },
  TZ: {
    name: 'Tanzania',
    native: 'Tanzania',
    calling: '255',
    languages: ['sw', 'en'],
    emoji: '🇹🇿',
  },
  UA: {
    name: 'Ukraine',
    native: 'Україна',
    calling: '380',
    languages: ['uk'],
    emoji: '🇺🇦',
  },
  UG: {
    name: 'Uganda',
    native: 'Uganda',
    calling: '256',
    languages: ['en', 'sw'],
    emoji: '🇺🇬',
  },
  US: {
    name: 'United States',
    native: 'United States',
    calling: '1',
    languages: ['en'],
    emoji: '🇺🇸',
  },
  UY: {
    name: 'Uruguay',
    native: 'Uruguay',
    calling: '598',
    languages: ['es'],
    emoji: '🇺🇾',
  },
  UZ: {
    name: 'Uzbekistan',
    native: 'O‘zbekiston',
    calling: '998',
    languages: ['uz', 'ru'],
    emoji: '🇺🇿',
  },
  VA: {
    name: 'Vatican City',
    native: 'Vaticano',
    calling: '39',
    languages: ['it', 'la'],
    emoji: '🇻🇦',
  },
  VC: {
    name: 'Saint Vincent and the Grenadines',
    native: 'Saint Vincent and the Grenadines',
    calling: '1',
    languages: ['en'],
    emoji: '🇻🇨',
  },
  VE: {
    name: 'Venezuela',
    native: 'Venezuela',
    calling: '58',
    languages: ['es'],
    emoji: '🇻🇪',
  },
  VG: {
    name: 'British Virgin Islands',
    native: 'British Virgin Islands',
    calling: '1',
    languages: ['en'],
    emoji: '🇻🇬',
  },
  VI: {
    name: 'U.S. Virgin Islands',
    native: 'United States Virgin Islands',
    calling: '1',
    languages: ['en'],
    emoji: '🇻🇮',
  },
  VN: {
    name: 'Vietnam',
    native: 'Việt Nam',
    calling: '84',
    languages: ['vi'],
    emoji: '🇻🇳',
  },
  VU: {
    name: 'Vanuatu',
    native: 'Vanuatu',
    calling: '678',
    languages: ['bi', 'en', 'fr'],
    emoji: '🇻🇺',
  },
  WF: {
    name: 'Wallis and Futuna',
    native: 'Wallis et Futuna',
    calling: '681',
    languages: ['fr'],
    emoji: '🇼🇫',
  },
  WS: {
    name: 'Samoa',
    native: 'Samoa',
    calling: '685',
    languages: ['sm', 'en'],
    emoji: '🇼🇸',
  },
  XK: {
    name: 'Kosovo',
    native: 'Republika e Kosovës',
    calling: '383',
    languages: ['sq', 'sr'],
    emoji: '🇽🇰',
  },
  YE: {
    name: 'Yemen',
    native: 'اليَمَن',
    calling: '967',
    languages: ['ar'],
    emoji: '🇾🇪',
  },
  YT: {
    name: 'Mayotte',
    native: 'Mayotte',
    calling: '262',
    languages: ['fr'],
    emoji: '🇾🇹',
  },
  ZA: {
    name: 'South Africa',
    native: 'South Africa',
    calling: '27',
    languages: ['af', 'en', 'nr', 'st', 'ss', 'tn', 'ts', 've', 'xh', 'zu'],
    emoji: '🇿🇦',
  },
  ZM: {
    name: 'Zambia',
    native: 'Zambia',
    calling: '260',
    languages: ['en'],
    emoji: '🇿🇲',
  },
  ZW: {
    name: 'Zimbabwe',
    native: 'Zimbabwe',
    calling: '263',
    languages: ['en', 'sn', 'nd'],
    emoji: '🇿🇼',
  },
}

export default countries
