/* eslint-disable max-len */

const reverseReportData = [
  {
    questionUUID: '181cacd0-84d7-4cdd-a8cd-4b5e79cd559a',
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
    questionUUID: '27816e7b-24d2-422c-8a94-deb2420e2f15',
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
    questionUUID: '59b7e715-0635-45fa-8843-5425fdd358d7',
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
    questionUUID: '1a6bb769-4dac-4c85-9f55-387371488072',
    required: true,
    questionType: 'input',
    questionPrompt: 'In what city/town did the overdose occur?'
  },
  {
    questionUUID: 'ffb2df27-e609-4619-b137-c5865fb93205',
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
    questionUUID: 'a5e0761f-9998-4d3b-b45d-fd7a8efa96c4',
    required: true,
    questionType: 'input',
    questionPrompt: 'In what zip code did the overdose occur?'
  },
  {
    questionUUID: '14082857-5610-4e24-8190-360188243a97',
    required: true,
    questionType: 'date',
    questionPrompt: 'Please provide the date the naloxone was used.',
    questionDescription: 'If you\'re not sure you can put the month/year.'
  },
  {
    questionUUID: '0f978d79-4e33-437e-8d4b-51422b0318a4',
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
    questionUUID: 'a50d37b4-13a7-44eb-baef-902684769516',
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
    questionUUID: 'ce957635-af0a-4879-a7c9-3d5bc542387e',
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
    questionUUID: '6952a5ac-772d-4331-8272-f7409c8c87d0',
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
    questionUUID: '5cda099f-189b-4e91-82c5-e1ca99704920',
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
    questionUUID: '0c22fc29-a5cf-41aa-a459-4fac45181c10',
    required: true,
    questionType: 'input',
    questionPrompt: 'About how old were they?'
  },
  {
    questionUUID: 'a102e925-0959-40da-a676-de10b7548ba5',
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
    questionUUID: 'ebee6a78-fc10-4766-a80e-9bcff977acee',
    required: true,
    questionType: 'checkbox',
    questionPrompt: 'Did the person who experienced the overdose...',
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
    questionUUID: '9ccc9f10-3604-4064-8ee6-b7054790d7f1',
    required: false,
    questionType: 'checkbox',
    questionPrompt: 'Do you know if the person who overdosed had used anything else?',
    questionDescription: 'Check all that apply, not required',
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
    questionUUID: '1b9a0fcf-1cc8-408c-ba14-3fad67003819',
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
    questionUUID: 'cdf467ae-6be2-48f9-ac57-02104e1246d0',
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
    questionUUID: 'bfab869a-ca62-4b7e-bcc9-e6a2d1509aaa',
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
    questionUUID: '52118e33-1b54-41df-8523-0f7f556b4824',
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
    questionUUID: '4fd792c4-4ef6-488e-8212-9d6eef8b0a51',
    required: false,
    questionType: 'dropdown',
    questionPrompt: 'Did anyone else also give the person naloxone for the overdose?',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Unknown','Unknown']
    ]
  },
  {
    questionUUID: 'b64ab5c2-3d8a-4740-bdec-a71513c6740d',
    required: false,
    questionType: 'dropdown',
    questionPrompt: 'If you answered "Yes" that someone else gave naloxone for the same overdose, were they...',
    questionDescription: 'Check all that apply, not required',
    possibleAnswers: [
      ['Police','Police'],
      ['EMS','EMS'],
      ['Firefighter','Firefighter'],
      ['Another Civilian','Another Civilian'],
      ['Other','Other']
    ]
  },
  {
    questionUUID: '3bbbd1f1-4ddc-4f72-893c-01f67ab79a1b',
    required: true,
    questionType: 'input',
    questionPrompt: 'If someone else gave the overdosing person naloxone, do you know what kind they used?',
    questionDescription: 'If so, please describe.'
  },
  {
    questionUUID: '13aefbf9-a014-4376-8d04-f08cbf00679a',
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
    questionUUID: 'fde1b1d9-587c-4ca3-85dd-f7791ecbb115',
    required: false,
    questionType: 'input',
    questionPrompt: 'Please provide any other information that would be helpful in describing the overdose.'
  },
  {
    questionUUID: '497bc235-a557-4091-be11-88ea31ebadf4',
    required: false,
    questionType: 'input',
    questionPrompt: 'If you would like more naloxone sent to you, please write your full mailing address and email address (please use one we recognize if possible).',
    questionDescription: 'We may contact you to confirm your address. Please look for our message.'
  },
  {
    questionUUID: '8e7adbb8-c0a2-47b0-8848-f0721798592d',
    required: false,
    questionType: 'dropdown',
    questionPrompt: 'Would you like us to call you to debrief the experience?',
    questionDescription: 'Alternately, please call 917-828-0293. If we don\'t pick up right away, leave a message and someone will call you back as soon as possible.',
    possibleAnswers: [
      ['No','No'],
      ['Maybe','Maybe'],
      ['Yes','Yes']
    ]
  },
  {
    questionUUID: '38076f1a-2c3c-4fff-aa31-7809d4d03a9f',
    required: false,
    questionType: 'textarea',
    questionPrompt: ' We are trying to raise money to build out our website and get more postage to send supplies to more people. If you have a message you would be willing to anonymously give about why this program is important. Please include it here.',
    possibleAnswers: [
      ['No','No'],
      ['Maybe','Maybe'],
      ['Yes','Yes']
    ]
  }
]

module.exports = reverseReportData