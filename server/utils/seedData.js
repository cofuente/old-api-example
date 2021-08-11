const testData = {
  questions: [
    { // default question 0
      tag: 'default',
      questionUUID: 'b2d224a6-0bf9-4c5b-880d-c62fec019a8d',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'checkbox',
      possibleAnswers: [ 'checkbox option a', 'checkbox option b' ]
    },
    { // default question 1
      tag: 'default',
      questionUUID: '886d73ab-1a54-4616-b1fd-f4c4898ed059',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'paragraph',
    },
    { // default question 2
      tag: 'default',
      questionUUID: '839743bd-fd80-4094-9d89-52fbee80dfcd',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'input',
    },
    { // default question 3
      tag: 'default',
      questionUUID: '6b57b827-9694-4fb4-aaac-d265f86a2f72',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'date',
    },
    { // default question 4
      tag: 'default',
      questionUUID: '3412308f-e653-4712-a1bd-abfd3d777ea5',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'radio',
      possibleAnswers: [ 'radio option a', 'radio option b' ]
    },
    { // default question 5
      tag: 'default',
      questionUUID: '2ebb82be-a117-491c-bf52-64f57e358475',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'dropdown',
      possibleAnswers: [ 'dropdown option a', 'dropdown option b' ]
    },
    { // default question 6
      tag: 'default',
      questionUUID: '24bafe55-5478-4917-882b-8e14348ec1d3',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'heading',
    },
    { // default question 7
      tag: 'default',
      questionUUID: '21154dc7-5fac-43f9-a058-a4ee492cb304',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'number',
    },
    { // default question 8
      tag: 'default',
      questionUUID: '0e956a4e-63a8-32ff-9f80-01daa32e1615',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'textarea',
    },
    { // ne question 0
        tag: 'nextEnrollment',
        questionUUID: '50e1ee43-03f6-4231-affc-195ee76c7e12',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Is this your first time filling out NEXT\'s enrollment application?',
        questionType: 'dropdown',
        possibleAnswers: [
          'Yes',
          'No, but my circumstances have changed',
          'I\'m not sure'
        ]
      },
      {// ne question 1
        tag: 'nextEnrollment',
        questionUUID: '07a64674-95a1-4163-b48f-d2a346942e6a',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Please tell us how you learned about NEXT. Be specific.',
        questionType: 'paragraph'
      },
      {// ne question 1
        tag: 'nextEnrollment',
        questionUUID: 'f766957a-e5b0-4e90-a239-8071102e96f8',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Please tell us about your ability or inability to access syringes.',
        questionType: 'paragraph'
      },
      {// ne question 34
        tag: 'nextEnrollment',
        questionUUID: '394376d2-a161-4bbe-b0b4-b4dd400b99b6',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Where do you currently obtain injection related supplies?',
        questionType: 'input'
      },
      {// ne question 1
        tag: 'nextEnrollment',
        questionUUID: '842c7508-b000-4fc7-9c9f-4e934d0b8ed0',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'The First Letter of Your First Name',
        questionType: 'input'
      },
      {// ne question 2
        tag: 'nextEnrollment',
        questionUUID: '26464b66-7afb-443d-bc69-e6b3cb16ecfa',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'The First Letter of Your Last Name',
        questionType: 'input'
      },
      {// ne question 7
        tag: 'nextEnrollment',
        questionUUID: 'c0e71e1b-c7d0-47dd-8b7b-17ebc37a7b95',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Please tell us how you learned about NEXT. Be specific.',
        questionType: 'input'
      },
      {// ne question 8
        tag: 'nextEnrollment',
        questionUUID: '98e8fa30-9792-4081-830f-96a236fac83d',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Date of Birth',
        questionType: 'date'
      },
      {// ne question 9
        tag: 'nextEnrollment',
        questionUUID: 'b9dc6102-502b-4ab6-b4f3-2b3ee161b5ce',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Gender Identity',
        questionType: 'dropdown',
        possibleAnswers: [
          'Cis Woman  (non-transgender)',
          'Cis Man (non-transgender)',
          'Transgender Woman (MTF)',
          'Transgender Man (FTM)',
          'Non-binary or genderqueer, assigned female at birth',
          'Non-binary or genderqueer, assigned male at birth',
          'Gender identity not listed here'
        ]
      },
      {// ne question 9
        tag: 'nextEnrollment',
        questionUUID: 'ed716db9-9a0d-4054-866e-37e0725fd8a3',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'How would you describe your sexual orientation?',
        questionType: 'dropdown',
        possibleAnswers: [
          'Gay',
          'Lesbian',
          'Straight or heterosexual',
          'Bisexual',
          'Queer',
          'Pansexual',
          'Asexual',
          'Not sure or questioning',
          'Sexual orientation not listed',
          'Choose not to respond'
        ]
      },
      {// ne question 11
        tag: 'nextEnrollment',
        questionUUID: '440af351-63d2-454b-a3af-a18d40d9d8f5',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'My race/ethnicity could be characterized as...',
        questionType: 'checkbox',
        possibleAnswers: [
          'African American/ Black',
          'Hispanic/Latinx',
          'Caucasian/ White',
          'Native American/ American Indian, Alaska Native',
          'Native Hawaiian or Pacific Islander',
          'Asian',
          'I don\'t fit into this box'
        ]
      },
      {// ne question 12
        tag: 'nextEnrollment',
        questionUUID: '872af9f8-d99c-46e0-b222-a1cbdc6490d4',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'What is your preferred language? ',
        questionType: 'dropdown',
        possibleAnswers: [
          'English',
          'Spanish',
          'Russian',
          'Chinese (Cantonese or Mandarin)',
          'Language not listed here'
        ]
      },
      {// ne question 13
        tag: 'nextEnrollment',
        questionUUID: '01fffdfa-a893-47e2-8ee0-60809cd57726',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'What is your housing status?',
        questionType: 'dropdown',
        possibleAnswers: [
              'I rent or own my own home/apartment- Stable Situation',
              'I rent or own my own home/apartment- Unstable Situation',
              'I live with family or friends - Stable Situation',
              'I live with family or friends- Unstable Situation',
              'Homeless in the Shelter System',
              'Homeless not in the Shelter System',
              'My housing status is not described here',
      ]
      },
      {// ne question 4
        tag: 'nextEnrollment',
        questionUUID: '025d46a1-5144-42d9-9176-67501915af25',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'What\'s your street address?',
        questionType: 'input'
      },
      {// ne question 4
        tag: 'nextEnrollment',
        questionUUID: '0657b2c9-d611-4066-8f8d-dd74fd266227',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'What\'s your city?',
        questionType: 'input'
      },
      {// ne question 3
        tag: 'nextEnrollment',
        questionUUID: 'b1a3c65a-1ddd-4666-a1b0-4d2842577094',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'What is the state where you live?',
        questionType: 'dropdown',
        possibleAnswers: [
              'AK',
              'AL',
              'AR',
              'AZ',
              'CA',
              'CO',
              'CT',
              'DE',
              'DC',
              'FL',
              'GA',
              'HI',
              'IA',
              'ID',
              'IL',
              'IN',
              'KS',
              'KY',
              'LA',
              'MA',
              'MD',
              'ME',
              'MI',
              'MN',
              'MO',
              'MS',
              'MT',
              'NC',
              'ND',
              'NE',
              'NH',
              'NJ',
              'NM',
              'NV',
              'NY',
              'OH',
              'OK',
              'OR',
              'PA',
              'PR',
              'RI',
              'SC',
              'SD',
              'TN',
              'TX',
              'UT',
              'VA',
              'VT',
              'WA',
              'WI',
              'WV',
              'WY',
          ]
      },
      {// ne question 4
        tag: 'nextEnrollment',
        questionUUID: '9c8f020c-9ca9-4abc-90b2-817c6f49b1fa',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'What\'s your zip code?',
        questionType: 'input'
      },
      {// ne question 5
        tag: 'nextEnrollment',
        questionUUID: '65809857-da07-4a65-8656-d158a5bb0b75',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'What is your county?',
        questionType: 'input'
      },
      {// ne question 15
        tag: 'nextEnrollment',
        questionUUID: 'e7581915-b0a9-464f-a9b1-5f6fd293cec6',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Do you have health insurance?',
        questionType: 'radio',
        possibleAnswers: [
              'Yes',
              'No',
              'I\'m not sure'
      ]
      },
      {// ne question 16
        tag: 'nextEnrollment',
        questionUUID: 'ac6ce973-3a36-41e3-9369-8f2033ef5022',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Do you currently have a Primary Care Provider?',
        questionType: 'dropdown',
        possibleAnswers: [
          'Yes',
          'No',
          'I\'m not sure'
        ]
      },
      {// ne question 17
        tag: 'nextEnrollment',
        questionUUID: 'cd6e3ccf-279b-4fa3-bbd3-e566a3d99773',
        required: false,
        questionPrompt: 'If you have been hospitalized within the past six months, how many times?',
        questionType: 'input'
      },
      {// ne question 18
        tag: 'nextEnrollment',
        questionUUID: '2994a592-f148-4e91-8d4b-85fb85b0eb30',
        required: false,
        questionPrompt: 'Have you had issues related to abscesses, cellulitis, or endocarditis? Please explain.',
        questionType: 'input'
      },
      {// ne question 19
        tag: 'nextEnrollment',
        questionUUID: 'c2c0d01f-4187-4f51-9b3b-8ad246aa11cc',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Are you on public benefits not related to COVID?',
        questionType: 'input',
        questionType: 'checkbox',
        possibleAnswers: [
            'SSI',
            'SSD',
            'Food Stamps',
            'WIC',
            'Another form of benefits',
            'No benefits'
        ]
      },
      {// ne question 20
        tag: 'nextEnrollment',
        questionUUID: 'aa28ef3c-d32b-40ea-9ca8-3b4e911a7d3a',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Have you been diagnosed with any of the following?',
        questionType: 'checkbox',
        possibleAnswers: [
            'HIV/AIDS',
            'Hepatitis C',
            'Diabetes',
            'Mental Health Disorder',
            'Cardiovascular Disease',
            'Respiratory Disease',
            'None of the above'
        ]
      },
      {// ne question 21
        tag: 'nextEnrollment',
        questionUUID: '07136a3c-5439-4f70-bc4b-3788578e99dd',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Are you a US veteran or in active duty?',
        questionType: 'dropdown',
        possibleAnswers: [
          'Yes',
          'No'
        ]
      },
      {// ne question 10
        tag: 'nextEnrollment',
        questionUUID: '43aea536-e644-4d67-8881-11873f4c10f6',
        required: false,
        questionPrompt: 'Are you pregnant?',
        questionType: 'dropdown',
        possibleAnswers: [
          'Yes',
          'No',
          'I\'m not sure'
        ]
      },
      {// ne question 22
        tag: 'nextEnrollment',
        questionUUID: '1d546604-8e0c-442b-b9c6-b10082de8b27',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Are you parenting / do you have children at your residence?',
        questionType: 'dropdown',
        possibleAnswers: [
          'Yes',
          'No'
        ]
      },
      {// ne question 23
        tag: 'nextEnrollment',
        questionUUID: '0dd4fd38-3969-4d2d-a1da-48093a762c66',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Have you been arrested or incarcerated in the past year?',
        questionType: 'dropdown',
        possibleAnswers: [
          'No',
          'Yes, on probation',
          'Yes, on parole',
          'Yes, on probation and parole',
          'Yes, awaiting trial/ judge',
          'Yes, outstanding warrant',
          'Yes, case pending',
          'Yes, none of the above'
        ]
      },
      {// ne question 24
        tag: 'nextEnrollment',
        questionUUID: 'db8b8bfa-299f-42a0-9e6d-d99610a4322f',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'How old were you when you started injecting drugs?',
        questionType: 'input'
      },
      {// ne question 32
        tag: 'nextEnrollment',
        questionUUID: '34936d25-314a-4664-abc1-693dbd2068e0',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'How / where do you currently dispose of syringes? Please be specific.',
        questionType: 'input'
      },
      {// ne question 25
        tag: 'nextEnrollment',
        questionUUID: '2691ed4e-3256-4c3f-95eb-92050cd12ed6',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'About how many times per day do you inject?',
        questionType: 'input'
      },
      {// ne question 26
        tag: 'nextEnrollment',
        questionUUID: '7f4a3588-3926-4132-a325-c7f33a1fbf25',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'What drugs have you used in the past 30 days?',
        questionType: 'checkbox',
        possibleAnswers: [
          'Heroin',
          'Cocaine',
          'Methamphetamine',
          'Crack-cocaine',
          'Marijuana',
          'Alcohol',
          'Methadone (prescribed/ from a program or doctor)',
          'Methadone (not prescribed)',
          'Buprenorphine (prescribed/ from a program or doctor)',
          'Buprenorphine (not prescribed)',
          'Other opiates such as Oxycontin, Vicodin, Percocet, etc.',
          'Benzos such as Valium, Ativan, Xanax',
          'Synthetic marijuana/ K2',
          'other'
        ]
      },
      {// ne question 38
        tag: 'nextEnrollment',
        questionUUID: 'e496c927-bb34-4c43-9115-83e43889ed05',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Do you inject pills?',
        questionType: 'dropdown',
        possibleAnswers: [
          'No',
          'Yes, often',
          'Yes, rarely'
        ]
      },
      {// ne question 30
        tag: 'nextEnrollment',
        questionUUID: '8575fc03-b4fe-4f5d-9353-0b502baac1ac',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'How often have you reused your own syringes in the past month?',
        questionType: 'input'
      },
      {// ne question 31
        tag: 'nextEnrollment',
        questionUUID: 'a6ba3467-cd78-4e1c-9f3c-567edf5651d0',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'How often have you shared syringes with another person in the past month?',
        questionType: 'input'
      },
      {// ne question 27
        tag: 'nextEnrollment',
        questionUUID: '364f1742-6ba2-4f10-a396-3f1a7d1ee7c7',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Have you overdosed in the past year?',
        questionType: 'dropdown',
        possibleAnswers: [
            'Yes',
            'No',
            'I don\'t know/ I don\'t remember'
        ]
      },
      {// ne question 28
        tag: 'nextEnrollment',
        questionUUID: '2ae2c762-2373-4034-b2af-959304a39b19',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Have you witnessed someone overdose in the past year?',
        questionType: 'dropdown',
        possibleAnswers: [
            'Yes',
            'No',
            'I don\'t know/ I don\'t remember'
        ]
      },
      {// ne question 33
        tag: 'nextEnrollment',
        questionUUID: '53eea840-5a58-4758-a19a-597af757fd8f',
        required: false,
        questionPrompt: 'Is there anything else you want us to know about you, your history, or situation?',
        questionType: 'input'
      },
      {// ne question 35
        tag: 'nextEnrollment',
        questionUUID: '33ef7055-5edf-4edf-baf9-83d6ef9b076b',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'In addition to getting supplies for you, how many other people do you plan to get supplies from NEXT for?',
        questionType: 'dropdown',
        possibleAnswers: [
          'Just getting supplies for myself, no other people',
          '1-4 people',
          '4-10 people',
          '11+ people'
        ]
      },
      {// ne question 36
        tag: 'nextEnrollment',
        questionUUID: '21d865c3-1d3c-4e99-9968-8405b90f9c5f',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Related to security of packages containing injection related supplies:',
        questionType: 'dropdown',
        possibleAnswers: [
          'You can send whatever to my address, I\'ll always get it',
          'Please don\'t send boxes to my address, only large envelopes',
          'Other with free text field'
        ]
      },
      {// ne question 37
        tag: 'nextEnrollment',
        questionUUID: '3e53d554-f50a-4866-85ec-aeab31af2c64',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'What else should we know about sending you supplies or communicating with you?',
        questionType: 'input'
      },
      {// ne question 39
        tag: 'nextEnrollment',
        questionUUID: '753eda43-a227-4651-a3b2-b6538ce6f54c',
        required: false,
        questionPrompt: 'Security Concern:',
        questionType: 'input'
      },
      {// ne question 40
        tag: 'nextEnrollment',
        questionUUID: '932aa8f6-9e56-4944-9485-778d5650ccf1',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Age',
        questionType: 'input'
      },
      {// ne question 6
        tag: 'nextEnrollment',
        questionUUID: '31a4dec2-6587-4232-9925-2c106fb50494',
        required: true,
        encryptAnswer: false,
        questionPrompt: 'Please create a handle.',
        questionType: 'input'
      }
  ],
  programs: [
    { // NY
      programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304'
    },
    { // CA
      programUUID: '224ede70-0b7b-432c-89b1-8f4b938cfcad'
    },
    { // MI
      programUUID: '82ee1199-dd58-4352-bcdc-33199032aca6'
    },
    { // LA
      programUUID: '6e30baca-68ce-4618-8c79-ff481eb99d63'
    },
    { // OK
      programUUID: '6df663ad-9f30-4a6c-8d14-f8c7905a759f'
    },
    { // NE
      programUUID: '2fb1cd83-f156-4e31-974b-8fa8b1892822'
    },
    { // OTHER
      programUUID: '24bafe56-5478-4917-882b-8e14348ec1d3'
    }
  ],
  forms: [
    { // NY-order-form
      tag: 'default',
      endpoint: 'hereGOESaNICEendpointSTRING1',
      formUUID: '9fff3eec-231a-48d7-a2a3-593ffe924d50',
      programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
      title: 'Example of a form title.',
      instructions: 'Here go example instructions.'
    },
    { // NY-enrollment-form
      tag: 'nextEnrollment',
      endpoint: 'nydistro/enrollment',
      formUUID: '95dfc8ea-30a1-4c4b-be03-62fbf5b7cd2f',
      programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
      title: 'Secure Enrollment for NEXT Distro\'s Mail-based Harm Reduction Program',
      instructions: 'We are committed to your safety and security, for that reason this enrollment form does not ask for your name and address. After you complete this form, please text the \'handle\' you choose and your name and mailing address to nextdistro@pm.me. Alternately you can use the Signal app (signal.org) to message (646) 389-0752. More information about Signal can be found at nextdistro.org/privacy Please reach out to Jamie and Dan at nextdistro@pm.me if you have any questions.\nIf you are only looking for naloxone/Narcan, please go to nextdistro.org/naloxone. Do not fill out this form.'
    },
    { // CA-enrollment-form
      tag: 'default',
      endpoint: 'hereGOESaNICEendpointSTRING2',
      formUUID: 'b48a73bb-d7ee-4cbc-9420-fbb8614bbab3',
      programUUID: '224ede70-0b7b-432c-89b1-8f4b938cfcad',
      title: 'Example of a form title.',
      instructions: 'Here go example instructions.'
    },
    { // NY-other-form
      tag: 'default',
      endpoint: 'hereGOESaNICEendpointSTRING3',
      formUUID: 'b0b649c2-03c2-490f-89b4-fcd16b953986',
      programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
      title: 'Example of a form title.',
      instructions: 'Here go example instructions.'
    }
  ],
  users: [
    {
      programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
      username: 'jamie',
      password: 'SUPERb4sicpaz123'
    },
    {
      programUUID: '224ede70-0b7b-432c-89b1-8f4b938cfcad',
      username: 'schuyler',
      password: 'SUPERpaz123'
    },
    {
      programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
      username: 'chiara',
      password: '*********'
    },
  ],
  submissions: [
    { // submission 0 to NY-enrollment-form
      submissionUUID: '5b4b92b9-59d1-4054-b75f-f2a2cd588f76',
      formUUID: '95dfc8ea-30a1-4c4b-be03-62fbf5b7cd2f',
    },
    { // submission 1 to NY-enrollment-form
      submissionUUID: '2b4792b9-59d1-4054-b75f-f2a2dd588f91',
      formUUID: '95dfc8ea-30a1-4c4b-be03-62fbf5b7cd2f'
    },
    { // submission 2 to NY-enrollment-form
      submissionUUID: 'b4792b92-59d1-4054-b75f-f2a2dd588f91',
      formUUID: '95dfc8ea-30a1-4c4b-be03-62fbf5b7cd2f'
    },
    { // submission 3 to NY-enrollment-form
      submissionUUID: '24b792b9-59d1-4054-b75f-f2a2dd588f91',
      formUUID: '95dfc8ea-30a1-4c4b-be03-62fbf5b7cd2f',
    }
  ],
}

module.exports = testData
