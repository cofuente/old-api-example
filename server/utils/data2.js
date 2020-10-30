
const reverseReportData = [
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Where did you obtain the naloxone?',
    possibleAnswers: [
      ['From naloxoneforall.org or a Next Naloxone affiliate','From naloxoneforall.org or a Next Naloxone affiliate'],
      ['From nextdistro.org, NEXT Distro syringe access site','From nextdistro.org, NEXT Distro syringe access site'],
      ['From someone who received supplies from you','From someone who received supplies from you'],
      ['Tracey Helton/ u/Tracey415','Tracey Helton/ u/Tracey415'],
      ['Some other place','Some other place']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'What is your relationship to the person who experienced the overdose?',
    possibleAnswers: [
      ['Friend or acquaintance','Friend or acquaintance'],
      ['Wife/husband/partner, girlfriend/boyfriend','Wife/husband/partner, girlfriend/boyfriend'],
      ['Family member','Family member'],
      ['Stranger', 'Stranger'],
      ['Prefer not to answer','Prefer not to answer']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'What type of naloxone did you use?',
    possibleAnswers: [
      ['Narcan brand naloxone (one-hand spray)', 'Narcan brand naloxone (one-hand spray)'],
      ['Intramuscular naloxone (with syringe)', 'Intramuscular naloxone (with syringe)'],
      ['Naloxone nasal spray (with twist-on atomizer)', 'Naloxone nasal spray (with twist-on atomizer)'],
      ['Evzio autoinjector', 'Evzio autoinjector']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'input',
    questionPrompt: 'In what city/town did the overdose occur?'
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'input',
    questionPrompt: 'In what state did the overdose occur?',
    possibleAnswers: [
      ['AK','Alabama'],
      ['AL','Alaska'],
      ['AR','Arizona'],
      ['AZ','Arkansas'],
      ['CA','California'],
      ['CO','Colorado'],
      ['CT','Connecticut'],
      ['DE','Delaware'],
      ['FL','Florida'],
      ['GA','Georgia'],
      ['HI','Hawaii'],
      ['IA','Iowa'],
      ['ID','Idaho'],
      ['IL','Illinois'],
      ['IN','Illinois'],
      ['KS','Kansas'],
      ['KY','Kentucky'],
      ['LA','Louisiana'],
      ['MA','Massachusetts'],
      ['MD','Maryland'],
      ['ME','Maine'],
      ['MI','Michigan'],
      ['MN','Minnesota'],
      ['MO','Missouri'],
      ['MS','Mississippi'],
      ['MT','Montana'],
      ['NC','North Carolina'],
      ['ND','North Dakota'],
      ['NE','Nebraska'],
      ['NH','New Hampshire'],
      ['NJ','New Jersey'],
      ['NM','New Mexico'],
      ['NV','Nevada'],
      ['NY','New York'],
      ['OH','Ohio'],
      ['OK','Oklahoma'],
      ['OR','Oregon'],
      ['PA','Pennsylvania'],
      ['RI','Rhode Island'],
      ['SC','South Carolina'],
      ['SD','South Dakota'],
      ['TN','Tennessee'],
      ['TX','Texas'],
      ['UT','Utah'],
      ['VA','Virginia'],
      ['VT','Vermont'],
      ['WA','Washington'],
      ['WI','Wisconsin'],
      ['WV','West Virginia'],
      ['WY','Wyoming']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'input',
    questionPrompt: 'In what zip code did the overdose occur?'
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'date',
    questionPrompt: 'Please provide the date the naloxone was used.'
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'How many doses of naloxone was used?',
    possibleAnswers: [
      ['1','1'],
      ['2','2'],
      ['3','3'],
      ['4','4'],
      ['5+','5+'],
      ['Don\'t recall','Don\'t recall']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Was this location...',
    possibleAnswers: [
      ['Someone\'s home or apartment','Someone\'s home or apartment'],
      ['Shelter or in a supportive housing setting','Shelter or in a supportive housing setting'],
      ['A business such as a store, bar, or restaurant','A business such as a store, bar, or restaurant'],
      ['Syringe exchange, drug treatment, or social services','Syringe exchange, drug treatment, or social services'],
      ['Public place OUTSIDE (park, street, sidewalk, yard)','Public place OUTSIDE (park, street, sidewalk, yard)'],
      ['Public place INSIDE other than a library school or college','Public place INSIDE other than a library school or college'],
      ['A library','A library'],
      ['A college, university, or trade school campus','A college, university, or trade school campus'],
      ['A secondary school (middle school, high school)','A secondary school (middle school, high school)'],
      ['Other','Other']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Was the person who experienced the overdose...',
    possibleAnswers: [
      ['Cis Woman (non-transgender)','Cis Woman (non-transgender)'],
      ['Cis Man (non-transgender)','Cis Man (non-transgender)'],
      ['Transgender Woman (MTF)','Transgender Woman (MTF)'],
      ['Transgender Man (FTM)','Transgender Man (FTM)'],
      ['Non-binary or genderqueer, assigned female at birth','Non-binary or genderqueer, assigned female at birth'],
      ['Non-binary or genderqueer, assigned male at birth','Non-binary or genderqueer, assigned male at birth']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Was the person who experienced the overdose...',
    possibleAnswers: [
      ['Cis Woman (non-transgender)','Cis Woman (non-transgender)'],
      ['Cis Man (non-transgender)','Cis Man (non-transgender)'],
      ['Transgender Woman (MTF)','Transgender Woman (MTF)'],
      ['Transgender Man (FTM)','Transgender Man (FTM)'],
      ['Non-binary or genderqueer, assigned female at birth','Non-binary or genderqueer, assigned female at birth'],
      ['Non-binary or genderqueer, assigned male at birth','Non-binary or genderqueer, assigned male at birth']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Was the person who experienced the overdose...',
    possibleAnswers: [
      ['African-American/Black','African-American/Black'],
      ['Hispanic/Latinx','Hispanic/Latinx'],
      ['Caucasian/White','Caucasian/White'],
      ['Asian/Pacific Islander','Asian/Pacific Islander'],
      ['Native American','Native American'],
      ['I\'m not sure','I\'m not sure']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'input',
    questionPrompt: 'About how old were they?'
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Has the person experienced an overdose in the past?',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Not sure','Not sure']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'checkbox',
    questionPrompt: 'Has the person experienced an overdose in the past?',
    possibleAnswers: [
      ['Inject heroin','Inject heroin'],
      ['Sniff heroin','Sniff heroin'],
      ['Use heroin, but how is unknown','Use heroin, but how is unknown'],
      ['Not use heroin','Not use heroin'],
      ['Not sure if heroin was used','Not sure if heroin was used'],
      ['Other','Other']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'checkbox',
    questionPrompt: 'Do you know if the person who overdosed had used anything else?',
    possibleAnswers: [
      ['Methadone','Methadone'],
      ['Pain Pills','Pain Pills'],
      ['Cocaine','Cocaine'],
      ['Alcohol','Alcohol'],
      ['Benzos','Benzos'],
      ['Amphetamine/Methamphetamine','Amphetamine/Methamphetamine'],
      ['Fentanyl','Fentanyl'],
      ['Something else','Something else']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Was the person who overdosed conscious before naloxone was used?',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Unknown','Unknown']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Was the person who overdosed breathing before naloxone was used? ',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Unknown','Unknown']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Was rescue breathing performed?',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Unknown','Unknown']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Were EMS (911) contacted?',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Unknown','Unknown']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Did anyone else also give the person naloxone for the overdose?',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Unknown','Unknown']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'If you answered "Yes" that someone else gave naloxone for the same overdose, were they...',
    possibleAnswers: [
      ['Police','Police'],
      ['EMS','EMS'],
      ['Firefighter','Firefighter'],
      ['Another Civilian','Another Civilian'],
      ['Other','Other']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'input',
    questionPrompt: 'If someone else gave the overdosing person naloxone, do you know what kind they used?'
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Did the person who overdosed survive?',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['I\'m not sure','I\'m not sure']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'input',
    questionPrompt: 'Please provide any other information that would be helpful in describing the overdose.',
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'input',
    questionPrompt: 'If you would like more naloxone sent to you, please write your full mailing address and email address (please use one we recognize if possible).',
  },
  {
    questionUUID: '',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Alternately, please call 917-828-0293. If we don\'t pick up right away, leave a message and someone will call you back as soon as possible.',
    possibleAnswers: [
      ['No','No'],
      ['Maybe','Maybe'],
      ['Yes','Yes']
    ]
  },
  {
    questionUUID: '',
    required: true,
    questionType: ' ',
    questionPrompt: ' We are trying to raise money to build out our website and get more postage to send supplies to more people. If you have a message you would be willing to anonymously give about why this program is important. Please include it here.',
    possibleAnswers: [
      ['No','No'],
      ['Maybe','Maybe'],
      ['Yes','Yes']
    ]
  }
]

module.exports = reverseReportData