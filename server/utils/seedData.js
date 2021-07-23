const testData = {
  questions: [
    {
      questionUUID: 'ede83751-33f3-4dcf-8c12-b7fc650c501c',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'multiplechoice',
      possibleAnswers: [ 'answer a', 'answer b', 'answer c' ]
    },
    {
      questionUUID: 'b2d224a6-0bf9-4c5b-880d-c62fec019a8d',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'checkbox',
      possibleAnswers: [ 'checkbox option a', 'checkbox option b' ]
    },
    {
      questionUUID: '886d73ab-1a54-4616-b1fd-f4c4898ed059',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'paragraph',
    },
    {
      questionUUID: '839743bd-fd80-4094-9d89-52fbee80dfcd',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'input',
    },
    {
      questionUUID: '6b57b827-9694-4fb4-aaac-d265f86a2f72',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'date',
    },
    {
      questionUUID: '3412308f-e653-4712-a1bd-abfd3d777ea5',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'radio',
      possibleAnswers: [ 'radio option a', 'radio option b' ]
    },
    {
      questionUUID: '2ebb82be-a117-491c-bf52-64f57e358475',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'dropdown',
      possibleAnswers: [ 'dropdown option a', 'dropdown option b' ]
    },
    {
      questionUUID: '24bafe55-5478-4917-882b-8e14348ec1d3',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'heading',
    },
    {
      questionUUID: '21154dc7-5fac-43f9-a058-a4ee492cb304',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'number',
    },
    {
      questionUUID: '0e956a4e-63a8-32ff-9f80-01daa32e1615',
      required: true,
      encryptAnswer: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'textarea',
    }
  ],
  programs: [
      { // NY
        programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304'
      },
      { // CA
        programUUID: '224ede70-0b7b-432c-89b1-8f4b938cfcad'
      },
      {
        programUUID: '24bafe56-5478-4917-882b-8e14348ec1d3'
      }
  ],
  forms: [
    { // NY-order-form
      formUUID: '9fff3eec-231a-48d7-a2a3-593ffe924d50',
      programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
      stateCode: 'NY',
      title: 'Example of a form title.',
      instructions: 'Here go example instructions.'
    },
    { // NY-enrollment-form
      formUUID: '95dfc8ea-30a1-4c4b-be03-62fbf5b7cd2f',
      programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
      stateCode: 'NY',
      title: 'Secure Enrollment for NEXT Distro\'s Mail-based Harm Reduction Program',
      instructions: 'We are committed to your safety and security, for that reason this enrollment form does not ask for your name and address. After you complete this form, please text the \"handle\" you choose and your name and mailing address to nextdistro@pm.me. Alternately you can use the Signal app (signal.org) to message (646) 389-0752. More information about Signal can be found at nextdistro.org/privacy Please reach out to Jamie and Dan at nextdistro@pm.me if you have any questions.\nIf you are only looking for naloxone/Narcan, please go to nextdistro.org/naloxone. Do not fill out this form.'
    },
    { // CA-enrollment-form
      formUUID: 'b48a73bb-d7ee-4cbc-9420-fbb8614bbab3',
      programUUID: '224ede70-0b7b-432c-89b1-8f4b938cfcad',
      stateCode: 'CA',
      title: 'Example of a form title.',
      instructions: 'Here go example instructions.'
    },
    { // NY-other-form
      formUUID: 'b0b649c2-03c2-490f-89b4-fcd16b953986',
      programUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
      stateCode: 'NY',
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
  ]
}

module.exports = testData
