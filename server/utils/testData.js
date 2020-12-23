
const testData = {
  questions: [
    { 
      questionUUID: 'ede83751-33f3-4dcf-8c12-b7fc650c501c',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'multiplechoice',
      questionDescription: 'This is the question description.',
      possibleAnswers: [ 'answer a', 'answer b', 'answer c' ]
    },
    { 
      questionUUID: 'b2d224a6-0bf9-4c5b-880d-c62fec019a8d',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'checkbox',
      questionDescription: 'This is the question description.',
      possibleAnswers: [ 'checkbox option a', 'checkbox option b' ]
    },
    { 
      questionUUID: '886d73ab-1a54-4616-b1fd-f4c4898ed059',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'paragraph',
      questionDescription: 'This is the question description.'
    },
    { 
      questionUUID: '869743bd-fd80-4094-9d89-52fbee80dfcd',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'input',
      questionDescription: 'This is the question description.'
    },
    { 
      questionUUID: '6b57b827-9694-4bb4-aaac-d265f86a2f72',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'date',
      questionDescription: 'This is the question description.'
    },
    { 
      questionUUID: '3412308f-e653-4012-a1bd-abfd3d777ea5',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'radio',
      questionDescription: 'This is the question description.',
      possibleAnswers: [ 'radio option a', 'radio option b' ]
    },
    { 
      questionUUID: '2ebb72be-a117-491c-bf52-64f57e358475',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'dropdown',
      questionDescription: 'This is the question description.',
      possibleAnswers: [ 'dropdown option a', 'dropdown option b' ]
    },
    { 
      questionUUID: '24bafe46-5478-4917-882b-8e14348ec1d3',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'heading',
      questionDescription: 'This is the question description.'
    },
    { 
      questionUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'number',
      questionDescription: 'This is the question description.'
    },
    { 
      questionUUID: '0e956a4e-63a8-45ff-9f80-01daa32e1615',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'textarea',
      questionDescription: 'This is the question description.'
    },
    { 
      questionUUID: '56fdc70e-e37f-4794-bc81-5e4544bc9915',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'radio',
      questionDescription: 'This is the question description.',
      possibleAnswers: [ 'radio option a', 'radio option b' ]
    },
    { 
      questionUUID: '9bc94a01-a61f-4a01-a4df-cbd523d4fa7c',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'dropdown',
      questionDescription: 'This is the question description.',
      possibleAnswers: [ 'dropdown option a', 'dropdown option b' ]
    },
    { 
      questionUUID: '4a37e32c-34d9-4519-b374-75e34bae10f2',
      required: true,
      questionPrompt: 'This is the question prompt.',
      questionType: 'heading',
      questionDescription: 'This is the question description.'
    },
    { 
      questionUUID: '1e45d100-93a5-41b2-bc53-cba12a5616d5',
      required: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'number',
      questionDescription: 'This is the question description.'
    },
    { 
      questionUUID: '30ff124b-5133-40c6-987d-7b1f08f7e2cb',
      required: false,
      questionPrompt: 'This is the question prompt.',
      questionType: 'textarea',
      questionDescription: 'This is the question description.'
    }
  ],
  forms: [
    { 
      formUUID: '184a6221-3871-4db0-8081-a42c0ecff497',
      stateCode: 'NY',
      title: 'Example of a form title.',
      instructions: 'Here go example instructions.'
    },
    { 
      formUUID: '2818ddf0-792f-472e-84a0-df08584bb00d',
      stateCode: 'CA',
      title: 'Example of a form title.',
      instructions: 'Here go example instructions.'
    },
    {
      formUUID: '1dfb1ed3-58c8-434b-839e-feaae4e7e2ed',
      stateCode: 'CA',
      title: 'Example of a form title.',
      instructions: 'Here go example instructions.'
    }
  ],
  submissions: [
    {
      submissionUUID: 'a4a903fc-b161-498e-8b25-77f59a9d1534',
      formUUID: '1dfb1ed3-58c8-434b-839e-feaae4e7e2ed',
      answers: [
        {
          questionUUID: '4a37e32c-34d9-4519-b374-75e34bae10f2',
          value: 'this is a standard heading answer'
        },
        {
          questionUUID: '9bc94a01-a61f-4a01-a4df-cbd523d4fa7c',
          value: 'dropdown option a'
        },
        {
          questionUUID: '56fdc70e-e37f-4794-bc81-5e4544bc9915',
          value: 'radio option b'
        }
      ]
    },
    {
      submissionUUID: '902bdbcd-1868-4d10-8d19-f1b0c63b7c85',
      formUUID: '1dfb1ed3-58c8-434b-839e-feaae4e7e2ed',
      answers: [
        {
          questionUUID: 'ede83751-33f3-4dcf-8c12-b7fc650c501c',
          value: 'answer a'
        },
        {
          questionUUID: 'b2d224a6-0bf9-4c5b-880d-c62fec019a8d',
          value: 'checkbox option b'
        },
        {
          questionUUID: '886d73ab-1a54-4616-b1fd-f4c4898ed059',
          value: 'this is a standard paragraph answer'
        },
        {
          questionUUID: '869743bd-fd80-4094-9d89-52fbee80dfcd',
          value: 'this is a standard input answer'
        },
        {
          questionUUID: '6b57b827-9694-4bb4-aaac-d265f86a2f72',
          value: '2020-08-11'
        },
        {
          questionUUID: '3412308f-e653-4012-a1bd-abfd3d777ea5',
          value: 'radio option a'
        },
        {
          questionUUID: '2ebb72be-a117-491c-bf52-64f57e358475',
          value: 'dropdown option a'
        },
        {
          questionUUID: '21154dc7-5fac-41f9-a058-a4ee492cb304',
          value: '90210'
        },
        {
          questionUUID: '24bafe46-5478-4917-882b-8e14348ec1d3',
          value: 'this is a standard heading answer'
        },
        {
          questionUUID: '0e956a4e-63a8-45ff-9f80-01daa32e1615',
          value: 'this is a standard textarea answer'
        }
      ]
    }
  ]
}

module.exports = testData