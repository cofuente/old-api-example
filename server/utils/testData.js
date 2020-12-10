/* eslint-disable max-len */

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
      questionDescription: 'This is the question description.'
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
      questionDescription: 'This is the question description.'
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
    }
  ]
}

module.exports = testData